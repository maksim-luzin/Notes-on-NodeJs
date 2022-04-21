import { v4 as uuid } from 'uuid';
import { INote, INoteCreate, ISuccess } from '../../common/interfaces';
import { database as databaseConnection, TDatabase } from '../connection';
import { TableName, FieldsForCreate } from '../../common/const';
import { FieldsName } from '../../common/enums';

class NotesRepository {
  db: TDatabase;

  constructor(database: TDatabase) {
    this.db = database;
  }

  getAll() {
    return new Promise((resolve: (value: INote[]) => void, reject) =>
      this.db.all(
        `SELECT * FROM ${TableName} ORDER BY ${FieldsName.Created} ASC`,
        (err, notes: INote[]) => {
          if (err) reject(new Error(''));
          resolve(notes);
        }
      )
    );
  }

  getById(id: string) {
    return new Promise((resolve: (value: INote) => void, reject) =>
      this.db.get(
        `SELECT * FROM ${TableName} WHERE ${FieldsName.Id} = ?`,
        id,
        (err, note) => {
          if (err || !note) reject(new Error(''));
          return resolve(note);
        }
      )
    );
  }

  create({ category, name, content }: INoteCreate) {
    const id = uuid();

    return new Promise((resolve: (note: INote) => void, reject) =>
      this.db.get(
        `INSERT INTO ${TableName} (${FieldsForCreate}) VALUES(?, ?, ?, ?)`,
        [id, category, name, content],
        async (err) => {
          if (err) reject(new Error(''));
          const note = await this.getById(id);
          return resolve(note);
        }
      )
    );
  }

  updateById<D>(id: string, data: D) {
    const entries = Object.entries(data);
    const keys = entries.map((entry) => entry[0]).join(' = ?, ');
    const values = entries.map((entry) => entry[1]);

    return new Promise((resolve: (note: INote) => void, reject) =>
      this.db.get(
        `UPDATE ${TableName}  SET ${keys} = ? WHERE ${FieldsName.Id} = ?`,
        [...values, id],
        async (err) => {
          if (err) reject(new Error(''));
          const note = await this.getById(id);
          return resolve(note);
        }
      )
    );
  }

  deleteById(id: string) {
    return new Promise((resolve: (success: ISuccess) => void, reject) =>
      this.db.get(
        `DELETE FROM ${TableName} WHERE ${FieldsName.Id} = ?`,
        [id],
        (err) => {
          if (err) reject(new Error(''));
          return resolve({ success: true });
        }
      )
    );
  }
}

const notesRepository = new NotesRepository(databaseConnection);

export { notesRepository };

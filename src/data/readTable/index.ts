import { database } from '../connection';
import { TableName } from '../../common/const';

const readTable = () =>
  database.all(`SELECT * FROM ${TableName}`, (err, notes) => {
    if (err) console.error(err);
    console.log(notes);

    database.close();
  });

readTable();

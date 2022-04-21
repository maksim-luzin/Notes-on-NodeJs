import { database } from '../connection';
import { TableName, FieldsForSeed } from '../../common/const';
import { seedData } from '../seed-data';

database.serialize(() => {
  const stmt = database.prepare(
    `INSERT INTO ${TableName} (${FieldsForSeed}) VALUES(?, ?, ?, ?, ?, ?)`
  );

  seedData.forEach(({ id, category, name, content, status, created }) =>
    stmt.run(id, category, name, content, status, created)
  );

  stmt.finalize();
});

database.close();

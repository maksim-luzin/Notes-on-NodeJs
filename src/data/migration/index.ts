import { database } from '../connection';
import { TableName } from '../../common/const';
import { FieldsName, Status } from '../../common/enums';

const CreateTable = `
  CREATE TABLE IF NOT EXISTS ${TableName} (
    ${FieldsName.Id} TEXT PRIMARY KEY NOT NULL,
    ${FieldsName.Category} TEXT NOT NULL,
    ${FieldsName.Name} TEXT NOT NULL,
    ${FieldsName.Content} TEXT NOT NULL, 
    ${FieldsName.Status} TEXT NOT NULL DEFAULT ${Status.Active},
    ${FieldsName.Created} DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`;

const createTable = async () => {
  await database.run(CreateTable);
  await database.close();
};

createTable();

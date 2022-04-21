import { FieldsName } from '../enums';

const FieldsForSeed = [
  FieldsName.Id,
  FieldsName.Category,
  FieldsName.Name,
  FieldsName.Content,
  FieldsName.Status,
  FieldsName.Created,
].join(', ');

export { FieldsForSeed };

import { FieldsName } from '../enums';

const FieldsForCreate = [
  FieldsName.Id,
  FieldsName.Category,
  FieldsName.Name,
  FieldsName.Content
].join(', ')

export { FieldsForCreate };

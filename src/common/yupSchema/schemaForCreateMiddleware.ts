import * as yup from 'yup';
import { Category } from '../enums';
import { FieldsForCreateMiddleware } from '../const';

const schemaForCreateMiddleware = yup.object().shape({
  category: yup.string().oneOf(Object.values(Category)).required(),
  name: yup.string().min(1).required(),
  content: yup.string().min(1).required(),
  fieldsName: yup.array().of(yup.string().oneOf(FieldsForCreateMiddleware)),
});

export { schemaForCreateMiddleware };

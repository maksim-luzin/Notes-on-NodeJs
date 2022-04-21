import * as yup from 'yup';
import { Category, Status } from '../enums';
import { FieldsForUpdateMiddleware } from '../const';

const schemaForUpdateMiddleware = yup.object().shape({
  category: yup.string().oneOf(Object.values(Category)),
  name: yup.string().min(1),
  content: yup.string().min(1),
  status: yup.string().oneOf(Object.values(Status)),
  fieldsName: yup.array().of(yup.string().oneOf(FieldsForUpdateMiddleware)),
});

export { schemaForUpdateMiddleware };

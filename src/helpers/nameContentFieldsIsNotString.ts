import { Request } from 'express';
import { INameContentFieldsValidation } from '../common/interfaces';

const nameContentFieldsIsNotString = (req: Request) => {
  if (!req.body) return true;

  const body = req.body as INameContentFieldsValidation;
  if (body.name && typeof body.name !== 'string') return true;
  if (body.content && typeof body.content !== 'string') return true;
  return false;
};

export { nameContentFieldsIsNotString };

import { NextFunction, Request, Response } from 'express';
import { INoteUpdate } from '../common/interfaces';
import { BadRequestError } from '../errors';
import { schemaForNoteUpdateDataValidation } from '../common/yupSchema';
import { nameContentFieldsIsNotString } from '../helpers';

const noteUpdateDataValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (nameContentFieldsIsNotString(req)) next(new BadRequestError(''));

  const body = req.body as INoteUpdate;

  const fieldsName = Object.keys(body);

  await schemaForNoteUpdateDataValidation
    .validate({ ...body, fieldsName })
    .catch(() => next(new BadRequestError()));

  next();
};

export { noteUpdateDataValidationMiddleware };

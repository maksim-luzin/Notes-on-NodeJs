import { NextFunction, Request, Response } from 'express';
import { INoteCreate } from '../common/interfaces';
import { BadRequestError } from '../errors';
import { schemaForNoteCreationDataValidation } from '../common/yupSchema';
import { nameContentFieldsIsNotString } from '../helpers';

const noteCreationDataValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (nameContentFieldsIsNotString(req)) next(new BadRequestError());

  const body = req.body as INoteCreate;
  const fieldsName = Object.keys(body);

  await schemaForNoteCreationDataValidation
    .validate({ ...body, fieldsName })
    .catch(() => next(new BadRequestError()));

  next();
};

export { noteCreationDataValidationMiddleware };

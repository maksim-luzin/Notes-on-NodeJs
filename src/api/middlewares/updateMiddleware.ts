import { NextFunction, Request, Response } from 'express';
import { INoteUpdate } from '../../common/interfaces';
import { BadRequestError } from '../../errors';
import { schemaForUpdateMiddleware } from '../../common/yupSchema';
import { nameOrContentIsNotString } from '../../helpers';

const updateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (nameOrContentIsNotString(req)) next(new BadRequestError(''));

  const body = req.body as INoteUpdate;

  const fieldsName = Object.keys(body);

  await schemaForUpdateMiddleware
    .validate({ ...body, fieldsName })
    .catch(() => next(new BadRequestError()));

  next();
};

export { updateMiddleware };

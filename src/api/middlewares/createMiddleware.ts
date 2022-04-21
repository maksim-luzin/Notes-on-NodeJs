import { NextFunction, Request, Response } from 'express';
import { INoteCreate } from '../../common/interfaces';
import { BadRequestError } from '../../errors';
import { schemaForCreateMiddleware } from '../../common/yupSchema';
import { nameOrContentIsNotString } from '../../helpers';

const createMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (nameOrContentIsNotString(req)) next(new BadRequestError());

  const body = req.body as INoteCreate;
  const fieldsName = Object.keys(body);

  await schemaForCreateMiddleware
    .validate({ ...body, fieldsName })
    .catch(() => next(new BadRequestError()));

  next();
};

export { createMiddleware };

import { NextFunction, Request, Response } from 'express';
import { HttpStatus } from '../../common/const/HttpStatus';
import { IError } from '../../common/interfaces';

const errorHandlerMiddleware = (
  err: IError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    next(err);
  } else {
    const {
      status = HttpStatus.InternalServerError.status,
      message = HttpStatus.InternalServerError.message,
    } = err;
    res.status(status).send({ status, message });
  }
};

export { errorHandlerMiddleware };

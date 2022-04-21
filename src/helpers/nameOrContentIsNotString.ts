import { Request } from 'express';
import { INameOrContent } from '../common/interfaces';

const nameOrContentIsNotString = (req: Request) => {
  if (!req.body) return true;

  const body = req.body as INameOrContent;
  if (body.name && typeof body.name !== 'string') return true;
  if (body.content && typeof body.content !== 'string') return true;
  return false;
};

export { nameOrContentIsNotString };

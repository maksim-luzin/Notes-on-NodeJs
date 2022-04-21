import { Router, Request, Response, NextFunction } from 'express';
import { createMiddleware, updateMiddleware } from '../middlewares';
import { noteServices } from '../services';
import { Routes } from '../../common/enums';
import { NotFoundError, InternalServerError } from '../../errors';
import { INoteCreate } from '../../common/interfaces';

const notes: Router = Router();

notes
  .get(Routes.Stats, (req: Request, res: Response, next: NextFunction) =>
    noteServices
      .getStatsOfNotes()
      .then((statistics) => res.send(statistics))
      .catch(() => next(new NotFoundError("Notes haven't found")))
  )
  .get(Routes.All, (req: Request, res: Response, next: NextFunction) =>
    noteServices
      .getAll()
      .then((allNotes) => res.send(allNotes))
      .catch(() => next(new NotFoundError("Notes haven't found")))
  )
  .get(Routes.Id, (req: Request, res: Response, next: NextFunction) =>
    noteServices
      .getById(req.params.id as string)
      .then((noteData) => res.send(noteData))
      .catch(() => next(new NotFoundError("Note hasn't found")))
  )
  .post(
    Routes.All,
    createMiddleware,
    ({ body }: Request, res: Response, next: NextFunction) =>
      noteServices
        .create(body as INoteCreate)
        .then((newNote) => res.send(newNote))
        .catch(() => next(new InternalServerError("Note hasn't created")))
  )
  .put(
    Routes.Id,
    updateMiddleware,
    (req: Request, res: Response, next: NextFunction) =>
      noteServices
        .update(req)
        .then((updateNote) => res.send(updateNote))
        .catch(() => next(new InternalServerError("Note hasn't updated")))
  )
  .delete(Routes.Id, (req: Request, res: Response, next: NextFunction) =>
    noteServices
      .delete(req.params.id)
      .then((success) => res.send(success))
      .catch(() => next(new InternalServerError("Note hasn't deleted")))
  );

export { notes };

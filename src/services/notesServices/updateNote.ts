import { Request } from 'express';
import { notesRepository } from '../../data/repositories';

const updateNote = async ({ body, params: { id } }: Request) => {
  await notesRepository.getById(id);
  return notesRepository.updateById(id, body);
};

export { updateNote };

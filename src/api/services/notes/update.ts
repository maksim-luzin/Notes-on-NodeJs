import { Request } from 'express';
import { notesRepository } from '../../../data/repositories';

const update = async ({ body, params: { id } }: Request) => {
  await notesRepository.getById(id);
  return notesRepository.updateById(id, body);
};

export { update };

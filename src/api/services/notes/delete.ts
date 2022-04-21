import { notesRepository } from '../../../data/repositories';

const deleted = async (id: string) => {
  await notesRepository.getById(id);
  return notesRepository.deleteById(id);
};

export { deleted };

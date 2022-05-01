import { notesRepository } from '../../data/repositories';

const deleteNote = async (id: string) => {
  await notesRepository.getById(id);
  return notesRepository.deleteById(id);
};

export { deleteNote };

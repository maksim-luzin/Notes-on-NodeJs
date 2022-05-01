import { notesRepository } from '../../data/repositories';

const getNoteById = (id: string) => notesRepository.getById(id);

export { getNoteById };

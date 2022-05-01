import { notesRepository } from '../../data/repositories';

const getAllNotes = () => notesRepository.getAll();

export { getAllNotes };

import { notesRepository } from '../../../data/repositories';

const getAll = () => notesRepository.getAll();

export { getAll };

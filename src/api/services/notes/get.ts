import { notesRepository } from '../../../data/repositories';

const getById = (id: string) => notesRepository.getById(id);

export { getById };

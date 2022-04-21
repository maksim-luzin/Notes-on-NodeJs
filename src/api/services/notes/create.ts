import { notesRepository } from '../../../data/repositories';
import { INoteCreate } from '../../../common/interfaces';

const create = (newNote: INoteCreate) => notesRepository.create(newNote)

export { create };

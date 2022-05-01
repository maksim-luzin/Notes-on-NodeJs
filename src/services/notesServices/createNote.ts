import { notesRepository } from '../../data/repositories';
import { INoteCreate } from '../../common/interfaces';

const createNote = (newNote: INoteCreate) => notesRepository.create(newNote);

export { createNote };

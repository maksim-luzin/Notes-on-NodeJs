import { createNote } from './createNote';
import { getNoteById } from './getNoteById';
import { getAllNotes } from './getAllNotes';
import { updateNote } from './updateNote';
import { deleteNote } from './deleteNote';
import { getStatsOfNotes } from './getStatsOfNotes';

const noteServices = {
  getStatsOfNotes,
  create: createNote,
  getById: getNoteById,
  getAll: getAllNotes,
  update: updateNote,
  delete: deleteNote,
};

export { noteServices };

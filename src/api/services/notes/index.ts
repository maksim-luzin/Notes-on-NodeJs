import { create } from './create';
import { getById } from './get';
import { getAll } from './getAll';
import { update } from './update';
import { deleted } from './delete';
import { getStatsOfNotes } from './getStatsOfNotes';

const noteServices = {
  create,
  getById,
  getAll,
  update,
  getStatsOfNotes,
  delete: deleted,
};

export { noteServices };

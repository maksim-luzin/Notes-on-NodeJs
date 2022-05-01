import { notesRepository } from '../../data/repositories';
import { Status } from '../../common/enums/status';
import { IStats } from '../../common/interfaces';

const getStatsOfNotes = async () => {
  const notes = await notesRepository.getAll();

  const statistic = notes.reduce((stats: IStats, { category, status }) => {
    const otherStatus =
      status === Status.Active ? Status.Archived : Status.Active;

    if (!stats) {
      return {
        [category]: {
          [status]: 1,
          [otherStatus]: 0,
        },
      };
    }

    if (!stats[category]) {
      return { ...stats, [category]: { [status]: 1, [otherStatus]: 0 } };
    }

    const newValue = stats[category][status] + 1;
    return { ...stats, [category]: { ...stats[category], [status]: newValue } };
  }, {});

  return statistic;
};

export { getStatsOfNotes };

import { Category, Status } from '../../enums';

interface INoteUpdate {
  category?: Category;
  name?: string;
  content?: string;
  status?: Status;
}

export type { INoteUpdate };

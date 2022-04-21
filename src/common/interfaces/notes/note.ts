import { Category, Status } from '../../enums';

interface INote {
  id: string;
  category: Category;
  name: string;
  content: string;
  status: Status;
  created: Date;
}

export type { INote };

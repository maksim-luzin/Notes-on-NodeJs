import { Category} from '../../enums';

interface INoteCreate {
  category: Category;
  name: string;
  content: string;
}

export type { INoteCreate };

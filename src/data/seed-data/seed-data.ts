/* eslint-disable max-len */
import { Status, Category } from '../../common/enums';

const seedData = [
  {
    id: '1d32d4-517-4d6e-7f0f-2848537d416',
    category: Category.Task,
    name: 'Shopping list',
    content: 'I need buy tomatoes, bread, chili, potatoes at 5/12/2022',
    created: '2022-03-19 09:21:50',
    status: Status.Active,
  },
  {
    id: '8387-545f-4e20-04b-3cf328724c2',
    category: Category.RandomThought,
    name: 'The theory of evolution',
    content:
      'During the earliest evolution on earth, life probably resembled one big genetic jumble. At some time, presumably around 3.8 to 3.5 billion years before today, the very first biological species appeared – the ancestor of all life forms that developed via Darwinian evolution. Researchers at the Max Planck Institute for Dynamics and Self-Organization in Göttingen and at Cornell University in the USA have now conceived and modelled a possible scenario by which the first defined species could have emerged from this genetic mix. The researchers proposed that before the dawn of Darwinian evolution, life fluctuated back and forth between a genetically highly mixed and a partially unmixed state. Over time, the less mixed state exhibiting a more clearly defined genetic profile became increasingly stable and eventually generated the very first species.',
    created: '2022-02-28 22:11:50',
    status: Status.Archived,
  },
  {
    id: '2aef7b2-3ce0-2641-cd47-c5812bc035',
    category: Category.Idea,
    name: 'Google new feature',
    content:
      'Last year Google introduced a new feature that uses Augmented Reality (AR) for their users to view certain animals in 3D which means that this feature is not only restricted to your phone but you can also view an animal right in your surroundings. Isn’t it exciting? Let us learn how we can entertain ourselves with this.',
    created: '2022-02-16 19:49:50',
    status: Status.Active,
  },
  {
    id: '273fdf-a8f7-b72d-5cf-f8e0f88aed',
    category: Category.Quote,
    name: 'William Grades',
    content:
      'How some of the writers I come across get through their books without dying of boredom is beyond me.',
    created: '2022-02-09 20:16:50',
    status: Status.Archived,
  },
  {
    id: 'c5f22bb-5dc7-aa-3fee-a6626dcb25b',
    category: Category.Task,
    name: 'Books',
    content:
      'On the navigation bar, click Tasks.Click a task to view it in the Reading Pane, or double- click it to open it in a new window.Another way to see tasks, including flagged to -do items, is the Tasks peek.Point to Tasks on the Navigation Bar.The Tasks peek pops up.',
    created: '2022-01-22 10:21:50',
    status: Status.Active,
  },
  {
    id: '3e00c3-bdf1-044-7f35-3e3b8feb25',
    category: Category.Task,
    name: 'Dentist',
    content:
      'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021” the dates column is “3/5/2021, 5/5/2021',
    created: '2022-01-11 15:46:50',
    status: Status.Active,
  },
  {
    id: 'e33ea5-2cee-440c-b5b-74d65ab03a10',
    category: Category.RandomThought,
    name: 'Art',
    content:
      'Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas. There is no generally agreed definition of what constitutes art, and its interpretation has varied greatly throughout history and across cultures. The three classical branches of visual art are painting, sculpture, and architecture. Theatre, dance, and other performing arts, as well as literature, music, film and other media such as interactive media, are included in a broader definition of the arts. Until the 17th century, art referred to any skill or mastery and was not differentiated from crafts or sciences. In modern usage after the 17th century, where aesthetic considerations are paramount, the fine arts are separated and distinguished from acquired skills in general, such as the decorative or applied arts. The nature of art and related concepts, such as creativity and interpretation, are explored in a branch of philosophy known as aesthetics. The resulting artworks are studied in the professional fields of art criticism and the history of art.',
    created: '2022-01-03 10:45:50',
    status: Status.Active,
  },
];

export { seedData };

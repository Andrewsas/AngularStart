import { Menu } from '../model/menu';

export const MENUS: Menu[] = [
  {
    icon: 'home',
    title: 'Home',
    abrevia: 'HO',
    expanse: false,
    router: '/home',
    children: [
      {
        title: 'Item 1',
        expanse: false,
        router: 'item1'
      },
      {
        title: 'Item 2',
        expanse: false,
        router: 'item2'
      },
      {
        title: 'Item 3',
        expanse: false,
        router: 'item3'
      }
    ]
  },
  {
    icon: 'settings_applications',
    title: 'Medico',
    router: '/doctor'
  }
];

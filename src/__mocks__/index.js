import Store from '../context';
import { useContextManager } from '../hooks';

import { useEffectPrestation } from '../hooks/effects';

jest.mock(Store, () => ({
  ressources: {
    categories: [
      {
        reference: 'man',
        title: 'Homme',
        prestations: [
          {
            reference: 'man_shampoo',
            title: 'Shampoing',
            duration: 10,
            price: 500,
          },
        ],
      },
    ],
    reference: 'haircut',
    title: 'Coiffure',
  },
  basket: null,
  appointment: null,
}));

jest.mock(useEffectPrestation, () => ({
  ressources: {
    categories: [
      {
        reference: 'man',
        title: 'Homme',
        prestations: [
          {
            reference: 'man_shampoo',
            title: 'Shampoing',
            duration: 10,
            price: 500,
          },
        ],
      },
    ],
    reference: 'haircut',
    title: 'Coiffure',
  },
  basket: null,
  appointment: null,
}));

jest.mock(useContextManager, () => ({
  state: Store,
  call: jest.fn(),
}));

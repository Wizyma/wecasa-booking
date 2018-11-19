import { render, cleanup } from 'react-testing-library';
import React from 'react';

import Home from '../';
import Store from '../../../context';

afterEach(cleanup);

describe('Homepage', () => {
  it('should render Homepage with mocked data', () => {
    const mockedData = {
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
    };

    const tree = (
      <Store.Provider value={[mockedData]}>
        <Home />
      </Store.Provider>
    );
    const { baseElement } = render(tree);

    expect(baseElement).toMatchSnapshot();
  });

  it('should return null when no Data', () => {
    const tree = (
      <Store.Provider value={[{}]}>
        <Home />
      </Store.Provider>
    );
    const { baseElement } = render(tree);

    expect(baseElement).toMatchSnapshot();
  });
});

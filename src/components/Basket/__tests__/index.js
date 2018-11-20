import { render, cleanup } from 'react-testing-library';
import React from 'react';

import Basket from '../';
import Store from '../../../context';

afterEach(cleanup);

describe('Basket', () => {
  it('should render Basket with mocked data', () => {
    const mockedData = {
      bakest: [
        {
          title: 'Shampoing',
          duration: 10,
          price: 500,
        },
        {
          title: 'Shampoing',
          duration: 10,
          price: 500,
        },
      ],
    };

    const tree = (
      <Store.Provider value={[mockedData]}>
        <Basket />
      </Store.Provider>
    );
    const { baseElement } = render(tree);

    expect(baseElement).toMatchSnapshot();
  });

  it('should return 0 when basket is empty', () => {
    const tree = (
      <Store.Provider value={[{}]}>
        <Basket />
      </Store.Provider>
    );
    const { baseElement } = render(tree);

    expect(baseElement).toMatchSnapshot();
  });
});

import React from 'react';
import { cleanup, render } from 'react-testing-library';

import App from '../';

afterEach(cleanup);

const { baseElement } = render(<App />);

it('App should match snapshot', () => {
  expect(baseElement).toMatchSnapshot();
});

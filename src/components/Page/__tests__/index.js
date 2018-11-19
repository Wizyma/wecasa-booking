import React from 'react';
import { cleanup, render } from 'react-testing-library';

import WecasePage from '../';

afterEach(cleanup);

const { baseElement } = render(
  <WecasePage>
    <h1>Hello World</h1>
  </WecasePage>,
);

it('Page should match snapshot', () => {
  expect(baseElement).toMatchSnapshot();
});

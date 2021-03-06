import React from 'react';
import { cleanup, render } from 'react-testing-library';

import WecasePage from '../';

afterEach(cleanup);

describe('Page component', () => {
  it('Page should match snapshot', () => {
    const { baseElement } = render(
      <WecasePage>
        <h1>Hello World</h1>
      </WecasePage>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should return an empty div when no children', () => {
    const { baseElement } = render(<WecasePage />);

    expect(baseElement).toMatchSnapshot();
  });
});

import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Title from '../';

afterEach(cleanup);

describe('Title component', () => {
  it('Title should match snapshot', () => {
    const { baseElement } = render(
      <Title>
        <p>Hello World</p>
      </Title>,
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('should return an empty div when no children', () => {
    const { baseElement } = render(<Title />);

    expect(baseElement).toMatchSnapshot();
  });
});

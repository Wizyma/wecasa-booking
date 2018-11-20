import * as styles from '../styles';

describe('test styles', () => {
  it('should match snapshot', () => {
    expect(styles).toMatchSnapshot();
  });
});

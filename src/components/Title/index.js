import { arrayOf, node, oneOfType, string } from 'prop-types';
import React from 'react';

import { StyledTitle } from './styles';

const Title = ({ children, variant }) => {
  const STitle = StyledTitle(variant);
  return <STitle>{children}</STitle>;
};

Title.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
  variant: string,
};

Title.defaultProps = {
  children: null,
  variant: 'h1',
};

export default Title;

import { arrayOf, node, oneOfType } from 'prop-types';
import React from 'react';

import { Layout } from './styles';

const WecasaPage = ({ children }) => children && <Layout>{children}</Layout>;

WecasaPage.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};

WecasaPage.defaultProps = {
  children: null,
};

export default WecasaPage;

import React from 'react';
import Helmet from 'react-helmet';

import Site from './layout/Site';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Router from './layout/Router';

const Layout = () => (
  <Site>
    <Helmet
      title="Cool GIFs"
    />
    <Header />
    <Content>
      <Router />
    </Content>
    <Footer />
  </Site>
)
export default Layout;

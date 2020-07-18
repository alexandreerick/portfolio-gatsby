import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyles from '../../styles/global';
import Header from '../../components/Header';


function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Helmet>
          <meta charSet="utf-8" />
          <title>Erick Alexandre - Web Developer</title>
      </Helmet>
      <Header />
      {children}
    </>
  );
}

export default Layout;
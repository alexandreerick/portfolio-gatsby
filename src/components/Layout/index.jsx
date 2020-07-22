import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyles from '../../styles/global';
import Header from '../../components/Header';


function Layout({ title, children }) {
  return (
    <>
      <GlobalStyles />
      <Helmet>
          <meta charSet="utf-8" />
          <title>{title ? `Erick Alexandre | ${title}` : `Erick Alexandre`}</title>
      </Helmet>
      <Header />
      {children}
    </>
  );
}

export default Layout;
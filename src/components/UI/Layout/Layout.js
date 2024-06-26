import React from 'react';

import Navigation from '../Navigation/Navigation';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;

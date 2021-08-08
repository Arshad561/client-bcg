import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './components/UI/Layout/Layout';
import Home from './components/Home/Home';
import Edit from './components/Edit/Edit';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path='/' exact><Home/></Route>
          <Route path='/edit/:id'><Edit/></Route>
          <Route path='/stats' exact><Stats /></Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;

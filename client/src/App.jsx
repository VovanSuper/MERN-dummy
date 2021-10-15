import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Nav from './components/Nav';
import Main from './pages/Main';
import Data from './pages/Data';
import Footer from './components/Footer';
import './styles/main';

export const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route path='/' render={() => <Redirect exact from='/' to='/main' />} exact />
      <Route path='/main' component={Main} />
      <Route path='/data' component={Data} />
    </Switch>
    <Footer />
  </Router>
);

export default render(<App />, document.getElementById('app'));

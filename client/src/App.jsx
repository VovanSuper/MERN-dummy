import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './assets/styles/main.scss';
import { footer } from './assets/styles/footer.scss';

import Main from './components/Main.jsx';
import Nav from './components/Nav.jsx';
import Data from './components/Data.jsx';

export const App = () => (
  <div className='container'>
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <Redirect exact from='/' to='/main' />} />
        <Route path='/main' component={Main} />
        <Route path='/data' component={Data} />
      </Switch>
    </Router>
    <footer className={footer}>All rights reserved (c)</footer>
  </div>
);

export default render(<App />, document.getElementById('app'));

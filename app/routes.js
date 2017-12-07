import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main'
import DetailView from './components/DetailView'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/spells/:spellName" component={DetailView} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
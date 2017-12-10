import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main"
import DetailView from "./components/DetailView"

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/spells/:spellName" component={DetailView}/>
    </Switch>
  </Router>
)

export default Routes;
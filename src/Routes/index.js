import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Auth from '../containers/Auth/Auth';
import Counter from '../containers/Counter/Counter';

function index() {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default index;

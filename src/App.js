import React from 'react';

import { Router, Switch, Route } from "react-router-dom";

import { Provider, Button } from '@fluentui/react-northstar';

import textToTheme from './helpers/textToTheme';

// components
import Web from './components/web';
import Teams from './components/teams';
import Config from './components/config';

// helpers
import history from './helpers/history';

const App = () => {

  return (
    <Provider theme={textToTheme('dark')}>
      <Router history={history}>
        <Switch>
          <Route exact path="/">main static page</Route>
          <Route exact path="/app" component={Web} />

          <Route exact path="/teams/config" component={Config} />
          <Route exact path="/teams/activate" component={Teams} />
          <Route exact path="/teams/members" component={Teams} />
          <Route exact path="/teams/financials" component={Teams} />
          <Route exact path="/teams/attendance" component={Teams} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

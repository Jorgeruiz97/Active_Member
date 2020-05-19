import React from 'react';

import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div >
            main landing
          </div>
        </Route>
        <Route exact path="/members">
          <div>
            member list table
          </div>
        </Route>
        <Route exact path="/activate">
          activate home page
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

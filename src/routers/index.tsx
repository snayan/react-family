import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import * as containers from "../container";

const Routers = (
  <Router>
    <Switch>
      <Route path="/login" component={containers.Login} />
      <Redirect to="login" exact={true} />
    </Switch>
  </Router>
);

export default Routers;

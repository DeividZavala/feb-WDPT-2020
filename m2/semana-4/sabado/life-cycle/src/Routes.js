import React from "react";
import { Switch, Route } from "react-router-dom";
import Detail from "./components/Detail";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>Home</h1>} />
    <Route exact path="/detail/:id" component={Detail} />
  </Switch>
);

export default Routes;

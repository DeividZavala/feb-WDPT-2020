import React from "react";
import { Switch, Route } from "react-router-dom";
import Detail from "./components/detail";
import Home from "./Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/:id" component={Detail}></Route>
  </Switch>
);

export default Routes;

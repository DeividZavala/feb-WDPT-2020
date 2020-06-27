import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "~components/Home";
import Auth from "~components/Auth";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/login">
      <Auth />
    </Route>
    <Route exact path="/signup">
      <h1>signup</h1>
    </Route>
    <Route exact path="/checkout">
      <h1>checkout</h1>
    </Route>
    <Route exact path="/create-product">
      <h1>create</h1>
    </Route>
  </Switch>
);

export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "~components/Home";
import Auth from "~components/Auth";
import CreateProduct from "~components/NewProduct";
import Checkout from "~components/Checkout";

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
      <Checkout />
    </Route>
    <Route exact path="/create-product">
      <CreateProduct />
    </Route>
  </Switch>
);

export default Routes;

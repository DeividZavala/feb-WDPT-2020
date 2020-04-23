import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/new" component={() => <h1>nuevo producto</h1>} />
    <Route exact path="/:id" component={() => <h1>detalle</h1>} />
  </Switch>
);

export default Routes;

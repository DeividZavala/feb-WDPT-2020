import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>Home</h1>} />
    <Route exact path="/new" component={() => <h1>nuevo producto</h1>} />
    <Route exact path="/:id" component={() => <h1>detalle</h1>} />
  </Switch>
);

export default Routes;

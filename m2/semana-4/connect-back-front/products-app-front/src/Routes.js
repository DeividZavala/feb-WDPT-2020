import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductForm from "./components/ProductForm";
import AuthForm from "./components/AuthForm";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/new" component={ProductForm} />
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
    <Route exact path="/:id" component={() => <h1>detalle</h1>} />
  </Switch>
);

export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>Home</h1>} />
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
  </Switch>
);

export default Routes;

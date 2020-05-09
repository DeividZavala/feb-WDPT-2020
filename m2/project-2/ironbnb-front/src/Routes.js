import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm";
import Home from "./Components/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
    <Route exact path="/property/new" component={() => <h1>New</h1>} />
    <Route exact path="/property/:id" component={() => <h1>detailt</h1>} />
  </Switch>
);

export default Routes;

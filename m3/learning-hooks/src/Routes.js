import React from "react";
import { Switch, Route } from "react-router-dom";
import TodoContainer from "~components/TodoContainer";
import CharacterContainer from "~components/CharacterContainer";

// ../../../../components/Otro_compo
// ~components/otro_compo

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TodoContainer} />
    <Route exact path="/rickandmorty" component={CharacterContainer} />
    <Route exact path="/rickandmorty/:id" component={CharacterContainer} />
  </Switch>
);

export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm";
import Home from "./Components/Home";
import PropertyForm from "./Components/PropertyForm";
import UserProfile from "./Components/UserProfile";
import ReservationForm from "./Components/ReservationForm";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={AuthForm} />
    <Route exact path="/signup" component={AuthForm} />
    <Route exact path="/profile" component={UserProfile} />
    <Route exact path="/property/new" component={PropertyForm} />
    <Route exact path="/property/:id" component={PropertyForm} />
    <Route exact path="/reservate/:property_id" component={ReservationForm} />
    <Route exact path="/reservate/:id/edit" component={ReservationForm} />
  </Switch>
);

export default Routes;

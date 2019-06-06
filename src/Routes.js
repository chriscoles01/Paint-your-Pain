/*
file used for routing
*/
import React from "react";
import { Route, Switch } from "react-router-dom";
import pyp from "./Components/Paintyourpain"
export default () =>
  <Switch>
    <Route path="/" exact component={pyp} />
  </Switch>;
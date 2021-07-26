import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Home, Details, Favorites } from "./pages";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details" component={Details} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

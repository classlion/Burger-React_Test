import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./ldng";
import App from "./app";
import NotFound from "./NotFound";

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/restauraunt/:restaurantId' component={App} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  };

export default Router;
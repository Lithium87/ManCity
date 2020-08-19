import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/authRoutes/privateRoutes";

import Layout from "./Hoc/Layout";
import Home from "./components/home";
import SignIn from "./components/signin";

import Dashboard from "./components/admin/Dashboard";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;

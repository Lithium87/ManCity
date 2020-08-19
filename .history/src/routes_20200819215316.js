import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/authRoutes/privateRoutes";
import PublicRoute from "./components/authRoutes/publicRoutes";

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
        <PublicRoute
          {...props}
          restricted={true}
          exact
          path="/sign-in"
          component={SignIn}
        />
        <PublicRoute
          {...props}
          restricted={false}
          exact
          path="/"
          component={Home}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;

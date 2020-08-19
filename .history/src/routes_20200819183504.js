import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Hoc/Layout";
import Home from "./components/home";
import SignIn from "./components/signin";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;

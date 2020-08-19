import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ user, component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (user ? null : <Comp {...props} user={user} />)}
    />
  );
};

export default PublicRoute;

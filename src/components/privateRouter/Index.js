import React from "react";
import { Route, Redirect } from "react-router";
import { getToken } from "./../../utils/cookies";

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        // <Component {...routeProps} />
        getToken() ? <Component {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRouter;

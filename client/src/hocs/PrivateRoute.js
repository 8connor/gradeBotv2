import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Authentication";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const context = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!context)
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );

        if (!roles.includes(context.accessType))
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
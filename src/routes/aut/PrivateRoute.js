import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ element: Component, path, auth, ...rest }) {
    return (
    auth ? <Route {...rest} path={path} element={<Component />} />
         : <Navigate to="/login" replace />
  );
}

export default PrivateRoute;

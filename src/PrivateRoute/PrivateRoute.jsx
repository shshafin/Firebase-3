import { Navigate } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { Spinner } from "@material-tailwind/react";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loader } = UseAuth();

  if (loader) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

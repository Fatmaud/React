import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const name = "Ipek";
  const password = "1234";

  return name === "Ipek" && password === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" />
  );
};

export default PrivateRouter;

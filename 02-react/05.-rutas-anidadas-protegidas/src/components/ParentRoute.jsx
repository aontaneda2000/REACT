import React from "react";
import { Outlet } from "react-router-dom";

const ParentRoute = () => {
  return (
    <div>
      <Outlet />
      <h2>Soy la ruta header del componente padre</h2>
      <h2>Soy la ruta footer del componente padre</h2>
    </div>
  );
};

export default ParentRoute;

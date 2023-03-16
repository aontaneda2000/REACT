import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h2>Not found</h2>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default Error404;

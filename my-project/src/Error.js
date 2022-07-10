import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div>404 ERROR</div>
      <div>
        <Link to="/">Return home</Link>
      </div>
    </div>
  );
};

export default Error;

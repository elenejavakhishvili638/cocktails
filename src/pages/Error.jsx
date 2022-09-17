import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <div className="error-container">
      <h2>oops! it's a dead end</h2>
      <Link to="/">
        <button className="error-btn">back home</button>
      </Link>
    </div>
  );
}

export default Error;

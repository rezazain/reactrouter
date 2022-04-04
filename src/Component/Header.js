import React from "react";
import { Link } from "react-router-dom";

import "././style/Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <div className="Navbar">
          <h1 className="Title-Nav">
            <Link to="/">React Router Dom v6</Link>
          </h1>

          <ul>
            <li>
              <Link to="/Login">Login </Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

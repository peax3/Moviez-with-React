import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { title } = props;
  return (
    <nav className="primary-nav p-1">
      <h1 className="logo">{title}</h1>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "REACT MOVIEZ",
};

export default Navbar;

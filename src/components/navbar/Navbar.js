import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { title } = props;
  return (
    <nav className="container primary-nav p-1">
      <h1 className="logo">{title}</h1>
      <MoviesNav />
    </nav>
  );
}

const MoviesNav = () => (
  <ul>
    <li className="nav-dropdown">
      <Link to="/movies">Movies</Link>
      <ul>
        <li>
          <Link to="/movies/popular">Popular</Link>
        </li>
        <li>
          <Link to="/movies/now-playing">Now Playing</Link>
        </li>
        <li>
          <Link to="/movies/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="upcoming">Upcoming</Link>
        </li>
      </ul>
    </li>
  </ul>
);

Navbar.defaultProps = {
  title: "REACT MOVIEZ",
};

export default Navbar;

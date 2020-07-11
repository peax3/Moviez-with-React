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
    <li>
      Movies
      <ul className="nav-dropdown">
        <li>
          <Link to="/movies/popular">Popular</Link>
        </li>
        <li>
          <Link to="/movies/now_playing">Now Playing</Link>
        </li>
        <li>
          <Link to="/movies/top_rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/movies/upcoming">Upcoming</Link>
        </li>
      </ul>
    </li>
  </ul>
);

Navbar.defaultProps = {
  title: "REACT MOVIEZ",
};

export default Navbar;

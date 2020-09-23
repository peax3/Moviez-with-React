import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./hamburger/Hamburger";

function Navbar(props) {
  return (
    <nav className="container primary-nav p-1">
      <Hamburger clicked={props.hamburgerToggle} />
      <Logo />
      <MoviesNav />
      <TvNav />
    </nav>
  );
}

const Logo = (props) => {
  return <h1 className="logo">{props.title}</h1>;
};

Logo.defaultProps = {
  title: "REACT MOVIEZ",
};

const TvNav = (props) => (
  <ul>
    <li className="no-link">
      <span role="button" tabIndex="0">
        Tv Shows
      </span>
      <ul className="nav-dropdown">
        <li onClick={props.closeSideNav}>
          <Link to="/tv/popular/1">Popular</Link>
        </li>
        <li onClick={props.closeSideNav}>
          <Link to="/tv/airing_today/1">Airing Today</Link>
        </li>
        <li onClick={props.closeSideNav}>
          <Link to="/tv/top_rated/1">Top Rated</Link>
        </li>
        <li onClick={props.closeSideNav}>
          <Link to="/tv/on_the_air/1">On Tv</Link>
        </li>
      </ul>
    </li>
  </ul>
);

const MoviesNav = (props) => (
  <ul>
    <li className="no-link">
      <span role="button" tabIndex="0">
        Movies
      </span>
      <ul className="nav-dropdown">
        <li onClick={props.closeSideNav}>
          <Link to="/movies/popular/1">Popular</Link>
        </li>
        <li onClick={props.closeSideNav}>
          <Link to="/movies/now_playing/1">Now Playing</Link>
        </li>
        <li onClick={props.closeSideNav}>
          <Link to="/movies/top_rated/1">Top Rated</Link>
        </li>
        <li onClick={props.closeSideNav}>
          <Link to="/movies/upcoming/1">Upcoming</Link>
        </li>
      </ul>
    </li>
  </ul>
);

export { MoviesNav, TvNav, Logo };
export default Navbar;

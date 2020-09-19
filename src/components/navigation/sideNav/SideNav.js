import React, { Fragment } from "react";
import Backdrop from "../backdrop/Backdrop";
import { Logo, MoviesNav, TvNav } from "../Navbar";

const SideNav = () => {
  return (
    <Fragment>
      <Backdrop />
      <nav className="side-nav">
        <Logo />
        <MoviesNav />
        <TvNav />
      </nav>
    </Fragment>
  );
};

export default SideNav;

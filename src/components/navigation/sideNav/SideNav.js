import React, { Fragment } from "react";
import Backdrop from "../backdrop/Backdrop";
import { Logo, MoviesNav, TvNav } from "../Navbar";

const SideNav = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.hide} />
      <nav className={`side-nav  ${props.show ? "show" : "hide"}`}>
        <Logo />
        <MoviesNav closeSideNav={props.hide} />
        <TvNav closeSideNav={props.hide} />
      </nav>
    </Fragment>
  );
};

export default SideNav;

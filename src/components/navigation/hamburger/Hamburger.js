import React from "react";

const Hamburger = (props) => {
  return (
    <div className="hamburger ">
      <button
        type="button"
        className="btn btn-transparent"
        onClick={() => props.clicked()}
      >
        <i className=" fas fa-bars fa-2x"></i>
      </button>
    </div>
  );
};

export default Hamburger;

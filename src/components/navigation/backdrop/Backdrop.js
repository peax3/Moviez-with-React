import React from "react";

const Backdrop = (props) => {
  if (!props.show) return null;
  return <div className="backdrop" onClick={props.clicked}></div>;
};

export default Backdrop;

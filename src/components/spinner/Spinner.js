import React, { Fragment } from "react";

import spinnerImg from "../../assets/images/spinner.gif";

function Spinner() {
  return (
    <Fragment>
      <img
        src={spinnerImg}
        alt="loading gif"
        style={{
          display: "block",
          width: "250px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />
    </Fragment>
  );
}

export default Spinner;

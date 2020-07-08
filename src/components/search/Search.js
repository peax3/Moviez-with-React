import React, { useState } from "react";

const INITIAL_STATE = {
  text: "",
};

function Search() {
  const [state, setState] = useState(INITIAL_STATE);

  const { text } = state;

  const isInvalid = text.trim() === "";

  const onChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input type="text" name="text" value={text} onChange={onChange} />
      <button disabled={isInvalid} className="btn btn-search">
        Search
      </button>
    </form>
  );
}

export default Search;

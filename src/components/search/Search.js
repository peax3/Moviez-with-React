import React, { useState } from "react";

import { useHistory } from "react-router-dom";

const INITIAL_STATE = {
  text: "",
};

function Search(props) {
  const [state, setState] = useState(INITIAL_STATE);
  const history = useHistory();
  const { text } = state;

  const isInvalid = text.trim() === "";

  const onChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/movie?query=${text}`);
  };

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        name="text"
        value={text}
        onChange={onChange}
        placeholder="search for..."
      />
      <button disabled={isInvalid} className="btn btn-search">
        Search
      </button>
    </form>
  );
}

export default Search;

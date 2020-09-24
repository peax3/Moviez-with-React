import React, { useState } from "react";

import { useHistory } from "react-router-dom";

const INITIAL_STATE = {
  text: "",
};

function SearchForm(props) {
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

  const clearSearchText = (event) => {
    event.preventDefault();
    setState({ ...state, text: "" });
  };

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        name="text"
        className={`${text ? "active" : ""}`}
        value={text}
        onChange={onChange}
        placeholder="search for movie, tv show..."
      />
      <button disabled={isInvalid} className="btn btn-search">
        Search
      </button>
      <button
        onClick={clearSearchText}
        className={`btn btn-transparent btn-close ${text ? "active" : ""}`}
      >
        <i className="fas fa-times "></i>
      </button>
    </form>
  );
}

export default SearchForm;

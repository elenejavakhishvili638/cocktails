import React, { useEffect, useRef, useState } from "react";
import "./SearchForm.css";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setValue } = useGlobalContext();
  //const searchForm = useRef("");
  const [searchForm, setSearchForm] = useState("");

  //controlled input
  function handleChange(event) {
    setSearchForm(event.target.value);
  }

  useEffect(() => {
    setValue(searchForm);
  }, [searchForm]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  //uncontrolled input

  // const searchCocktail = () => {
  //   setValue(searchForm.current.value);
  // };

  return (
    <div className="searchform-container">
      <form className="search" onSubmit={handleSubmit}>
        <div className="form-details">
          <label>search your favourite cocktail</label>
          <input
            type="text"
            value={searchForm}
            // ref={searchForm}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;

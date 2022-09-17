import React from "react";
import "./SearchForm.css";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchValue } = useGlobalContext();

  return <div>SearchForm</div>;
}

export default SearchForm;

import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <SearchForm />
      <CocktailList />
    </div>
  );
}

export default Home;

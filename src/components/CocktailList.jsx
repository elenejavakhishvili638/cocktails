import React from "react";
import "./Cocktails.css";
import Loading from "./Loading";
import Cocktails from "./Cocktails";
import { useGlobalContext } from "../context";
import "./CocktailList.css";

function CocktailList() {
  const { cocktail, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktail.length < 1) {
    return (
      <h2 className="no-match-text">
        no cocktails matched your search criteria
      </h2>
    );
  }
  console.log(cocktail);
  return (
    <div className="cocktail-list">
      <h1 className="title">Cocktails</h1>
      <div className="cocktails-container">
        {cocktail.map((item) => {
          const { id, name, image, glass, info } = item;
          return (
            <Cocktails
              key={id}
              id={id}
              name={name}
              image={image}
              glass={glass}
              info={info}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CocktailList;

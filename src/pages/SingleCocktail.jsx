import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "./SingleCocktail.css";

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
          } = data.drinks[0];
          const ingredients = [strIngredient1, strIngredient2, strIngredient3];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        }
        setLoading(false);
      });
  }, [id]);

  console.log(cocktail);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>no cocktail</h2>;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  // const ingredient = ingredients.map((item) => {
  //   return item;
  // });
  return (
    <div className="each-cocktail-container">
      <Link to="/">
        <button className="back-home">back home</button>
      </Link>
      <h2>{name}</h2>
      <div className="each-cocktail-info">
        <img className="each-cocktail-image" alt="pic" src={image} />
        <div className="each-drink-info">
          <p>
            <span>name:</span> {name}
          </p>
          <p>
            <span>category:</span> {category}
          </p>
          <p>
            <span>info:</span> {info}
          </p>
          <p>
            <span>glass:</span> {glass}
          </p>
          <p>
            <span>instructions:</span> {instructions}
          </p>
          <p>
            <span>ingredients:</span>{" "}
            {ingredients.map((item) => {
              return (
                <span
                  style={{
                    color: "#222",
                    letterSpacing: "0.05rem",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleCocktail;

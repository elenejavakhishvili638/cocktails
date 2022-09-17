import React, { useState, useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchValue, setValue] = useState("a");
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${url}${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((drink) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              drink;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktail(newCocktails);
        } else {
          setCocktail([]);
        }
        setLoading(false);
      });
  }, [searchValue]);
  return (
    <AppContext.Provider
      value={{
        loading,
        searchValue,
        cocktail,
        setValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider };

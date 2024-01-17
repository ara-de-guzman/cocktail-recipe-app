import axios from "axios";
import { useEffect, useState } from "react";
import RecipeContainer from "../components/RecipeContainer";

function NonAlcholicPage() {
  const [recipe, setRecipe] = useState([]);
  const URL_API =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
  useEffect(() => {
    axios
      .get(URL_API)
      .then((result) => {
        setRecipe(result.data.drinks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <RecipeContainer recipeItems={recipe} />
    </div>
  );
}

export default NonAlcholicPage;

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import RecipeContainer from "../components/RecipeContainer";
import { UserContext } from "../components/UserInput";
import feat from '../../public/feat.png'





function HomePage() {
  const userInput = useContext(UserContext)
  const [recipeContainer, setRecipeContainer] = useState([]);



  const URL_API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`;
  useEffect(() => {
    axios
      .get(URL_API)
      .then((result) => {
        setRecipeContainer(result.data.drinks);
      })
      .catch((err) => console.log(err));
  }, [URL_API, userInput]);

  return (
    <div>
       <div className="flex items-center justify-center py-10">
        <img src={feat} alt="featured" className=" w-44 " />
       </div>
     <RecipeContainer recipeItems={recipeContainer} />
    </div>
  );
}

export default HomePage;

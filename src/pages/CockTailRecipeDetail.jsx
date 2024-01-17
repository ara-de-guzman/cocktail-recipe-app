import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeDetails from "../components/RecipeDetails";


function CockTailRecipeDetail() {
  const [recipeDetail, setRecipeDetail] = useState({});
  const { id } = useParams();

  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

  useEffect(() => {
    axios.get(API_URL).then(result => {
        setRecipeDetail(result.data.drinks[0])
    }).catch(error => console.log(error))
  },[API_URL, id])
  

  return (
    <div>
     <RecipeDetails items={recipeDetail}></RecipeDetails>
    </div>
  );
}

export default CockTailRecipeDetail;

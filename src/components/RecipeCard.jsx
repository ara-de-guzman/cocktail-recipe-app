import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RecipeCard({ items }) {
  return (
    <Link to={`/recipe/${items.idDrink}`} >
      <div className="h-full flex flex-row  bg-slate-200 hover:scale-105 transition-all hover:bg-sky-300">
        <div className="h-full w-2/6 ">
          <img src={items.strDrinkThumb} alt="drink" className="max-w-full h-full" />
        </div>
        <div className="p-5">
          {items.strDrink && <h1 className="font-bold text-base my-4">{items.strDrink}</h1>}
          {items.strCategory && <p>Category: {items.strCategory}</p>}
          {items.strAlcoholic && <p>Alcohol: {items.strAlcoholic}</p>}
          {items.strGlass && <p>Glass : {items.strGlass}</p>}
        </div>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  items: PropTypes.object,
  onClick: PropTypes.func,
};

export default RecipeCard;

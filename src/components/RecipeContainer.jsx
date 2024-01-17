import RecipeCard from "./RecipeCard";
import PropTypes from "prop-types";


function RecipeContainer({ recipeItems, onClick }) {
  return (
    <>
      <div className="w-full cell:gap-2 grid desktop:grid-cols-3 gap-5 px-3 cell:grid-cols-1 my-10" id="recipe-container">
        {recipeItems === null ? (
          <div>No recipe found</div>
        ) : recipeItems.length === 0 ? (
          <div className="text-center w-full">
            <h1 className="text-center">Loading</h1>
          </div>
        ) : (
          recipeItems.map((recipe, idx) => (
            <RecipeCard key={idx} items={recipe} onClick={onClick} />
          ))
        )}
      </div>
    </>
  );
}

RecipeContainer.propTypes = {
  recipeItems: PropTypes.array,
  onClick: PropTypes.func,
};

export default RecipeContainer;

import PropTypes from 'prop-types'


function RecipeDetails({items}) {
  return (
    <div className='w-full flex tablet:flex-row mt-10 gap-4 cell:flex-col '>
      <div>
        <img src={items.strDrinkThumb} alt="" />
      </div>
        <div className='desktop:w-1/2 cell:w-full '>
            <h1 className='text-xl text-center font-bold bg-sky-200 p-2 '>{items.strDrink}</h1>
            <h2 className='text-md my-9'>Ingredients</h2>
            <ul className='text-sm'>
              <li>{items.strMeasure1} {items.strIngredient1}</li>
              <li>{items.strMeasure2} {items.strIngredient2}</li>
              <li>{items.strMeasure3} {items.strIngredient3}</li>
              <li>{items.strMeasure4} {items.strIngredient4}</li>
              <li>{items.strMeasure5} {items.strIngredient5}</li>
              <li>{items.strMeasure6} {items.strIngredient6}</li>
              <li>{items.strMeasure7} {items.strIngredient7}</li>
              <li>{items.strMeasure8} {items.strIngredient8}</li>
              <li>{items.strMeasure9} {items.strIngredient9}</li>
              <li>{items.strMeasure10} {items.strIngredient10}</li>
              <li>{items.strMeasure11} {items.strIngredient11}</li>
              <li>{items.strMeasure12} {items.strIngredient12}</li>
              <li>{items.strMeasure13} {items.strIngredient13}</li>
              <li>{items.strMeasure14} {items.strIngredient14}</li>
              <li>{items.strMeasure15} {items.strIngredient15}</li>
            </ul>
            <h2 className='text-md my-9'>Instructions</h2>
            <p className='text-sm'>{items.strInstructions}</p>
        </div>
    </div>
  )
}

RecipeDetails.propTypes = {
    items: PropTypes.object,
}
export default RecipeDetails

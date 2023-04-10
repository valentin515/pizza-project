import popupStore from "../store/popup"
import PopupIngredientItem from "./PopupIngredientItem"

const PopupIngredients = ({addIngredient}) => {

  return (
        <>
            <span className="title-ingredient">Добавить в пиццу</span>
            <div className="ingredients-content">
                {popupStore.ingredients.map(ingredient => 
                    <PopupIngredientItem 
                        key={ingredient.id} 
                        addIngredient={addIngredient} 
                        info={ingredient} 
                    />
                )}
            </div>
        </>  
  );
}

export default PopupIngredients;




















                     
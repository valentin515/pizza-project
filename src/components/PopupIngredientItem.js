
const PopupIngredientItem = ({info, addIngredient}) => {
  
  const {name, value, price, img} = info;

  return (
    <>
        <input type="checkbox" 
          onChange={e => addIngredient(info, e.target.checked)} 
          className="ingredient-item" 
          id={`${value}-ingredient`} 
          name="ingredients" 
        />
        <label htmlFor={`${value}-ingredient`} className="ingredient-card tr-2">
                <div className="ingredient-img" style={{backgroundImage: `url(${img})`}}></div>
                <span className="ingredient-title fw-normal">{name}</span>
                <span>{price} ₽</span>
        </label>
    </>
  );
}

export default PopupIngredientItem;





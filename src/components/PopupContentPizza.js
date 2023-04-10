import {useEffect, useState} from "react"
import PopupIngredients from "./PopupIngredients"
import cartStore from "../store/cart"
import {findVariation} from "../scripts/findVariation"
import PizzaVariation from "./PizzaVariation";

const PopupContentPizza = ({item, closePopup}) => {
    
    const [pizza, setPizza] = useState({});

    useEffect(() => {
            setPizza(item);
    }, [])


    function addPizza(){
        cartStore.addPizza(pizza);
        closePopup();
    }

    function changeVariation(value, type){
        
        const variation = findVariation(pizza, value, type);

        setPizza({...pizza, 
            diameter: variation.diameter, 
            price: pizza.additional_ingredients.total  + variation.price, 
            dough: variation.dough, 
        })
    }

    function addIngredient(ingredient, add){
        
        const {price, value} = ingredient;

        if(add){
            
            setPizza({
                ...pizza,
                price: pizza.price + price,
                additional_ingredients: {
                    total: pizza.additional_ingredients.total + price,
                    items: [...pizza.additional_ingredients.items, ingredient]
                }
            })
        } else {
           
            const updateIngredients = pizza.additional_ingredients.items.filter(ingredient => ingredient.value !== value)
            setPizza({
                ...pizza,
                price: pizza.price - price,
                additional_ingredients: {
                    total: pizza.additional_ingredients.total - price,
                    items: updateIngredients
                }             
            })
        }
    }

  return (
        
            <>
                <div className="popup-img">
                    {pizza.tag && <span className="card-label fw-normal">{pizza.tag.name}</span>}
                    <img src={pizza.img} alt={pizza.name}/>
                </div>
                <div className="popup-block">
                    <div className={`popup-info`}>
                        <h3 className="fs-3">{pizza.name}</h3>
                        <p className="t-gray">{pizza.description}</p>
                        
                        <PizzaVariation 
                            type="dough"
                            changeVariation={changeVariation}
                            popup={true}
                        />
                        <PizzaVariation 
                            type="size"
                            changeVariation={changeVariation}
                            popup={true}
                        />

                        <PopupIngredients addIngredient={addIngredient}/>
                    </div>
                    <div className="popup-button">
                        <button className="btn-main tr-2 btn-popup"  onClick={() => addPizza()}>Купить за {pizza.price} ₽</button>  
                    </div>
                </div>
                <div className="popup-button-adaptive">
                    <button className="btn-main btn-popup" onClick={() => addPizza()}>Купить за {pizza.price} ₽</button>  
                </div>
            </>
    
  );
}

export default PopupContentPizza;









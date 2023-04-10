import {useEffect, useState, useRef} from "react"
import { useNavigate } from "react-router-dom";
import cartStore from "../store/cart"
import {findVariation} from "../scripts/findVariation"
import PizzaVariation from "./PizzaVariation";


const PizzaCard = ({info}) => {    

    const navigate = useNavigate();

    const [pizza, setPizza] = useState({});

    useEffect(() => {
     
        setPizza({
            ...info,
            diameter: info.variations[1].diameter,
            dough: info.variations[1].dough,
            price: info.variations[1].price,
            additional_ingredients: {total: 0, items: []}
        })
            
    }, [])


    const refImg = useRef(null);


    function changeVariation(value, type){
        
        const variation = findVariation(pizza, value, type);
        
        setPizza({
            ...pizza,
            diameter: variation.diameter, 
            price: variation.price, 
            dough: variation.dough,
        })
    }


    function showImg(){
        refImg.current.classList.remove("hide");
    }

  return (
    
        <div className="card-product">
            {pizza.tag && <span className="card-label fw-normal">{pizza.tag.name}</span>}
            <img src={pizza.img} ref={refImg} onLoad={() => showImg()} className="card-img tr-2 hide" alt={pizza.name + "пицца"} onClick={() => navigate(`/${pizza.id}`)}/>
            <div className="card-info">
                <h3 className="fs-3 card-title">{pizza.name}</h3>
                <p className="t-gray card-description">{pizza.description}</p>
            </div>
            <div className="card-other">

                <PizzaVariation 
                    type="dough"
                    changeVariation={changeVariation}
                    id={pizza.id}
                />
                <PizzaVariation 
                    type="size"
                    changeVariation={changeVariation}
                    id={pizza.id}
                />
                
                <button className="btn-ingredients tr-2" onClick={() =>  navigate(`/${pizza.id}`)}>
                    <svg width="15" height="14" viewBox="0 0 15 14" className="tr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8667 6H8.86667V0H6.86667V6H0.866669V8H6.86667V14H8.86667V8H14.8667V6Z"/>
                    </svg>
                    Добавить ингредиенты
                </button>
                <div className="card-price">
                    <span className="fs-3">{pizza.price} ₽</span>
                    <button className="btn-main tr-2" onClick={() => cartStore.addPizza(pizza)}>В корзину</button>
                </div>
            </div>
            <div className="card-price-adaptive">
                <div className="card-price">
                    <span className="fs-3">от {pizza.price} ₽</span>
                    <button className="btn-main tr-2" onClick={() => navigate(`/${pizza.id}`)}>Выбрать</button>
                </div>
            </div>
        </div>     
  );
}

export default PizzaCard;






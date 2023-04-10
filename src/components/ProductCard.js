import { useNavigate } from "react-router-dom";
import cartStore from "../store/cart"

const PoductCard = ({info}) => {
     
    const navigate = useNavigate();

    const {name, size, price, img, id, description} = info;

  return (
    
        <div className="card-product">
            <img src={img} className="card-img tr-2" alt={name} onClick={() => navigate(`/${id}`)}/>
            <div className="card-info">
                <h3 className="fs-3 card-title">{name}</h3>
                <p className="t-gray card-description">{description ? description : size }</p>
            </div>
            <div className="card-other">
                <div className="card-price">
                    <span className="fs-3">{price} ₽</span>
                    <button className="btn-main tr-2" onClick={() => cartStore.addProduct(info)}>В корзину</button>
                </div>
            </div>
            <div className="card-price-adaptive">
                <div className="card-price">
                    <span className="fs-3">от {price} ₽</span>
                    <button className="btn-main tr-2" onClick={() => cartStore.addProduct(info)}>В корзину</button>
                </div>
            </div>
        </div>     
  );
}

export default PoductCard;






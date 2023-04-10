import { useNavigate } from "react-router-dom";
import {observer} from "mobx-react-lite"
import {wordEnd} from '../scripts/cart';
import cartStore from "../store/cart"
import OrderCartItem from "./OrderCartItem"

const OrderCart = observer(() => {    

    const navigate = useNavigate();

    function removeAllItems(){
        cartStore.removeAllItems();
        navigate("/");
    }

  return (

            <>
                <h2 className="fw-bold fs-2">Корзина</h2>
                <div className="cart-items-info">
                    <span>{`${cartStore.cart.count} ${wordEnd(cartStore.cart.count)} на ${cartStore.cart.amount} ₽`}</span>
                    <button className="btn-clear t-gray tr-2" onClick={() => removeAllItems()}>очистить</button>
                </div>
                <div className="order-items">

                    {cartStore.cart.items.map(item => 
                        <OrderCartItem 
                            info={item}
                            key={item.itemId}
                        />
                            
                    )}

                    {cartStore.cart.promocode.gift &&
                        <OrderCartItem 
                            info={{
                                img: cartStore.cart.promocode.gift.img,
                                name: cartStore.cart.promocode.gift.name,
                                diameter: cartStore.cart.promocode.diameter,
                                dough: cartStore.cart.promocode.dough
                            }}
                            gift={true}
                        /> 
                    }           
                </div>     
            </>  
  );
})

export default OrderCart;






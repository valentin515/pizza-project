import {useNavigate} from "react-router-dom"
import {observer} from "mobx-react-lite"
import cartStore from "../store/cart"
import CartItem from "./CartItem"
import Promocode from "./Promocode"
import {wordEnd} from '../scripts/cart';

const Cart = observer(() => {

    const navigate = useNavigate();

      function goToOrder(){
        cartStore.closeAside();
        navigate("/order");
      }

      

  return (

        <>
            <div className="cart-info">
                <button className="btn-back btn-back-cart" onClick={() => cartStore.closeAside()}></button>
                    <h4 className="fw-bold fs-2">Корзина</h4>
                    <div className="cart-items-info">
                    {cartStore.cart.amount !== 0
                        ?
                            <>
                            <span>{`${cartStore.cart.count} ${wordEnd(cartStore.cart.count)} на ${cartStore.cart.amount} ₽`}</span>
                            <button onClick={() => cartStore.removeAllItems()} className="btn-clear t-gray tr-2">очистить</button>
                            </>
                        : <span>Корзина пуста. Выберите товары из меню.</span>
                    }     
                    </div>
                      <div className="cart-items">
                        <div className="items-content">

                            {cartStore.cart.items.map(item => 
                                <CartItem 
                                    info={item}
                                    key={item.itemId}
                                />
                            
                            )}
                                
                            {cartStore.cart.promocode.gift &&
                                <CartItem 
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

                        <Promocode/>

                    </div>   
            </div>
            {cartStore.cart.amount !== 0 &&
                   <div className="cart-footer">
                        <div className="amount-order fw-bold">
                            Сумма заказа: 
                            <span className="fw-bold">{cartStore.cart.amount} ₽</span>
                        </div>
                        <button onClick={() => goToOrder()} className="btn-main btn-cart tr-2">Перейти к оформлению заказа</button>
                    </div>
            }    
        </>
  );
})

export default Cart;





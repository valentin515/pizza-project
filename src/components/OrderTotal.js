import {observer} from "mobx-react-lite"
import cartStore from "../store/cart"


const OrderTotal = observer(() => {    

   

  return (
            <div className="order-price">
                <div className="amount-order fw-bold">
                    Сумма заказа: 
                    <span className="fw-bold">{cartStore.cart.amount} ₽</span>
                </div>
                <div className="delivery-order fw-bold">
                    Доставка: 
                    <span className="fw-bold">0 ₽</span>
                </div>
                <div className="total-order fw-bold">
                    Итого: 
                    <span className="fw-bold">{cartStore.cart.amount} ₽</span>
                </div>
            </div>
  );
})

export default OrderTotal;

import {observer} from "mobx-react-lite"
import {useState} from "react"
import cartStore from "../store/cart";

const Promocode = observer(({orderPromocode}) => {

  const [promocode, setPromocode] = useState("");  

  const {amount:promocodeAmount, gift, isActive, name} = cartStore.cart.promocode;  

  const {amount:cartAmount} = cartStore.cart;
  
  function check(e){
    e.preventDefault();
    cartStore.checkPromocode(promocode);
    setPromocode("");
  }

  return (

            <>
              {cartAmount >= promocodeAmount && !gift &&
                <button className={`btn-gift ${orderPromocode ? "order" : ""} tr-2`} onClick={() => orderPromocode ? cartStore.openGiftOrder() : cartStore.openGift()}>Выбрать подарок</button>
               }
                <form className={`promo-code ${isActive ? "active" : ""}`} onSubmit={check}>
                    <input type="text" className="tr-2" disabled={isActive} value={isActive ? name : promocode} onChange={e => setPromocode(e.target.value.toLocaleUpperCase())} placeholder="Введите промокод"/>
                    {isActive && <button className="tr-2 fw-normal" type="button" onClick={() => cartStore.removePromocode()}>Удалить</button>}
                    {!isActive && <button className="tr-2 fw-normal">Применить</button>}    
                </form>
                {isActive &&
                    <div className="promo-code-steps">
                        <span className={`step step-check ${cartAmount  >= promocodeAmount ? "active" : ""}`}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0C4.7103 0 0 4.7103 0 10.5C0 16.2897 4.7103 21 10.5 21C16.2897 21 21 16.2897 21 10.5C21 4.7103 16.2897 0 10.5 0ZM8.40105 15.1336L4.5024 11.2434L5.985 9.7566L8.39895 12.1663L13.9576 6.60765L15.4424 8.09235L8.40105 15.1336Z"/>
                            </svg>
                            Совершите заказ от {promocodeAmount} ₽    
                        </span>
                        <span  className={`step step-gift ${gift ? "active" : ""}`} >
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.5" cy="10.5" r="10.5"/>
                                <path d="M6.65 10.5H6.1V14.9C6.1 15.1917 6.21589 15.4715 6.42218 15.6778C6.62847 15.8841 6.90826 16 7.2 16H9.95V10.5H6.65ZM13.8 10.5H11.05V16H13.8C14.0917 16 14.3715 15.8841 14.5778 15.6778C14.7841 15.4715 14.9 15.1917 14.9 14.9V10.5H13.8ZM14.2351 7.75C14.3157 7.48258 14.3545 7.20428 14.35 6.925C14.35 5.8635 13.4865 5 12.425 5C11.5329 5 10.9373 5.8151 10.5528 6.69675C10.1739 5.8635 9.54795 5 8.575 5C7.5135 5 6.65 5.8635 6.65 6.925C6.65 7.2528 6.69345 7.52395 6.76495 7.75H5V9.95H9.95V8.85H11.05V9.95H16V7.75H14.2351ZM7.75 6.925C7.75 6.47015 8.12015 6.1 8.575 6.1C9.0634 6.1 9.5177 6.93875 9.7839 7.75H8.3C8.0943 7.75 7.75 7.75 7.75 6.925ZM12.425 6.1C12.8799 6.1 13.25 6.47015 13.25 6.925C13.25 7.75 12.9057 7.75 12.7 7.75H11.3376C11.6182 6.8832 12.0257 6.1 12.425 6.1Z" fill="white"/>
                                </svg>
                            Выберите пиццу в подарок 
                        </span>
                    </div>
                }
                
            </>              
  );
})

export default Promocode;









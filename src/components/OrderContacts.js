import {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import {observer} from "mobx-react-lite"
import cartStore from "../store/cart"
import thanksStore from "../store/thanks"
import Delivery from "./Delivery"
import ContactInput from "./ContactInput"
import ContactRadio from "./ContactRadio"
import Pickup from "./Pickup"


const OrderContacts = observer(() => {    

    const [receiptType, setReceiptType] = useState("delivery");

    const navigate = useNavigate();  

    function openThanks(){
        
        navigate("/");
        thanksStore.openThanks();
    }
    

  return (
    <div className="order-contacts">
        <h2 className="fw-bold fs-2">Ваши контакты</h2>
        <div className="contacts-items-content">

            <ContactInput
                name="name"
                title="Имя" 
                placeholder="Введите имя"
            />

            <ContactInput
                name="phone-number"
                title="Номер телефона" 
                placeholder="Введите номер телефона"
                type="tel"
            />


            <ContactRadio 
                title="Как вы собираетесь получить заказ"
                variations={[
                    {text: "Доставка", value: "delivery"},
                    {text: "Самовывоз", value: "pickup"},
                ]}
                name="receipt-type"
                checked="delivery"
                change={setReceiptType}
            />  

            {receiptType == "delivery" ? <Delivery/> : <Pickup/>}
                
        </div>
        <p className="t-gray consent">Нажимая "Оформить заказ", Вы даёте <Link to="#">Согласие </Link>
                на обработку Ваших персональных данных
                и принимаете <Link to="#">Пользовательское соглашение</Link>
        </p>
        <div className="order-contacts-total">
            <button className="btn-main tr-2" onClick={() => openThanks()}>Оформить заказ</button>
            <span className="fw-bold">{cartStore.cart.amount} ₽</span>  
        </div>
    </div> 
  );
})

export default OrderContacts;

import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {observer} from "mobx-react-lite"
import OrderSlider from "../components/OrderSlder"
import OrderCart from "../components/OrderCart"
import Promocode from "../components/Promocode"
import OrderContacts from "../components/OrderContacts"
import OrderTotal from "../components/OrderTotal"
import Breadcrumbs from "../components/Breadcrumbs"
import cartStore from "../store/cart"
import {useTitle} from "../hooks/useTitle"

const Order = observer(({title}) => {

  const navigate = useNavigate();  

  const [documentTitle, setDocumentTitle] = useTitle(title);    


    useEffect(() => {
        const cartItems = localStorage.getItem("cart") || [];
        if(cartItems.length == 0) navigate("/")

    }, [])


    return (
        <>
        <main className="order-main">
            <div className="order-wrapper">
                <div className="order-wrapper-header">
                    <div className="container">
                        <Breadcrumbs links={[{name: "Оформление заказа", href: ""}]}/>     
                        <h1 className="fw-bold fs-1">Оформление заказа</h1>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="order-cart">
                            <OrderCart/>
                            <div className="order-cart-info">
                                <div className="order-promo-code">
                                    <Promocode orderPromocode={true}/>
                                </div>
                                <hr/>
                                <OrderTotal/>
                            </div>
                        </div>
                    </div>
                </section>
                <OrderSlider/>
                <section>
                    <div className="container">
                        <OrderContacts/>
                    </div>
                </section>
            </div>
        </main>
        </>
    );
})

export default Order;





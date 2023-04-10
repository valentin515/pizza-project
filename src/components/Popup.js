import {observer} from "mobx-react-lite"
import {useEffect, useState} from "react"
import { useNavigate, useParams} from "react-router-dom"
import popupStore from "../store/popup"
import itemsStore from "../store/items"
import PopupContentPizza from "./PopupContentPizza"
import PopupContentProduct from "./PopupContentProduct"
import {scrollDisable, scrollEnable} from '../scripts/scroll';

const Popup = observer(({setDocumentTitle, homePageTitle}) => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [item, setItem] = useState({});

    const [category, setCategory] = useState("")

    function closePopup(){
      setCategory("")
      navigate("/");
      setDocumentTitle(homePageTitle);
      popupStore.closePopup();
      scrollEnable();
    }

  
    useEffect(() => {
      
      if(id){

        const product = itemsStore.getItem(id);

        if(product){
            if(product.category == "pizza"){
              setItem({
                ...product,
                diameter: product.variations[1].diameter,
                dough: product.variations[1].dough,
                price: product.variations[1].price,
                additional_ingredients: {total: 0, items: []}
              }) 
              setCategory("pizza")
            } else {
                setItem({...product});
                setCategory("product")
            }
            setDocumentTitle(`${product.name} заказать с доставкой на дом в Новосибирске`)
            popupStore.openPopup();
            scrollDisable();
        } else {
            navigate("/");
        }
      } 

    }, [id])
  
  return (

    <div className={`popup tr-1 ${popupStore.popupActive ? "active" : ""}`} onClick={() => closePopup()}>
            <div className="popup-body">
                <div className="popup-content" onClick={e => e.stopPropagation()}>
                    <div className="popup-back">
                        <button className="btn-back btn-back-popup" onClick={() => closePopup()}></button>
                    </div>
                    <button className="btn-popup-close" onClick={() => closePopup()}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="tr-2">
                            <path d="M15.261 0L8.71967 6.53975L2.17992 0L0 2.17992L6.53975 8.71967L0 15.2594L2.17992 17.4393L8.71967 10.8996L15.261 17.4393L17.4409 15.2594L10.9011 8.71967L17.4409 2.17992L15.261 0Z"/>
                            </svg>
                    </button>
                    {category == "pizza" && <PopupContentPizza item={item} closePopup={closePopup} />}
                    {category == "product" && <PopupContentProduct item={item} closePopup={closePopup}/>}  
                </div>
            </div>
        </div>

  );
})

export default Popup;









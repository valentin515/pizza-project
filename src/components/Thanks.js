import {observer} from "mobx-react-lite"
import {useEffect} from "react"
import thanksStore from "../store/thanks"
import {scrollDisable, scrollEnable} from '../scripts/scroll';

const Thanks = observer(() => {


    useEffect(() => {
 
         if(thanksStore.thanksActive){
            scrollDisable();
         }
         
    }, [])

    function closeThanks(){
      thanksStore.closeThanks();  
      scrollEnable();
    }

  
  return (

    <div className={`thanks tr-1 ${thanksStore.thanksActive ? "active" : ""}`} onClick={() => closeThanks()}>
            <div className="thanks-body">
                <div className="thanks-content" onClick={e => e.stopPropagation()}>
                    <div className="thanks-back">
                        <button className="btn-back" onClick={() => closeThanks()}></button>
                    </div>
                    <button className="btn-thanks-close" onClick={() => closeThanks()}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="tr-2">
                            <path d="M15.261 0L8.71967 6.53975L2.17992 0L0 2.17992L6.53975 8.71967L0 15.2594L2.17992 17.4393L8.71967 10.8996L15.261 17.4393L17.4409 15.2594L10.9011 8.71967L17.4409 2.17992L15.261 0Z"/>
                            </svg>
                    </button>
                    <h2 className="fs-3"><svg width="21" height="21" viewBox="0 0 21 21" fill="#44944A" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0C4.7103 0 0 4.7103 0 10.5C0 16.2897 4.7103 21 10.5 21C16.2897 21 21 16.2897 21 10.5C21 4.7103 16.2897 0 10.5 0ZM8.40105 15.1336L4.5024 11.2434L5.985 9.7566L8.39895 12.1663L13.9576 6.60765L15.4424 8.09235L8.40105 15.1336Z"/>
                            </svg> Спасибо за заказ!</h2>
                    
                    <p className="t-gray">Ваш заказ успешно оформлен. Мы свяжемся с Вами в ближайшее время. Номер вашего заказа <b>#12345</b>.</p>
                </div>
            </div>
        </div>

  );
})

export default Thanks;









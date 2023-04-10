import {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"
import {observer} from "mobx-react-lite"
import cartStore from "../store/cart"
import Cart from "./Cart"
import Gift from "./Gift"
import {scrollDisable, scrollEnable} from '../scripts/scroll';

const Aside = observer(() => {
    
    const {pathname} = useLocation();
    
  


   useEffect(() => {
    if(cartStore.asideActive){
      scrollDisable()
    } else {
      scrollEnable()
    }
   }, [cartStore.asideActive])


  return (
       <div className={`aside-wrapper tr-1 ${cartStore.asideActive ? "active" : ""}`} onClick={() => cartStore.closeAside()}>
        <aside className="aside" onClick={e => e.stopPropagation()}>
          {pathname !== "/order" && 
            <div className={`cart-content ${cartStore.asideActive ? "active" : ""}`} >
              {cartStore.asideActive && <Cart/>}
          </div>}
          <div className={`gifts-content tr-1 ${cartStore.giftActive ? "active" : ""}`}>
            {cartStore.giftActive  && <Gift/>}
          </div>
        </aside>
       </div>
       

  
  );
})

export default Aside;






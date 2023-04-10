import {observer} from "mobx-react-lite"
import cartStore from "../store/cart"
import {useLocation} from "react-router-dom"
import GiftItem from "./GiftItem"

const Gift = observer(() => {

    const {pathname} = useLocation();

 
    function addGift(gift){
      cartStore.addGift(gift);
      pathname == "/order" ? cartStore.closeGiftOrder() : cartStore.closeGift()

    }

  return (
          <>
            <button className="btn-back btn-back-gift" onClick={() => pathname == "/order" ? cartStore.closeGiftOrder() : cartStore.closeGift()}></button>
            <h4 className="fw-bold fs-2">Выберите подарок</h4>
            <div className="gift-items">
              {cartStore.cart.promocode.items.map(gift => 
                    <GiftItem 
                      key={gift.id}
                      info={{
                        id: gift.id,
                        name: gift.name,
                        img: gift.img,
                        diameter: cartStore.cart.promocode.diameter,
                        dough: cartStore.cart.promocode.dough 
                      }}
                      addGift={addGift}
                    />  
                )}
            </div>
          </>        
        
  );
})

export default Gift;





import {observer} from "mobx-react-lite"
import {useLocation} from "react-router-dom";
import cartStore from "../store/cart";
import menuStore from "../store/menu"
import burgerStore from "../store/burger"

const Icons = observer(() => {

  const {pathname} = useLocation(); 


  return (

        <div className="header-icons">
            {pathname == "/" && 
                <button className="btn-icon btn-icon-menu" onClick={() => menuStore.openMenu()}></button> 
            }
            
            {pathname !== "/order" &&
                    <button className={`btn-icon btn-icon-cart ${cartStore.cart.count > 0 ? "active" : ""}`} onClick={() => cartStore.openAside()}></button>  
            }
                                            
            <button className="btn-icon btn-icon-burger" onClick={() => burgerStore.openBurgerMenu()}></button>    
        </div>    
  );
})

export default Icons;





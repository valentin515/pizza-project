import {observer} from "mobx-react-lite"
import { Link, useLocation} from "react-router-dom";
import {routes} from "../routes/routes"
import cartStore from "../store/cart";
import burgerStore from "../store/burger"

const Bar = observer(() => {

  const {pathname} = useLocation(); 

  return (


            <div className={`header-other tr-1 ${burgerStore.burgerMenuActive ? "active" : ""}`}>
                <button className="btn-back btn-back-other" onClick={() => burgerStore.closeBurgerMenu()}></button>
                <nav>
                    <ul className="header-other-ul">
                    {routes.map(route => 
                        
                            route.menu && <li key={route.path}> <Link to={route.path} onClick={() => burgerStore.closeBurgerMenu()} className="fw-normal tr-2">{route.name}</Link> </li>
                    )}
                    </ul>
                </nav>
                <button className="fw-normal btn-language">Ru</button>
                {pathname !== "/order" &&
                    <button className="btn-main btn-cart tr-2" onClick={() => cartStore.openAside()}>Корзина</button>
                }       
                <hr/>
                <ul className="header-other-contacts">
                    <li>
                        <a href="tel:+" className="tr-2">+7 (888) 888-88-88</a>
                        <span>Звонок бесплатный</span>
                    </li>
                    <li className="">г. Новоибирск, проезд Горнистов 45/1
                        <span className="">Пн-Вс 10:00 - 20:00</span>
                    </li>
                </ul>  
                <hr/>  
            </div>

          
  );
})

export default Bar;





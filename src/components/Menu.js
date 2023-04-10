import {observer} from "mobx-react-lite"
import menuStore from "../store/menu"

const Menu = observer(() => {


  function scrollToSection(id){
    const section = document.getElementById(id);
    window.scrollTo({ behavior: 'smooth', top: section.offsetTop - 40});
    menuStore.closeMenu();
  }

  return (


        <div className={`header-menu tr-1 ${menuStore.menuActive ? "active" : ""}`}>
            <button className="btn-back btn-back-menu" onClick={() => menuStore.closeMenu()}></button>
            <h4 className="fs-1">Меню</h4>
            <div className="header-menu-items">
              <button onClick={() => scrollToSection(1)} className="menu-item">Пицца</button>
              {menuStore.sections.map(section => 
                      <button key={section.id} onClick={() => scrollToSection(section.id)} className="menu-item">{section.title}</button>     
              )} 
            </div>  
        </div>

          
  );
})

export default Menu;





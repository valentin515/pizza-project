import { useEffect, useState, useMemo } from "react";
import PizzaFilters from "./PizzaFilters"
import PizzaCard from "./PizzaCard"
import itemsStore from "../store/items"

const PizzaSection = () => {
    
    const [items, setItems] = useState([]);

    const [filterId, setFilterId] = useState("1");

    useEffect(() => {

      const pizzas = itemsStore.items.filter(item => item.category_id == 1);
      setItems(pizzas);

  }, [])

    const getFilteredItems = () => filterId == "1" ? items : items.filter(pizza => pizza.filters_id.includes(filterId))
     
    const filteredItems = useMemo(() => getFilteredItems(), [filterId, items]);

  return (
    
    <section id="1" className="menu-content">
      <div className="container">
        <h2 className="fs-1 fw-bold">Пицца</h2>

        <PizzaFilters  setFilterId={id => setFilterId(id)}/>

          {filteredItems.length !== 0
              ? <div className="cards-content">
                  {filteredItems.map(pizza => <PizzaCard info={pizza} key={pizza.id}/>)}
               </div>
              : <h3 className="fs-3">Товары отсутствуют</h3>
          }      
      </div>  
    </section>
      
  );
}

export default PizzaSection;






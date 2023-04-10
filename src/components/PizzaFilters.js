import {useState} from "react"
import itemsStore from "../store/items"
import PizzaFilterItem from "./PizzaFilterItem";

const PizzaFilters = ({setFilterId}) => {

    const [filtersMenuActive, setFiltersMenuActive] = useState(false);
   
    const [filterActive, setfilterActive] = useState(false);


    function changeFilter(id){

      setFiltersMenuActive(false);

      if(id == 1){
        setfilterActive(false);
      } else {
        setfilterActive(true);
      }

      setFilterId(id)
    }

    return (
            <>
              <div className={`pizza-filter tr-1 ${filtersMenuActive ? "active" : ""}`}>
                    <button className="btn-back btn-back-filter" onClick={() => setFiltersMenuActive(false)}></button>
                    <h4 className="fs-1">Выберите фильтр</h4>
                    <div className="pizza-filter-items">
                      {itemsStore.filters.map(filter => 
                        <PizzaFilterItem 
                          key={filter.id}
                          changeFilter={changeFilter} 
                          id={filter.id} 
                          name={filter.name} 
                          checked="Все"
                        />
                      )}
                    </div>
                  </div>
                  <div className="filter-adaptive">
                    <button className={`filter-btn-adaptive fw-normal ${filterActive ? "active" : ""}`} onClick={() => setFiltersMenuActive(true)}>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.125 9.625H14.875V11.375H6.125V9.625ZM3.5 6.125H17.5V7.875H3.5V6.125ZM8.75 13.125H12.25V14.875H8.75V13.125Z"/>
                    </svg>    
                         Фильтры
                    </button>
                  </div>
            </>  
    );
  }
  
  export default PizzaFilters;
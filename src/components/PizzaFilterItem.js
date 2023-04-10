
const PizzaFilterItem = ({changeFilter, id, name, checked}) => {


    return (
            <>
                <input type="radio" 
                    className="filter-item" 
                    onChange={() => changeFilter(id)} 
                    id={`filter-${id}`} 
                    name="filter-pizza" 
                    defaultChecked={checked == name} 
                />
                <label htmlFor={`filter-${id}`} className="tr-2 fw-normal">{name}</label>           
            </>  
    );
  }
  
  export default PizzaFilterItem;
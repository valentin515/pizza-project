
const VariationCardItem = ({type, inputId, value, checked, changeVariation, id}) => {


  return (
            <>
              <input type="radio" 
                onChange={() => changeVariation(value, type)}
                className="radio-item"
                id={type == "diameter" ? `size${value}-${id}` : `${inputId}-${id}`}
                name={type == "diameter" ? `size-${id}` : `dough-${id}`}
                defaultChecked={checked == value && id}
              />
              <label htmlFor={type == "diameter" ? `size${value}-${id}` : `${inputId}-${id}`} className="t-gray tr-2">{value}</label>
            </>  
  );
}

export default VariationCardItem;




















                     
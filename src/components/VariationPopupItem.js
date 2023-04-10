
const VariationPopupItem = ({type, inputId, value, checked, changeVariation}) => {


  return (
            <>
              <input type="radio" 
                onChange={() => changeVariation(value, type)}
                className="radio-item"
                id={`popup-${inputId ? inputId : value}`}
                name={`popup-${type}`}
                defaultChecked={checked == value}
              />
              <label htmlFor={`popup-${inputId ? inputId : value}`} className="t-gray tr-2">{value}</label>
            </>   
  );
}

export default VariationPopupItem;




















                     
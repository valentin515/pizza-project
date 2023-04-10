
const ContactRadioVariation = ({name, change, checked, text, value}) => {    



    return (
              
            <>
                <input type="radio"  onChange={() => change(value)} className="radio-item"  id={value} name={name}  defaultChecked={checked == value} />
                <label htmlFor={value} className="t-gray tr-2">{text}</label>
            </>
                     
    );
  }
  
  export default ContactRadioVariation;
  
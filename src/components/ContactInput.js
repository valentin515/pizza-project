
const ContactInput = ({title, placeholder, type}) => {    


  return (
            <>
                <div className="contacts-item">
                    <label className="contacts-item-title">{title}</label>
                    <input type={type ? type : "text"} className="tr-2"  placeholder={placeholder ? placeholder : title}/>
                </div>
            </>
  );
}

export default ContactInput;

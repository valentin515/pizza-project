import ContactRadioVariation from "./ContactRadioVariation"

const ContactRadio = ({name, title, variations, change, checked}) => {    

  return (
            <div className="contacts-item">
                <span className="contacts-item-title">{title}</span>
                <div className="radio-block radio-main radio-contacts">
                    {variations.map(variation => 
                        <ContactRadioVariation 
                            name={name}
                            change={change}
                            checked={checked}
                            text={variation.text}
                            value={variation.value}
                            key={variation.value}
                        />
                    )}
                </div>
            </div>
  );
}

export default ContactRadio;

import ContactInput from "./ContactInput"
import ContactRadio from "./ContactRadio"


const Delivery = () => {    


    const addressInputs = [
        {name: "address", title: "Адрес"},
        {name: "flat", title: "Квартира"},
        {name: "floor", title: "Этаж"},
    ];

    function setOrderPayment(){

    }

  return (
            <>
                {addressInputs.map(input =>
                    <ContactInput key={input.name} name={input.name} title={input.title}/> 
                )}


                <ContactRadio 
                    title="Как будет оплачен зазказ"
                    variations={[
                        {text: "Наличными", value: "cash"},
                        {text: "Картой", value: "card"},
                    ]}
                    name="order-payment"
                    checked="cash"
                    change={setOrderPayment}
                />     
            </>
  );
}

export default Delivery;

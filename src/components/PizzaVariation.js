import VariationCardItem from "./VariationCardItem";
import VariationPopupItem from "./VariationPopupItem";

const PizzaVariation = ({changeVariation, id, popup, type}) => {


      const doughs = [
        {inputId: "thin", value: "Традиционное"},
        {inputId: "thick", value: "Тонкое"}
      ];

      const diameters = [
        {value: "25"},
        {value: "30"},
        {value: "35"},
        {value: "40"},
      ];


      const items = type == "size" ? diameters : doughs; 

    return (

                <div className={`pizza-${type}`}>
                    <div className={`radio-block ${type == "dough" ? "radio-main" : "radio-pizza"} ${popup ? `popup-${type}` : ""}`}>
                        {popup  
                        ? items.map(item => 
                            <VariationPopupItem
                                key={item.value}
                                type={type == "size" ? "diameter" : type} 
                                inputId={item.inputId && item.inputId}
                                value={item.value} 
                                checked={type == "dough" ? "Традиционное" : "30"}
                                changeVariation={changeVariation}             
                            />
                        )
                        : items.map(item => 
                            <VariationCardItem
                            key={item.value}
                            type={type == "size" ? "diameter" : type} 
                            inputId={item.inputId && item.inputId}
                            value={item.value} 
                            checked={type == "dough" ? "Традиционное" : "30"}
                            changeVariation={changeVariation}
                            id={id}
                            />
                        )
                        }
                    </div>
                </div>
    
    );
}

export default PizzaVariation;




















                     
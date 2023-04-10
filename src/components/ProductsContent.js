import menuStore from "../store/menu"
import PizzaSection from "./PizzaSection";
import ProductSection from "./ProductSection"

const ProductsContent = () => {
     
  return (
    
     <>
        <PizzaSection/>
         {menuStore.sections.map(section => 
            <ProductSection 
               key={section.id} 
               title={section.title} 
               id={section.id} 
            />
         )}
     </>
      
  );
}

export default ProductsContent;






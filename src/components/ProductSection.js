import ProductCard from "./ProductCard"
import itemsStore from "../store/items"


const ProductSection = ({title, id}) => {
     
  
  const products = itemsStore.items.filter(item => item.category_id == id) 
  
  
  return (
    
          <section id={id} className="menu-content">
            <div className="container">
              <h2 className="fs-1 fw-bold">{title}</h2>
              <div className="cards-content">
                {products.map(product => 
                  <ProductCard
                   key={product.id}
                   info={product}
                   />
                )}
              </div>
            </div>  
          </section>
      
  );
}

export default ProductSection;






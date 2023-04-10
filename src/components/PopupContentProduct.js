import cartStore from "../store/cart"

const PopupContentProduct = ({item, closePopup}) => {

    function addProduct(){
        cartStore.addProduct(item);
        closePopup();
    }  

    
  return (
        
        <>
            <div className="popup-img">
                <img src={item.img} alt={item.name}/>
            </div>
            <div className="popup-block">
                <div className={`popup-info`}>
                    <h3 className="fs-3">{item.name}</h3>
                    <p className="t-gray">{item.description}</p>
                    <span className="size fw-normal">{item.size}</span>
                </div>
                <div className="popup-button">
                    <button className="btn-main tr-2 btn-popup" onClick={() => addProduct()}>Купить за {item.price} ₽</button>  
                </div>
            </div>
            <div className="popup-button-adaptive">
                <button className="btn-main btn-popup" onClick={() => addProduct()}>Купить за {item.price} ₽</button>  
            </div>
        </>
                
  );
}

export default PopupContentProduct;









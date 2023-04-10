import cartStore from "../store/cart"

const CartItem = ({info, gift}) => {

    const {itemId, img, name, category, diameter, dough, size, additional_ingredients, count, total} = info;

  return (
        
            <div className="item">
                <button className="btn-remove" onClick={() => !gift ? cartStore.removeItem(itemId, count, total) : cartStore.removeGift()}>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="tr-2">
                        <path d="M10.5001 0L5.99947 4.125L1.49987 0L0 1.375L4.4996 5.5L0 9.625L1.49987 11L5.99947 6.875L10.5001 11L12 9.625L7.5004 5.5L12 1.375L10.5001 0Z"/>
                    </svg>                            
                </button>
                <div className="item-content">
                    <div className="item-img img-block">
                        <img src={img} alt={category == "pizza" ? `${name} пицца` : name}/>
                    </div>
                    <div className={`item-info ${gift ? "gift" : ""}`}>
                        <h3 className="item-title">{name}</h3>
                        <span className="t-gray item-size">{category == "pizza" || gift ? `${diameter} см, ${dough.toLowerCase()} тесто` : `${size}`}</span>
                        {category == "pizza" && additional_ingredients.items.length > 0 &&
                            <span className="additional-ingredients fw-normal">{additional_ingredients.items.map(item => `+ ${item.name.toLowerCase()} `)}</span>
                        }
                        <div className="item-other">
                        {!gift &&
                               <div className="item-quantity">
                                    <button onClick={() => cartStore.increaseCount(itemId)} className="btn-plus tr-2"></button>
                                    <span>{count}</span>
                                    <button onClick={() => cartStore.decreaseCount(itemId, count, total)} className="btn-minus tr-2"></button>
                                </div>
                        } 
                            <span className="fs-4">{!gift ? total : 0} ₽</span>
                        </div>
                    </div>
                </div>
            </div>
                  
  );
}

export default CartItem;









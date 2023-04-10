const GiftItem = ({info, addGift}) =>{

  const {id, img, name, diameter, dough} = info;

  return (
            <>
                <input type="radio" onChange={e => addGift(info)} className="gift-radio-item"  id={`pizza-${id}`} name="gift"/>
                <label htmlFor={`pizza-${id}`} className="gift-item">
                    <div className="gift-img img-block">
                        <img src={img} alt={`${name} пицца`}/>
                    </div>
                    <div className="gift-info">
                        <h3 className="tr-2">{name}</h3>
                        <span className="t-gray">{diameter} см, {dough.toLowerCase()} тесто</span>
                    </div>
                </label> 
            </>  
  );
}

export default GiftItem;




















                     
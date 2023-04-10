import {Link} from "react-router-dom"


const PromotionCard = ({info}) => {
  
  const {id, name, img, description} = info;

  return (
    
        <div className="card-promotion">
            <Link className="promotion-link" to={`/promotions/${id}`}>
                <img src={img} alt={name} className="promotion-img"/>
            </Link>
            <div className="card-promotion-info">
                <Link to={`/promotions/${id}`}>
                    <h3 className="fs-3 promotion-title">{name}</h3>
                </Link>
                <p className="t-gray promotion-text">{description}</p>
            </div>
            <Link to={`/promotions/${id}`} className="btn-promotion tr-2">Подробнее</Link>
        </div>
    
  );
}

export default PromotionCard;






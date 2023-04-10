import {useEffect, useState} from "react"
import {useParams, Link} from "react-router-dom"
import promotionsStore from "../store/promotions"
import Breadcrumbs from "../components/Breadcrumbs"
import {useTitle} from "../hooks/useTitle"

const PromotionItem = () => {
  
 const {id} = useParams()
 
  const [promotion, setPromotion] = useState();

  const [documentTitle, setDocumentTitle] = useTitle();   


 useEffect(() => {

    const promotionItem = promotionsStore.getPromotion(id);
    
    if(promotionItem){
      setPromotion(promotionItem)
      setDocumentTitle(promotionItem.name)
    } else {
      setDocumentTitle("Акция не найдена")
    }
    

 }, [])


  return (
    <main>
        <section>
            <div className="container">
              {promotion 
                ? <>
                    <Breadcrumbs links={[{name: "Акции", href: "/promotions"}, {name: promotion.name, href: ""}]}/>
                    <div className="promotion-info">
                        <h1 className="fw-bold fs-1">{promotion.name}</h1>
                        <img src={`/${promotion.img}`} alt={promotion.name}/>
                        <p className="t-gray">{promotion.description}</p>
                    </div>
                  </>
                : <>
                    <h1 className="fw-bold fs-1">Такая акция не найдена</h1>
                    <Link className="btn-main tr-2" to="/">Вернуться на главную</Link>
                  </>
               }
            </div>
        </section>
    </main>
  );
}

export default PromotionItem;





import PromotionCard from "../components/PromotionCard";
import Breadcrumbs from "../components/Breadcrumbs"
import promotionsStore from "../store/promotions"
import {useTitle} from "../hooks/useTitle"

function Promotions({title}) {
  
  const [documentTitle, setDocumentTitle] = useTitle(title);   


  return (
    <main>
        <section>
            <div className="container">
                <Breadcrumbs links={[{name: "Акции", href: ""}]}/>
                <h1 className="fw-bold fs-1">Акции</h1>
                <div className="promotion-content">
                  {promotionsStore.promotions.map(promotion => 
                    <PromotionCard key={promotion.id} info={promotion}/>  
                  )}
                </div>
            </div>
        </section>
    </main>
  );
}

export default Promotions;





import {useEffect} from "react"
import HomeSlider from "../components/HomeSlider";
import ProductsContent from "../components/ProductsContent";
import Popup from "../components/Popup";
import Thanks from "../components/Thanks"
import menuStore from "../store/menu"
import {useTitle} from "../hooks/useTitle"


const Home = ({title}) => {

  const [documentTitle, setDocumentTitle] = useTitle(title)


  useEffect(() => {
    if(menuStore.menuSection){
     const section = document.getElementById(menuStore.menuSection);
     window.scrollTo({ behavior: 'smooth', top: section.offsetTop - 30});  
    }
    
  }, [menuStore.menuSection])
    
  return (
    <>
     <Thanks/>
     <Popup setDocumentTitle={setDocumentTitle} homePageTitle={title}/>
     <main>
      <HomeSlider/>
      <ProductsContent/>
     </main> 
    </>  
  );
}

export default Home;





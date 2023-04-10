import {useEffect} from "react"
import Router from "./routes/Router"
import { BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Notification from "./components/Notification";
import cartStore from "./store/cart"


const App = () => {

  useEffect(() => {
    cartStore.getCart()
  }, [])


  return (
      <BrowserRouter>
         <Header/>
         <Notification/>
         <Aside/>
        <Router/>
      </BrowserRouter>
    
  );
}

export default App;


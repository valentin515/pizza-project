import { Route, Routes} from "react-router-dom";
import {routes} from "./routes"
import NotFound  from "../pages/NotFound";

const Router = () => {
  
  return (
    <Routes>
        {routes.map(route => 
             <Route path={route.path} element={<route.element title={route.title}/>} key={route.path} exact={route.exact} />
        )} 
         <Route path="*" element={<NotFound title="404 Страница не найдена"/>} /> 

    </Routes> 
  );
}

export default Router;

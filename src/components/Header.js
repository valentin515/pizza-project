import { Link, useLocation} from "react-router-dom";
import Menu from "./Menu"
import Icons from "./Icons"
import Bar from "./Bar"

const Header = () => {

  const {pathname} = useLocation(); 

  
  return (
        <header>
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <img src="/img/logo.svg" alt="logo"/>
                    </Link>
                    {pathname == "/"  && <Menu/>}  
                    <Bar/>
                    <Icons/>
                </div>
            </div>
        </header>   
  );
}

export default Header;





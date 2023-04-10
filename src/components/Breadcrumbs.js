import {Link} from "react-router-dom"

const Breadcrumbs = ({links}) => {    

  return (
    
        <div className="breadcrumbs">
            <ul>
                <li>
                    <Link to="/" className="tr-2">Главная</Link>
                </li>
                {links.map(link =>   
                        link.href 
                        ? <li key={link.href}><Link to={link.href} className="tr-2">{link.name}</Link></li> 
                        : <li key={link.href}>{link.name}</li>          
                )}
            </ul>
        </div>

  );
}

export default Breadcrumbs;






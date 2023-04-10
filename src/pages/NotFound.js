import {Link} from "react-router-dom"
import {useTitle} from "../hooks/useTitle"


const NotFound = ({title}) => {
  
  const [documentTitle, setDocumentTitle] = useTitle(title);  

  return (
    <main>
        <section>
            <div className="container">
                    <div className="breadcrumbs">
                        <ul>
                            <li>
                                <Link to="/" className="tr-2">Главная</Link>
                            </li>
                            <li>404</li>
                        </ul>
                    </div>
                    <h1 className="fw-bold fs-1">404, страница не найдена</h1>
                    <Link className="btn-main tr-2" to="/">Вернуться на главную</Link>
            </div>
        </section>
    </main>
  );
}

export default NotFound;





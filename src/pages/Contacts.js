import Breadcrumbs from "../components/Breadcrumbs"
import {useTitle} from "../hooks/useTitle"

const Contacts = ({title}) => {
  
  const [documentTitle, setDocumentTitle] = useTitle(title);

  return (
    <main>
      <section>
          <div className="container">
              <Breadcrumbs links={[{name: "Контакты", href: ""}]}/>
              <h1 className="fw-bold fs-1">Контакты</h1>
              <div className="contacts-content">
                  <ul className="contacts-ul">
                      <li className="fs-3">г. Новоибирск, проезд Горнистов 45/1</li>
                      <li className="fs-3">Пн-Вс 10:00 - 20:00</li>
                      <li className="fs-3">Эл.почта: <a href="mailto:" className="fs-3 link-mail">pizzatut@gmail.com</a></li>
                      <li className="fs-3">Телефон: <a href="tel:+" className="fs-3 link-phone">+7 (888) 888-88-88</a></li>
                  </ul>
                  <img src="img/contacts.png" alt="Контакты"/>
              </div>
          </div>
      </section>
   </main> 
  );
}

export default Contacts;





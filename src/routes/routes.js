import Home from "../pages/Home"
import Contacts from "../pages/Contacts"
import Promotions from "../pages/Promotions"
import PromotionItem from "../pages/PromotionItem"
import Order from "../pages/Order"
import NotFound from "../pages/NotFound"

export const routes = [
    {path: "/", element: Home, exact: false, menu: false, title: "Доставка пиццы в Новосибирске от Pizza Project", name: ""},
    {path: "/:id", element: Home, exact: false, menu: false, title: "Доставка пиццы в Новосибирске от Pizza Project", name: ""},
    {path: "/contacts", element: Contacts, exact: false, menu: true, title: "Контакты пиццерии Pizza Project", name: "Контакты"},
    {path: "/promotions", element: Promotions, exact: true, menu: true, title: "Aкции пиццерии Pizza Project", name: "Aкции"},
    {path: "/promotions/:id", element: PromotionItem, exact: false, menu: false, title: "", name: ""},
    {path: "/order", element: Order, exact: false, menu: false, title: "Оформление заказа Pizza Project", name: ""},
]

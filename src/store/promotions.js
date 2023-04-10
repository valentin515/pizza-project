import {makeAutoObservable} from "mobx"

class Promotion {

    promotions = [
        {
            id: 1, 
            name: "Пицца 25 см в подарок",
            description: "Cделайте заказ на 899 рублей и получите пиццу 25 см на выбор в подарок! Промокод: GIFT",
            img: "img/promotion1.png"
        },
        {
            id: 2, 
            name: "Пицца 30 см в подарок",
            description: "Cделайте заказ на 1199 рублей и получите пиццу 30 см на выбор в подарок! Промокод: WINTER",
            img: "img/promotion2.png"
        },
        {
            id: 3, 
            name: "Пицца 40 см в подарок",
            description: "Cделайте заказ на 1499 рублей и получите пиццу 40 см на выбор в подарок! Промокод: SPRING",
            img: "img/promotion3.png"
        },
    ];
    

    getPromotion(promoionId){
        return this.promotions.find(promotion => promotion.id == promoionId);
    }

    constructor (){
        makeAutoObservable(this)
    }

}

export default new Promotion()
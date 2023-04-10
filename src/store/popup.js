import {makeAutoObservable} from "mobx"

class Popup {

    popupActive = false;

    constructor (){
        makeAutoObservable(this)
    }

    openPopup(){
        this.popupActive = true;
    }

    closePopup(){
        this.popupActive = false;
    }



    ingredients = [
        {id: 1, name: "Пикантная пепперони", value: "pepperoni", img: "img/image57-5.png", price: 79},
        {id: 2, name: "Цыпленок", value: "chicken", img: "img/image57-4.png", price: 99},
        {id: 3, name: "Острый перец", value: "hot pepper", img: "img/image57-3.png", price: 79},
        {id: 4, name: "Шампиньоны", value: "champignons", img: "img/image57-2.png", price: 99},
        {id: 5, name: "Свежие томаты", value: "tomatoes", img: "img/image57-1.png", price: 79},
    ];

    
}

export default new Popup()
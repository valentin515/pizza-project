import {makeAutoObservable} from "mobx"

class Burger {

    burgerMenuActive = false;

    openBurgerMenu(){
        this.burgerMenuActive = true;
    }

    closeBurgerMenu(){
        this.burgerMenuActive = false;
    }


    constructor (){
        makeAutoObservable(this)
    }

}

export default new Burger()
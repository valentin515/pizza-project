import {makeAutoObservable} from "mobx"

class Menu {

    menuActive = false;

    menuSection = null;

    openMenu(){
        this.menuActive = true;
    }

    closeMenu(){
        this.menuActive = false;
    }


    sections = [
        {title: "Закуски", id: 2},
        {title: "Напитки", id: 3},
        {title: "Соусы", id: 4},
        {title: "Десерты", id: 5},
    ];
    

    constructor (){
        makeAutoObservable(this)
    }

}

export default new Menu()
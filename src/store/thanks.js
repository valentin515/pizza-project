import {makeAutoObservable} from "mobx"

class Thanks {

    thanksActive = false;

    constructor (){
        makeAutoObservable(this)
    }

    openThanks(){
        this.thanksActive = true;
    }

    closeThanks(){
        this.thanksActive = false;
    }

}

export default new Thanks()
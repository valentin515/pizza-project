import {makeAutoObservable} from "mobx"

class Notification {


    notificationInfo = {
        isActive: false,
        text: "",
        error: false,
    }

    showNotification(text, error){

        if(error){
            this.notificationInfo.error = true;
        }
        this.notificationInfo.text = text;
        this.notificationInfo.isActive = true;

        setTimeout(() => {
            this.hideNotification();
        }, 2500)
    }

    hideNotification(){

        this.notificationInfo.error = false;
        this.notificationInfo.text = "";
        this.notificationInfo.isActive = false;

    }

    
    constructor (){
        makeAutoObservable(this)
    }

}

export default new Notification()
import {makeAutoObservable} from "mobx"
import notificationStore from "../store/notification"

class Cart {

    cart = {
        amount: 0,
        count: 0,
        items: [],
        promocode: {},
    }


    asideActive = false;

    giftActive = false;

    gift = null;

    promocodes = [
        {
            name: "GIFT",
            diameter: 25,
            dough: "Традиционное",
            amount: 899,
            items: [
                {id: 1, name: "Cырная", img: "img/image-1.png"},
                {id: 2, name: "Пепперони", img: "img/image-2.png"},
                {id: 3, name: "Цыпленок-барбекю", img: "img/image-3.png"},
                {id: 4, name: "Четыре сыра", img: "img/image-4.png"},
            ]

        },
        {
            name: "WINTER",
            diameter: 30,
            dough: "Традиционное",
            amount: 1199,
            items: [
                {id: 1, name: "Ветчина и грибы", img: "img/image-5.png"},
                {id: 2, name: "Цыпленок-барбекю", img: "img/image-3.png"},
                {id: 3, name: "Пепперони", img: "img/image-2.png"},
                {id: 4, name: "Сырный цыпленок", img: "img/image-6.png"},
            ]

        },
        {
            name: "SPRING",
            diameter: 40,
            dough: "Традиционное",
            amount: 1499,
            items: [
                {id: 1, name: "Мясная", img: "img/image-7.png"},
                {id: 2, name: "Овощи гриль", img: "img/image-8.png"},
                {id: 3, name: "Сырный цыпленок", img: "img/image-6.png"},
                {id: 4, name: "Пепперони", img: "img/image-2.png"},
            ]

        }
    ];

   

    getCart(){

        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const promocode =  JSON.parse(localStorage.getItem("promocode"));

        // if(cartItems && promocode){
            
        //     const amount = cartItems.reduce((sum, item) => sum + item.total, 0);
        //     const count = cartItems.reduce((sum, item) => sum + item.count, 0);
            
        //     this.cart = {
        //         amount,
        //         count,
        //         items: cartItems,
        //         promocode: {
        //             isActive: true,
        //             ...promocode
        //         }
        //     }

        // } else if(cartItems){

        //     const amount = cartItems.reduce((sum, item) => sum + item.total, 0);
        //     const count = cartItems.reduce((sum, item) => sum + item.count, 0);

        //     this.cart = {
        //         amount,
        //         count,
        //         items: cartItems,
        //         promocode: {
        //             isActive: false,
        //         }
        //     }
        // } else if(promocode){
        //     this.cart.promocode = {isActive: false, ...promocode}
        // }

        // console.log(cartItems)

        // console.log(this.cart)
        // // console.log(promocode)

        
        if(cartItems.length !== 0){

            const amount = cartItems.reduce((sum, item) => sum + item.total, 0);
            const count = cartItems.reduce((sum, item) => sum + item.count, 0);

            this.cart = {
                amount,
                count,
                items: cartItems,
            }

        } else {
            this.cart = {
                amount: 0,
                count: 0,
                items: [],
            }
        }


        if(promocode){
            this.cart.promocode = {isActive: true, ...promocode}
        } else {
            this.cart.promocode = {isActive: false}
        }

    }

    addPizza(pizza){

        // const sameItems = this.cart.items.filter(el => el.id == item.id);

        // if(!sameItems.length){
        //     this.cart.items.push({...item, itemId: Date.now(), total: item.price, count: 1});
        //     notificationStore.showNotification("Товар добавлен в корзину");
        // } else {
        //     const same = sameItems.some(el => {
        //         if(el.dough !== item.dough) return false; 
                     
        //         if(el.diameter !== item.diameter) return false; 
                      
                
        //         if(el.additional_ingredients.items.length !== item.additional_ingredients.items.length){
        //             return false; 
        //         } else {
    
        //             const isSame = el.additional_ingredients.items.every(ingredient => {
        //                 let sameItem = item.additional_ingredients.items.find(el => el.value == ingredient.value);
        //                 return sameItem ? true : false
        //             })
    
        //             if(isSame){
        //                 let findElIndex = this.cart.items.findIndex(item => item.itemId == el.itemId);
        //                 this.cart.items[findElIndex].count += 1;
        //                 this.cart.items[findElIndex].total += item.price;
        //                 return true;
        //             } 
        //         }
                  
        //     });
            

        //     if(!same){
        //         this.cart.items.push({...item, itemId: Date.now(), total: item.price, count: 1})
        //         notificationStore.showNotification("Товар добавлен в корзину"); 
        //     }
        // }

        // this.cart.count += 1;
        // this.cart.amount += item.price;
 
        // localStorage.setItem("cart", JSON.stringify(this.cart.items));
        

        const sameItems = this.cart.items.filter(item => item.id == pizza.id);

        if(!sameItems.length){
            this.cart.items.push({...pizza, itemId: Date.now(), total: pizza.price, count: 1});
            notificationStore.showNotification("Товар добавлен в корзину");
        } else {
            const isSame = sameItems.some(sameItem => {

                if(sameItem.dough !== pizza.dough) return false; 
                     
                if(sameItem.diameter !== pizza.diameter) return false; 
                           
                if(sameItem.additional_ingredients.items.length !== pizza.additional_ingredients.items.length){
                    
                    return false; 

                } else {
    
                    const isSameIngredients = sameItem.additional_ingredients.items.every(sameItemIngredient => {
                        let sameIngredient = pizza.additional_ingredients.items.find(pizzangredient => pizzangredient.value == sameItemIngredient.value);
                        return sameIngredient ? true : false
                    })
    
                    if(isSameIngredients){
                        const sameItemIndex = this.cart.items.findIndex(item => item.itemId == sameItem.itemId);
                        this.cart.items[sameItemIndex].count += 1;
                        this.cart.items[sameItemIndex].total += pizza.price;
                        return true;
                    } 
                }
                  
            });
            

            if(!isSame){
                this.cart.items.push({...pizza, itemId: Date.now(), total: pizza.price, count: 1})
                notificationStore.showNotification("Товар добавлен в корзину"); 
            }
        }

        this.cart.count += 1;
        this.cart.amount += pizza.price;
 
        localStorage.setItem("cart", JSON.stringify(this.cart.items));

    }   

    addProduct(product){

        const sameItemIndex = this.cart.items.findIndex(item => item.id == product.id);
        if(sameItemIndex == -1){
            this.cart.items.push({...product, itemId: Date.now(), total: product.price,  count: 1})
            notificationStore.showNotification("Товар добавлен в корзину");
        } else {
            this.cart.items[sameItemIndex].count += 1;
            this.cart.items[sameItemIndex].total += product.price;
        }
        this.cart.count += 1;
        this.cart.amount += product.price;
        localStorage.setItem("cart", JSON.stringify(this.cart.items));

    }
    
    checkPromocode(value){

        const promocode = this.promocodes.find(promocode => promocode.name == value);
        if(promocode){
            localStorage.setItem('promocode', JSON.stringify({...promocode, gift: null}))
            this.cart.promocode = {isActive: true, ...promocode, gift: null}
            notificationStore.showNotification("Промокод активирован");        

        } else {
            notificationStore.showNotification("Такой промокод не существует", true);
        }
    }

    removePromocode(){
        localStorage.removeItem('promocode');
        this.cart.promocode = {isActive: false}
    }


    removeItem(itemId, itemCount, itemTotal, order){

        const filteredItems = this.cart.items.filter(item => item.itemId !== itemId);
        

        if(this.cart.promocode.gift){
            if(this.cart.amount - itemTotal < this.cart.promocode.amount){
                localStorage.setItem("promocode", JSON.stringify({...this.cart.promocode, gift: null}));
            }
         }

         this.cart = {
            amount: this.cart.amount - itemTotal,
            count: this.cart.count - itemCount,
            items: filteredItems,
            promocode: {
                ...this.cart.promocode,
                gift: this.cart.amount - itemTotal < this.cart.promocode.amount ? null : this.cart.promocode.gift,
            }
         }

         localStorage.setItem("cart", JSON.stringify(filteredItems));

         if(order){
            if(filteredItems.length == 0){
                return true;
            }
         }


      }

    removeAllItems(){

        if(this.cart.promocode.gift){
            localStorage.setItem("promocode", JSON.stringify({...this.cart.promocode, gift: null}));
        }

            this.cart = {
                amount: 0,
                count: 0,
                items: [],
                promocode: {
                    ...this.cart.promocode,
                    gift: null
                }
            }

            localStorage.removeItem("cart");
    
    }

    increaseCount(itemId){

        const updateItem = this.cart.items.find(item => item.itemId == itemId);

        updateItem.count += 1;
        updateItem.total +=  updateItem.price;

        const cartItems = this.cart.items.map(item => item.itemId == itemId ? updateItem : item)

         this.cart.amount = this.cart.amount + updateItem.price;
         this.cart.count = this.cart.count + 1;
         this.cart.items = cartItems;


         localStorage.setItem("cart", JSON.stringify(cartItems));

    }

    decreaseCount(itemId, itemCount, itemTotal){

        const updateItem = this.cart.items.find(item => item.itemId == itemId);

        if(updateItem.count == 1){
            this.removeItem(itemId, itemCount, itemTotal);
        } else {
            updateItem.count -= 1;
            updateItem.total -=  updateItem.price;

            const cartItems = this.cart.items.map(item => item.itemId == itemId ? updateItem : item)

            this.cart.amount = this.cart.amount - updateItem.price;
            this.cart.count = this.cart.count - 1;
            this.cart.items = cartItems;


            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
      }

    addGift(gift){
        this.cart.promocode.gift = gift;
        localStorage.setItem("promocode", JSON.stringify({...this.cart.promocode}));
    }

    removeGift(){
        this.cart.promocode.gift = null;
        localStorage.setItem("promocode", JSON.stringify({...this.cart.promocode}));
    }

    
    openAside(){
        this.asideActive = true;
    }

    closeAside(){
        this.asideActive = this.giftActive = false;
    }

    openGift(){
        this.giftActive = true;
    }

    closeGift(){
        this.giftActive = false;
    }

    openGiftOrder(){
        this.asideActive = this.giftActive = true;
       
    }

    closeGiftOrder(){
        this.giftActive = this.asideActive = false;
    }


    constructor (){
        makeAutoObservable(this)
    }

}

export default new Cart()
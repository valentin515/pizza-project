import {makeAutoObservable} from "mobx"

class Item {


    filters = [
        {id: 1, name: "Все"},
        {id: 2, name: "Новинка"},
        {id: 3, name: "Хит"},
        {id: 4, name: "Без лука"},
        {id: 5, name: "С грибами"},
        {id: 6, name: "С мясом"},
    ]

 
    items = [
        {
            id: 1, 
            name: "Cырная",
            description: "Сырный соус, увеличенная порция сыра Моцарелла и орегано",
            category: "pizza",
            category_id: 1,
            img: "img/image-1.png",
            tag: {name: "Новинка", id: 2},
            filters_id: [2,4],
            size: "",
            variations: [
                {diameter: 25, dough: "Традиционное", price: 700},
                {diameter: 30, dough: "Традиционное", price: 750},
                {diameter: 35, dough: "Традиционное", price: 800},
                {diameter: 40, dough: "Традиционное", price: 850},
                {diameter: 25, dough: "Тонкое", price: 600},
                {diameter: 30, dough: "Тонкое", price: 650},
                {diameter: 35, dough: "Тонкое", price: 700},
                {diameter: 40, dough: "Тонкое", price: 750},
            ]
        },
        {
            id: 2, 
            name: "Пепперони",
            description: "Итальянские колбаски пепперони, сыр Моцарелла, томатный соус",
            category: "pizza",
            category_id: 1,
            img: "img/image-2.png",
            tag: {name: "Xит", id: 1},
            filters_id: [3],
            size: "",
            variations: [
                {diameter: 25, dough: "Традиционное", price: 700},
                {diameter: 30, dough: "Традиционное", price: 750},
                {diameter: 35, dough: "Традиционное", price: 800},
                {diameter: 40, dough: "Традиционное", price: 850},
                {diameter: 25, dough: "Тонкое", price: 600},
                {diameter: 30, dough: "Тонкое", price: 650},
                {diameter: 35, dough: "Тонкое", price: 700},
                {diameter: 40, dough: "Тонкое", price: 750},
            ]
        },
        {
            id: 3, 
            name: "Цыпленок-барбекю",
            description: "Цыпленок, бекон, свежий красный лук, сыр Моцарелла, томатный соус, соус Барбекю",
            category: "pizza",
            category_id: 1,
            img: "img/image-3.png",
            tag: null,
            filters_id: [],
            size: "",
            variations: [
                {diameter: 25, dough: "Традиционное", price: 700},
                {diameter: 30, dough: "Традиционное", price: 750},
                {diameter: 35, dough: "Традиционное", price: 800},
                {diameter: 40, dough: "Традиционное", price: 850},
                {diameter: 25, dough: "Тонкое", price: 600},
                {diameter: 30, dough: "Тонкое", price: 650},
                {diameter: 35, dough: "Тонкое", price: 700},
                {diameter: 40, dough: "Тонкое", price: 750},
            ]
        },
        {
            id: 4, 
            name: "Четыре сыра",
            description: "Сыр Моцарелла, сыр Чеддер, сыр Горгонзола и рассольная моцарелла, томатный соус",
            category: "pizza",
            category_id: 1,
            img: "img/image-4.png",
            tag: {name: "Новинка", id: 2},
            filters_id: [2,4],
            size: "",
            variations: [
                {diameter: 25, dough: "Традиционное", price: 700},
                {diameter: 30, dough: "Традиционное", price: 750},
                {diameter: 35, dough: "Традиционное", price: 800},
                {diameter: 40, dough: "Традиционное", price: 850},
                {diameter: 25, dough: "Тонкое", price: 600},
                {diameter: 30, dough: "Тонкое", price: 650},
                {diameter: 35, dough: "Тонкое", price: 700},
                {diameter: 40, dough: "Тонкое", price: 750},
            ]
        },
        {
            id: 5, 
            name: "Ветчина и грибы",
            description: "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус",
            category: "pizza",
            category_id: 1,
            img: "img/image-5.png",
            tag: null,
            filters_id: [4, 5],
            size: "",
            variations: [
                {diameter: 25, dough: "Традиционное", price: 700},
                {diameter: 30, dough: "Традиционное", price: 750},
                {diameter: 35, dough: "Традиционное", price: 800},
                {diameter: 40, dough: "Традиционное", price: 850},
                {diameter: 25, dough: "Тонкое", price: 600},
                {diameter: 30, dough: "Тонкое", price: 650},
                {diameter: 35, dough: "Тонкое", price: 700},
                {diameter: 40, dough: "Тонкое", price: 750},
            ]
        },
        {
            id: 6, 
            name: "Сырный цыпленок",
            description: "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
            category: "pizza",
            category_id: 1,
            img: "img/image-6.png",
            tag: {name: "Хит", id: 3},
            filters_id: [3, 4],
            size: "",
            variations: [
                {diameter: 25, dough: "Традиционное", price: 700},
                {diameter: 30, dough: "Традиционное", price: 750},
                {diameter: 35, dough: "Традиционное", price: 800},
                {diameter: 40, dough: "Традиционное", price: 850},
                {diameter: 25, dough: "Тонкое", price: 600},
                {diameter: 30, dough: "Тонкое", price: 650},
                {diameter: 35, dough: "Тонкое", price: 700},
                {diameter: 40, dough: "Тонкое", price: 750},
            ]
        },
        {
            id: 7, 
            name: "Мясная",
            description: "Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, томатный соус",
            category: "pizza",
            category_id: 1,
            img: "img/image-7.png",
            tag: null,
            filters_id: [],
            size: "",
            variations: [
                {diameter: 25, dough: "Традиционное", price: 700},
                {diameter: 30, dough: "Традиционное", price: 750},
                {diameter: 35, dough: "Традиционное", price: 800},
                {diameter: 40, dough: "Традиционное", price: 850},
                {diameter: 25, dough: "Тонкое", price: 600},
                {diameter: 30, dough: "Тонкое", price: 650},
                {diameter: 35, dough: "Тонкое", price: 700},
                {diameter: 40, dough: "Тонкое", price: 750},
            ]
        },
        {
            id: 8, 
            name: "Овощи гриль",
            description: "Овощи гриль, томаты, красный лук, моцарелла, соус песто, томатный соус, чеснок",
            category: "pizza",
            category_id: 1,
            img: "img/image-8.png",
            tag: null,
            filters_id: [],
            size: "",
            variations: [
                {diameter: 25, dough: "Традиционное", price: 700},
                {diameter: 30, dough: "Традиционное", price: 750},
                {diameter: 35, dough: "Традиционное", price: 800},
                {diameter: 40, dough: "Традиционное", price: 850},
                {diameter: 25, dough: "Тонкое", price: 600},
                {diameter: 30, dough: "Тонкое", price: 650},
                {diameter: 35, dough: "Тонкое", price: 700},
                {diameter: 40, dough: "Тонкое", price: 750},
            ]
        },
        {
            id: 9, 
            name: "Картофельные дольки с беконом и жареным луком",
            description: "Дольки картофельные, сырный соус, бекон, лук жаренный",
            category: "starters",
            category_id: 2,
            img: "img/image-10.png",
            price: 250,
            variation: null,
            tag: null,
            filters_id: [],
            size: "300 г",
            variations: []
        },
        {
            id: 10, 
            name: "Картофель из печи",
            description: "Горячий запеченный картофель",
            category: "starters",
            category_id: 2,
            img: "img/image-13.png",
            price: 150,
            variation: null,
            tag: null,
            filters_id: [],
            size: "200 г",
            variations: []
        },
        {
            id: 11, 
            name: "Куриные крылья",
            description: "Куриные крылышки со специями и ароматом копчения. В порции присутствуют локтевые и плечевые части крылышек",
            category: "starters",
            category_id: 2,
            img: "img/image-11.png",
            price: 250,
            variation: null,
            tag: null,
            filters_id: [],
            size: "200 г",
            variations: []
        },
        {
            id: 12, 
            name: "Картофельные дольки с беконом и огурчиками",
            description: "Дольки картофельные, соус Барбекю, бекон, огурцы маринованные",
            category: "starters",
            category_id: 2,
            img: "img/image-12.png",
            price: 200,
            variation: null,
            tag: null,
            filters_id: [],
            size: "400 г",
            variations: []
        },
        {
            id: 13, 
            name: "Coca-Cola",
            description: "",
            category: "drinks",
            category_id: 3,
            img: "img/image-15.png",
            price: 70,
            variation: null,
            tag: null,
            filters_id: [],
            size: "0,5 л",
            variations: []
        },
        {
            id: 14, 
            name: "Coca-Cola Lime",
            description: "",
            category: "drinks",
            category_id: 3,
            img: "img/image-16.png",
            price: 70,
            variation: null,
            tag: null,
            filters_id: [],
            size: "0,5 л",
            variations: []
        },
        {
            id: 15, 
            name: "Fanta",
            description: "",
            category: "drinks",
            category_id: 3,
            img: "img/image-17.png",
            price: 70,
            variation: null,
            tag: null,
            filters_id: [],
            size: "0,5 л",
            variations: []
        },
        {
            id: 16, 
            name: "Sprite",
            description: "",
            category: "drinks",
            category_id: 3,
            img: "img/image-18.png",
            price: 70,
            variation: null,
            tag: null,
            filters_id: [],
            size: "0,5 л",
            variations: []
        },
        {
            id: 17, 
            name: "Соус Барбекью",
            description: "",
            category: "sauces",
            category_id: 4,
            img: "img/image-19.png",
            price: 40,
            variation: null,
            tag: null,
            filters_id: [],
            size: "25 мл",
            variations: []
        },
        {
            id: 18, 
            name: "Соус Чесночный",
            description: "",
            category: "sauces",
            category_id: 4,
            img: "img/image-20.png",
            price: 40,
            variation: null,
            tag: null,
            filters_id: [],
            size: "25 мл",
            variations: []
        },
        {
            id: 19, 
            name: "Вишневый пирог",
            description: "Творожно-песочное тесто с ягодами, заварным кремом и лепестками миндаля.",
            category: "desserts",
            category_id: 5,
            img: "img/image-22.png",
            price: 200,
            variation: null,
            tag: null,
            filters_id: [],
            size: "200 г",
            variations: []
        },
        {
            id: 20, 
            name: "Чизкейк",
            description: "Нежнейший творожный чизкейк",
            category: "desserts",
            category_id: 5,
            img: "img/image-21.png",
            price: 150,
            variation: null,
            tag: null,
            filters_id: [],
            size: "200 г",
            variations: []
        },
        {
            id: 21, 
            name: "Маффин",
            description: "Нежная начинка на основе шоколада, кубиков белого и молочного шоколада.",
            category: "desserts",
            category_id: 5,
            img: "img/image-23.png",
            price: 100,
            variation: null,
            tag: null,
            filters_id: [],
            size: "150 г",
            variations: []
        },
        {
            id: 22, 
            name: "Липтон Лимонный",
            description: "",
            category: "drinks",
            category_id: 3,
            img: "img/image-50.png",
            price: 90,
            variation: null,
            tag: null,
            filters_id: [],
            size: "0,5 л",
            variations: []
        },
        {
            id: 23, 
            name: "Липтон Зеленый чай",
            description: "",
            category: "drinks",
            category_id: 3,
            img: "img/image-51.png",
            price: 90,
            variation: null,
            tag: null,
            filters_id: [],
            size: "0,5 л",
            variations: []
        },
        {
            id: 24, 
            name: "Aqua Minerale Газированная",
            description: "",
            category: "drinks",
            category_id: 3,
            img: "img/image-52.png",
            price: 80,
            variation: null,
            tag: null,
            filters_id: [],
            size: "0,5 л",
            variations: []
        },
        {
            id: 25, 
            name: "Рулетики с корицей",
            description: "Горячие сладкие рулетики с пряной корицей и сахаром",
            category: "desserts",
            category_id: 5,
            img: "img/image-53.png",
            price: 250,
            variation: null,
            tag: null,
            filters_id: [],
            size: "250 г",
            variations: []
        },
        {
            id: 26, 
            name: "Донат Шоколадный",
            description: "Ароматный донат, покрытый шоколадной глазурью.",
            category: "desserts",
            category_id: 5,
            img: "img/image-54.png",
            price: 120,
            variation: null,
            tag: null,
            filters_id: [],
            size: "150 г",
            variations: []
        },
        {
            id: 27, 
            name: "Донат Клубничный",
            description: "Ярко-розовый пончик без начинки, покрытый ароматной клубничной глазурью.",
            category: "desserts",
            category_id: 5,
            img: "img/image-55.png",
            price: 120,
            variation: null,
            tag: null,
            filters_id: [],
            size: "150 г",
            variations: []
        },
    ];

    constructor (){
        makeAutoObservable(this)
    }

    
    getItem(itemId){
        return this.items.find(item => item.id == itemId);
    }

    findPromocode(value){
        const promocode = this.promocodes.find(promocode => promocode.name == value);
        if(promocode){
            this.activePromocode = promocode;
            return promocode;
        }
    }

}

export default new Item()
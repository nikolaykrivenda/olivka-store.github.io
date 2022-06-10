let markNote = ['Мигдаль', 'Ліщина', 'Родзинки', 'Гарбузові насіння', 'Сущений ананас', 'Фісташка(США)', ]

let NoteApp = {
    data() {
        return {
            hover:false,
            hoverNumber:-1,
            nameArr:['Мигдаль', 'Ліщина', 'Родзинки', 'Гарбузові насіння', 'Сушений ананас', 'Фісташка(США)', ],
            notebookArr:[
                {   name: 'Мигдаль', 
                    model: 'lorem',
                    procesor: '',
                    country: 'Ізраїль',
                    price: '✔️ЦІНА: 36 грн/ 100 гр',
                    image:"240.jpg",
                    
                },
                {   name: 'Мигдаль', 
                model: 'lorem',
                procesor: '',
                country: 'Ізраїль',
                price: '✔️ЦІНА: 36 грн/ 100 гр',
                image:"240.jpg",
            },
           
                {   name: 'Ліщина', 
                    model: 'lorem',
                    procesor: '',
                    country: 'Греція, Італія',
                    price: '✔️ЦІНА: 42 грн/ 100 гр',
                    image:"239.jpg",
                },
                {   name: 'Ліщина', 
                    model: 'lorem',
                    procesor: '',
                    country: 'Греція, Італія',
                    price: '✔️ЦІНА: 42 грн/ 100 гр',
                    image:"239.jpg",
                },
                {  name: 'Родзинки', 
                    model: 'lorem',
                    procesor: '',
                    country: 'США, Мексика, Греція, Туреччина, та Східна Європа.',
                    price: '✔️ЦІНА: 17 грн/ 100 гр',
                    image:"238.jpg",
                },
                {  name: 'Родзинки', 
                model: 'lorem',
                procesor: '',
                country: ' США, Мексика, Греція, Туреччина, та Східна Європа.',
                price: '✔️ЦІНА: 19 грн/ 100 гр',
                image:"236.jpg",
                },
                {  name: 'Гарбузові насіння', 
                model: 'lorem',
                procesor: '',
                country: 'Україна, Європа',
                price: '✔️ЦІНА: 18 грн/ 100 гр',
                image:"234.jpg",
                },
                
                {  name: 'Гарбузові насіння', 
                model: 'lorem',
                procesor: '',
                country: 'Україна, Європа',
                price: '✔️ЦІНА: 18 грн/ 100 гр',
                image:"234.jpg",
                },
                {  name: 'Сушений ананас', 
                model: 'lorem',
                procesor: '',
                country: 'Вьєтнам',
                price:'✔️ЦІНА: 26 грн/ 100 гр',
                image:"251.jpg",
                },
                {  name: 'Сушений ананас', 
                model: 'lorem',
                procesor: '',
                country: 'Вьєтнам',
                price:'✔️ЦІНА: 26 грн/ 100 гр',
                image:"251.jpg",
            },
           
            
                {   name: 'Фісташка(США)', 
                    model: 'lorem',
                    procesor: '',
                    country: 'Україна, Латвія, Канада, Європа',
                    price: '✔️ЦІНА: 52 грн/ 100 гр',
                    image:"241.jpg",
                },
                {   name: 'Фісташка', 
                    model: 'lorem',
                    procesor: '',
                    country: 'Україна, Латвія, Канада, Європа',
                    price: '✔️ЦІНА: 52 грн/ 100 гр',
                    image:"241.jpg",
                }
                
            ],
            chooseName: markNote[0],
            chooseIndex:0,
            chooseNotebooks:[],
            search: "",
        }
    },
    methods: {
        showNotebook(index){
            this.chooseNotebooks.length = 0;
            this.chooseName = this.nameArr[index];
            for (elem of this.notebookArr){
                if (elem.name == this.chooseName){
                    this.chooseNotebooks.push(elem);
                }
            }
        },
        searchFunction(){

        },
       myFilter() {
            let searchString = this.search;
            if (!searchString) {
                return this.chooseNotebooks;
            }
            searchString = searchString.trim().toLowerCase();
            
            this.chooseNotebooks.length = 0;
            return this.notebookArr.filter(item => {
                if ((item.name.toLowerCase().indexOf(searchString) !== -1) || (item.model.toLowerCase().indexOf(searchString) !== -1)) {
                    // return item;
                   this.chooseNotebooks.push(item);
                    return this.chooseNotebooks;
                }
            })
        }
    },
    mounted() {
        this.showNotebook(0)
    },

}

Vue.createApp(NoteApp).mount('#container')
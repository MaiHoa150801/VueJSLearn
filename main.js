var vueInstance = new Vue ({
    el:'#app',
    data:{
        title: 'Quần',
        url: 'https://www.youtube.com/watch?v=AHPkqa5ZaN0&list=PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf&index=7&ab_channel=ZendVN-H%E1%BB%8DcL%E1%BA%ADpTr%C3%ACnhOnline',
        target:'_blank',
        price: 10000,
        counter:0,
        message: 'Le Thi Mai Hoa',
        tabSelected: 'login'
    },
    methods:{
        say:function(text){
            return "Hello " +text;
        },

        formatPrice(){
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },

        handerClick(e, number){
            console.log('click', e);
            this.counter += number;
        },

        handerSubmitForm(e){
            console.log(e);
        },

        changeTabs(tab) {
            this.tabSelected = tab;
        }
    },
    computed: {
        reversedMessage: function () {
        return this.message.split('').reverse().join('')
      },
      
    }
});

var vue = new Vue ({
    el:'#model',
    data:{
        username: '',
        isActive: false,
        isError: true,
        bg: 'https://mondaycareer.com/wp-content/uploads/2020/11/background-%C4%91%E1%BA%B9p-3-1.jpg'
    },
    methods:{
        changeActive(){
            this.isActive = !this.isActive;
        },
        changeError(){
            this.isError = !this.isError;
        }
    },
    computed: {
        objClass:function(){
            return {
                active : this.isActive,
                error: this.isError
            }
        },
        objStyle:function(){
            return {
                backgroundImage: 'url(' + this.bg + ')',
                margin: '10px',
                paddingLeft: '200px',
            }
        }
    }
});

var loop = new Vue ({
    el: '#loop',
    data: {
        arrayUser: [
            {email: 'email1@gmail.com', isActive: true},
            {email: 'email2@gmail.com', isActive: false},
            {email: 'email3@gmail.com', isActive: false},
            {email: 'email4@gmail.com', isActive: true},
            {email: 'email5@gmail.com', isActive: false},
            {email: 'email6@gmail.com', isActive: true},
            {email: 'email7@gmail.com', isActive: false},
            {email: 'email8@gmail.com', isActive: true},
            {email: 'email9@gmail.com', isActive: false},
            {email: 'email10@gmail.com', isActive: true},
        ]
    },
    methods: {

    },
    computed: {
        userActive(){
            return this.arrayUser.filter(function(u){
                return u.isActive
            });
        }
    }
});
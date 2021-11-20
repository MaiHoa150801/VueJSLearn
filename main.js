var vueInstance = new Vue ({
    el:'#app',
    data:{
        title: 'Quần',
        url: 'https://www.youtube.com/watch?v=AHPkqa5ZaN0&list=PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf&index=7&ab_channel=ZendVN-H%E1%BB%8DcL%E1%BA%ADpTr%C3%ACnhOnline',
        target:'_blank',
        price: 10000,
        counter:0,
        message: 'Le Thi Mai Hoa'
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
        }
    },
    computed: {
        reversedMessage: function () {
        return this.message.split('').reverse().join('')
      }
    }
});

var vueInstance = new Vue ({
    el:'#model',
    data:{
        username: '',
    },
    methods:{
        
    },
    computed: {
        
    }
});
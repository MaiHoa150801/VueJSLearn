var vueInstance = new Vue ({
    el:'#app',
    data:{
        title: 'Quần',
        url: 'https://www.youtube.com/watch?v=AHPkqa5ZaN0&list=PLv6GftO355AtDjStqeyXvhA1oRLuhvJWf&index=7&ab_channel=ZendVN-H%E1%BB%8DcL%E1%BA%ADpTr%C3%ACnhOnline',
        target:'_blank',
        price: 10000
    },
    methods:{
        say:function(text){
            return "Hello " +text;
        },
        formatPrice(){
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        }
    }
});
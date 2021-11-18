var vueInstance = new Vue ({
    el:'#app',
    data:{
        title: 'Hello',
    },
    methods:{
        say:function(text){
            return "Hello " +text;
        }
    }
});
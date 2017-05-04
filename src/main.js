import Vue from 'vue';
Vue.config.productionTip = false;

require('./styles/app.scss')
import index from './scripts/components/index.vue';


new Vue({
    el:'#app',
  //  template:'<index />',
    components:{
        index
    },
    template:'<index />'

})
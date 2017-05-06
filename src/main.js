import Vue from 'vue';
Vue.config.productionTip = false;

require('./styles/app.scss')
import router from './scripts/router'

new Vue({
    el:'#app',
    router,
    template:'<router-view></router-view>'
})
<template>
    <div class="m-board">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in list ">
                <img :src="item.images.large" alt=""/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
  
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import axios  from 'axios'
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted:function(){
        var that = this;
        axios({
            method:'get',
            url:'http://localhost:9000/swiper'
        })
            .then(function(res) {
               that.list =   res.data.subjects;
               console.log(res)
        });
    }
}
</script>
<template>
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide class="swipers" v-for="(item,index) in items" :key="index">
                <router-link :to="{name:item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
        </swiper>
    </section>
</template>

<script>
import { swiper,swiperSlide } from 'vue-awesome-swiper';
export default {
    components:{
        swiper,
        swiperSlide,
    },
    props: {
        cname:{
            type:String,
            default:''
        },
        //这个变量是swiper指定的变量
        options: {
            type:Object,
            //参数也是swiper指定的参数
            default(){
                return{
                    autoplay: true,
                    loop: true,
                    pagination:{
                        el:'.swiper-pagination',
                    },
                    notNextTick: false,
                }
            }
        },
        items: {
            type: Array,
            default() {
                return []
            }
        }
    }
    
}
</script>


<style lang="css">
    @import "~swiper/dist/css/swiper.css";

</style>

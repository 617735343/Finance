<template>
    <router-link to="/goods" tag="i" :class="$style.goods" v-show="show">
        <img src="//status.tuanimg.com/statics/zhe/common/img/head_cart.png" alt="">
        <i>{{this.goodsNumber}}</i>
    </router-link>
</template>

<script>
export default {
    data() {
        return {
            goodsNumber: 0,
        }
    },
    props: {
        show:Boolean,
        getgoods:String
    },
    mounted() {
        if(localStorage.goods){
            this.goodsNumber = JSON.parse(localStorage.getItem("goods")).length;
        }
    },
    watch: {
        getgoods() {
            const local = JSON.parse(this.getgoods);
            this.goodsNumber = local.length;
        }
    }
}
</script>

<style lang="scss" module>
    .goods{
        position: fixed;
        right: 20px;
        bottom: 100px;
        width: 80px;
        height: 80px;
        border-radius: 100%;
        border: 1px solid #bd9474;
        background-color: rgba(255, 255, 255, 0.2);
        
        text-align: center;
        
        img{
            width: 70%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        i{
            width: 30px;
            height: 30px;
            border-radius: 100%;
            background-color: #bd9474;
            color: #fff;
            position: absolute;
            right: -10px;
            top: -10px;
            display: block;
            font-size: 24px;
            line-height: 30px;
        }
    }
</style>

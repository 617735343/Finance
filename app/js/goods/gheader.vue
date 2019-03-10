<template>
    <section :class="$style.header">
        <i class="iconfont" @click="handleBlack()">&#xe625;</i>
        <div>购物车</div>
    </section>
</template>

<script>
export default {
    methods: {
        handleBlack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" module>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100px;
        line-height: 100px;
        background-color: #fff;
        div{
            width: 100%;
            text-align: center;
            font-size: 34px;
            color: #666;
        }
        i{
            position: absolute;
            left: 25px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 34px;
        }
    }
</style>

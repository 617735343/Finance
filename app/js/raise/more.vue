<template>
    <Panel title="银行精选" :class="$style.panel">
        <section :class="$style.content">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/8339/36/14601/7721/5c6524ffE0189f8f5/9dd180235514b242.png?width=210&height=260" alt="">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/17948/37/7015/7528/5c652528E6820d247/660dc53bca95a09e.png?width=210&height=260" alt="">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/14645/17/6958/7743/5c65253aE6a2d4cba/8f15936ea37d830b.png?width=210&height=260" alt="">
            <span>更多银行服务 > </span>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
export default {
    components: {
        Panel,
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    @include panel;
    >h4{
        padding-bottom: 30px;
    }
    .content{
        @include flex(row);
        position: relative;
        justify-content: space-around;
        padding-bottom: 60px;
        img{
            width: 32%;
            height: 260px;
            &:nth-child(2){
                padding: 0 3px;
            }
        }
        span{
            position: absolute;
            right: 10px;
            top: -112px;
            font-size: 28px;
            color: #999;
            height: 112px;
            line-height: 95px;
        }
    }
}
</style>

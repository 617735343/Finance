<template>
    <Panel title="众筹故事" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img30.360buyimg.com/cf/jfs/t1/25430/29/7784/82306/5c6f55faE18ab2c6d/b3e6d7023418a263.png!q70.jpg.dpg" alt="">
            <img src="//img30.360buyimg.com/cf/jfs/t1/20307/6/7807/150097/5c6f55ffE6c19968d/1c5c19d9dd746154.png!q70.jpg.dpg" alt="">
            <img src="//img30.360buyimg.com/cf/jfs/t1/24528/29/7844/33553/5c6f560dE5ac0edf5/9c058477be978079.png!q70.jpg.dpg" alt="">
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
export default {
    components: {
        Panel
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    @include panel;
    .content{
        box-sizing: border-box;
        padding: 0 30px;
        img{
            width: 100%;
        }
    }
}
</style>

<template>
    <Panel title="众筹故事" :class="$style.panel">
        <section :class="$style.content" v-for="(item,index) in storyList" :key="index">
            <img :src="item.img" alt="">
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
export default {
    components: {
        Panel
    },
    props: {
        storyList: Array
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
        line-height: 0;
        img{
            width: 100%;
            
        }
    }
}
</style>

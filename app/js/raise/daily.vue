<template>
    <Panel title="每日签到" :class="$style.panel">
        <section :class="$style.content">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22930/284/1784613456/150994/5523cb69/5b697d61Nf7756ac1.png?width=750&height=480" alt="">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t16630/362/2707031119/15173/aa5acde3/5b03d5c7Nccffa23f.jpg?width=750&height=480" alt="">
            <p>不抢白不抢</p>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    components: {
        Panel,
    }
}
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            @include flex(row);
            position: relative;
            padding-bottom: 20px;
            img{
                width: 320px;
                height: 200px;
            }
            p{
                position: absolute;
                top: -100px;
                right: 20px;
                font-size: 28px;
                color: #999;
                height: 112px;
                line-height: 112px;
            }
        }
    }
</style>

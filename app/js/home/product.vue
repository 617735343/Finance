<template>
    <Panel title="新品推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.arrow">
                更多尖货>
            </div>
            <Slider :options="options" :items="items" cname="product-slider"></Slider>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue';
import Slider from '../core/slider.vue';
export default {
    components: {
        Panel,
        Slider,
    },
    data() {
        return {
            items:[{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/8400/39/12559/14819/5c387a22Eb2b1d29f/70588a5a61bfdde1.jpg?width=335&height=421'
            },{
                href:'home',
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/7388/5/12769/16802/5c387a23Ee497f7d9/e593f68e29afa8b6.jpg?width=335&height=421"
            },{
                href:'home',
                src:"https://img12.360buyimg.com/jrpmobile/jfs/t1/11417/29/6015/31505/5c387a28E3756cc25/0707389bbdefb14d.jpg?width=335&height=421"
            },{
                href:'home',
                src:"//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421"
            }],
            options:{
                slidesPerView:2.3,
                spaceBetween:30,
                freeMode: true,
            }
        }
    }
}
</script>

<style lang="scss">
    .product-slider{
        .swiper-container{
            box-sizing: border-box;
            padding: 0 20px;
            .swiper-slide{
                a{
                    display: inline-block;
                    width: 100%;
                    img{
                        width: 100%;
                        display: block;
                        height: 314px;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import '../../css/element.scss';
    .panel{
        @include panel;
        .content{
            padding-bottom: 40px;
            position: relative;
            &>div{
                position: absolute;
                font-size:28px;
                color: #999;
                right: 20px;
                top: -65px;
            }
        }
    }
</style>


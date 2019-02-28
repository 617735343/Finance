<template>
    <article class="">
        <Silder :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href }">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Silder from '../core/slider.vue'
export default {
    components: {
        Silder,
    },
    data(){
        return {
            items:[{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/21437/13/8246/46685/5c73d555Ebbda75ab/1a476fb2010b79f8.jpg?width=750&height=320'
            },{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/8585/31/15759/39391/5c73d5a9E970f5027/2798ac4a34fe8db9.jpg?width=750&height=320'
            },{
                href:'home',
                src:'https://img12.360buyimg.com/jrpmobile/jfs/t1/17122/13/8273/37518/5c73d5dfEab419177/986b987ab7c22514.jpg?width=750&height=320'
            }],
            enters:[{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                title:'优惠卷',
            },{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                title:'领福利',
            },{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                title:'抢钢镚'
            },{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                title:'白条提额'
            },{
                href:'home',
                img:'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
                title:'工资理财'
            }],
        }
    }
}
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .slider{
        margin-top: 110px;
        img{
            width: 100%;
        }
    }
    .list{
        @include list(row);
        background: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around;
        a{
            text-decoration: none;
        }
        .item{
            text-align: center;
            img{
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4{
                font-size: 26px;
                margin-top: 12px;
                color: #666;
            }
        }
    }
</style>

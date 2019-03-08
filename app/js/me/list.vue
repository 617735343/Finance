<template>
    <Panel title="列表信息" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.user" v-for="(item,index) of list" :key="index">
                <img :src="item.img" alt="">
                <span :class="$style.name">{{item.title}}</span>
                <span :class="$style.out">{{item.txt}} ></span>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    data() {
        return {
            list:[{
                img:"https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70",
                title:"我的资产",
                txt:"查看全部资产"
            },{
                img:"https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70",
                title:"我的优惠卷",
                txt:"查看全部"
            },{
                img:"https://img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90",
                title:"我的金币",
                txt:"赚金币兑好物"
            },{
                img:"https://img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90",
                title:"我的金条",
                txt:"查看额度"
            },{
                img:"https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70",
                title:"我的借钱",
                txt:"查看全部产品"
            },{
                img:"https://img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70",
                title:"我的众筹",
                txt:"查订单/物流"
            },{
                img:"https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70",
                title:"我的保障",
                txt:"全方位保障"
            },{
                img:"https://img12.360buyimg.com/jrpmobile/jfs/t1/3907/34/11652/2582/5bd04759Ea9acb837/f893bf98fd67c192.png?width=54&height=54",
                title:"我的爱车",
                txt:"绑车享专属福利"
            }]
        }
    },
    components: {
        Panel
    },
}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .panel{
        @include panel;
        margin-bottom: 100px;
        >h4{
            display: none;
        }
        .content{
            @include flex;
            .user{
                @include flex(row);
                justify-content: space-around;
                height: 100px;
                line-height: 100px;
                img{
                    width: 40px;
                    height: 40px;
                    margin-top: 30px;
                    padding-left: 25px;
                    padding-right: 30px;
                }
                span{
                    font-size: 32px;
                }
                .name{
                    flex: 2;
                    color: #666;
                }
                .out{
                    padding-right: 25px;
                    color: #666;
                    font-size: 28px;
                }
            }
        }
    }
</style>

<template>
    <Panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>下载APP <span :class="$style.red">送888元礼包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="https://okgo.top/152888060280003.png" alt="">
                        <h4 :class="$style.red">领128元新手礼包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>
                    <li>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551333970694&di=6a536776b82c29f9293ee17e5d62dccf&imgtype=0&src=http%3A%2F%2Fwww.downxia.com%2Fuploadfiles%2F2016%2F0112%2F20160112032432843.jpg" alt="">
                        <h4>打白条 <span :class="$style.red">享免息</span></h4>
                        <p :class="$style.gray">立即开通享豪礼</p>
                    </li>
                </ul>
            </div>
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
        margin-top: 10px;
        >h4{
            border-bottom: 1px solid #ddd;
        }
        .content{
            @include list(row);
            .item{
                width: 50%;
                box-sizing: border-box;
                &:first-child{
                    padding: 32px 20px;
                    text-align: center;
                    border-right: 1px solid #ddd;
                    img{
                        width: 132px;
                        height: 132px;
                        margin: 20px auto 0;
                    }
                }
                h4{
                    font-size: 26px;
                    line-height: 40px;
                }
                .red{
                    color: #ff0000;
                }
                .gray{
                    color: #999;
                    font-size: 24px;
                }
                p{
                    margin-top: 6px;
                    font-size: 24px;
                }
                ul{
                    width: 100%;
                    li{
                        height: 144px;
                        width: 100%;
                        padding: 32px 28px;
                        box-sizing: border-box;
                        &:first-child{
                            border-bottom: 1px solid #ddd;
                        }
                        h4{
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            text-align: left;
                        }
                        img{
                            width: 80px;
                            height: 80px;
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>

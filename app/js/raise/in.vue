<template>
  <Panel title="In货推荐" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in items" :key="item.catory">
        <img :src="item.catory" alt>
        <section :class="$style.list">
          <div :class="$style.product" v-for="product in item.list" :key="product.img">
            <router-link :to="'/raisechain/' + product.id">
              <img :src="product.img" alt>
              <p :class="$style.title">{{product.title}}</p>
              <p :class="$style.price">
                <em>{{product.price}}</em>起
              </p>
              <article>
                <div :class="$style.wrapper">
                  <div :class="$style.inner" :style="{width:product.progress+'%'}"></div>
                </div>
                <p>{{product.progress}}%</p>
              </article>
              <label v-if="product.selected">精选</label>
            </router-link>
          </div>
        </section>
      </div>
    </section>
  </Panel>
</template>


<script>
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel
  },
  data() {
    return {
      items: [
        {
          catory:
            "//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
          list: [
            {
              id:"001",
              img:
                "//img30.360buyimg.com/cf/jfs/t1/19348/31/7070/145353/5c653117E3e158dbc/7cae91cb663e73e6.jpg!q70.jpg.dpg",
              title: "杀菌烘干声波电动牙刷",
              price: "33.00",
              progress: 326,
              selected: true
            },
            {
              id:"002",
              img:
                "//img30.360buyimg.com/cf/jfs/t1/17054/26/8492/144711/5c765aedEc7552148/b1ed02a72bc7d372.jpg!q70.jpg.dpg",
              title: "小泽净水洗碗机器人",
              price: "1999.00",
              progress: 8
            }
          ]
        },
        {
          catory:
            "//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
          list: [
            {
              id:"003",
              img:
                "//img30.360buyimg.com/cf/jfs/t1/30158/8/1424/107208/5c4c13a8Ebe1a36b8/69a17c05a5f5f52a.jpg!q70.jpg.dpg",
              title: "艾秀无线按摩红外热敷智能眼罩",
              price: "198.00",
              progress: 56
            },
            {
              id:"004",
              img:
                "//img30.360buyimg.com/cf/jfs/t1/21396/38/8109/127502/5c7378b1E12df7d91/88b3849cf09c6a7d.jpg!q70.jpg.dpg",
              title: "觅光者智能云镜",
              price: "799.00",
              progress: 39
            }
          ]
        },
        {
          catory:
            "//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
          list: [
            {
              id:"005",
              img:
                "//img30.360buyimg.com/cf/jfs/t1/9479/9/16001/148876/5c74e1b0Ecf2b2875/a8784fadd2fb5dba.jpg!q70.jpg.dpg",
              title: "WMF智巧种植盆 私人田园",
              price: "399.00",
              progress: 2
            },
            {
              id:"006",
              img:
                "//img30.360buyimg.com/cf/jfs/t1/23996/1/2837/142994/5c21cd71E1c670bf8/1b02bd035bc98000.jpg!q70.jpg.dpg",
              title: "宜居云智能面包机",
              price: "299.00",
              progress: 109
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  .content {
    @include flex;
    .item {
      margin-bottom: 40px;
      > img {
        display: block;
        width: 100%;
        height: 170px;
      }
      .list {
        @include flex(row);
        .product {
          width: 50%;
          height: 396px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.02);
          text-align: center;
          position: relative;
          a{
            text-decoration: none;
          }
          img {
            width: 180px;
            height: 180px;
            margin: 44px auto 20px;
          }
          .title {
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color: #444;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .price {
            font-family: PingFangSC-Semibold;
            font-size: 20px;
            color: #999;
            height: 48px;
            line-height: 48px;
            em {
              font-size: 36px;
              color: #ff3232;
              margin-right: 4px;
              &::before {
                content: "￥";
                font-size: 28px;
              }
            }
          }
          article {
            @include flex(row);
            align-items: center;
            justify-content: space-around;
            padding: 0 20px;
            height: 30px;
            line-height: 30px;
            margin-top: 16px;
            .wrapper {
              width: 144px;
              height: 10px;
              background: #f6e6e6;
              border-radius: 22px;
              .inner {
                max-width: 100%;
                height: 10px;
                background-image: linear-gradient(
                  270deg,
                  #f55 1%,
                  #ff9c31 100%
                );
                border-radius: 22px;
              }
            }
            p {
              font-size: 24px;
              color: #999;
            }
          }
          label {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 20px;
            color: #ff0000;
            text-align: center;
            padding: 4px 8px;
            background-image: linear-gradient(-35deg, #c1c1c1 0, #acacac 100%);
          }
        }
      }
    }
  }
}
</style>

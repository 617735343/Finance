<template>
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <dl :class="$style.item" v-for="item in items" :key="item.title">
        <dt>
          {{item.title}}
          <span :class="$style.red">{{item.sub}}</span>
        </dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.text}}</dd>
      </dl>
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
          title: "定期理财",
          sub: "理财首选",
          rate: "5.60%",
          text: "历史年化回报率"
        },
        {
          title: "小白理财",
          sub: "理财首选",
          rate: "4.22%",
          text: "7日年化收益率"
        },
        {
          title: "月月盈",
          sub: "养老保障",
          rate: "5%",
          text: "7日年化收益率"
        },
        {
          title: "小白基金",
          sub: "天天赚钱",
          rate: "4.27%",
          text: "7日年化收益率"
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
    @include flex(row);
    justify-content: space-around;
    box-sizing: border-box;
    &:after{
        content: "";
        display: block;
        width: 100%;
        height: 0;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        position: relative;
        top: -205px;
    }
    .item {
      position: relative;
      padding: 34px 16px;
      box-sizing: border-box;
      width: 50%;
      &:after {
        content: "";
        width: 1px;
        height: 136px;
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        border-right: 1px solid #eee;
      }
      &:nth-child(2) {
        &:after {
          display: none;
        }
      }

      dt {
        font-size: 30px;
        line-height: 42px;
        color: #333;
        .red {
          font-size: 22px;
          color: #ef7d00;
          border: 1px solid #ef7d00;
          padding: 0 8px;
          vertical-align: 1px;
          margin-left: 2px;
        }
      }
      dd {
        &:nth-child(2) {
          font-weight: 700;
          font-size: 44px;
          height: 58px;
          line-height: 58px;
          color: #ef7d00;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:nth-child(3) {
          font-size: 24px;
          height: 34px;
          line-height: 34px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}
</style>

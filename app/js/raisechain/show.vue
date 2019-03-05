<template>
  <Panel title="展示商品" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.label">
        <i></i>
        <p>轻松好睡眠</p>
      </div>
      <div :class="$style.label">
        <p>智能干预</p>
        <i></i>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    position: relative;
    background: url(//img30.360buyimg.com/cf/jfs/t1/21460/6/7316/152429/5c6bc770E64cc1118/c54eb9896eb51b97.jpg)
      center center no-repeat;
    background-size: 100% auto;
    height: 1136px;
    .label {
      @include flex(row);
      justify-content: space-around;
      align-items: center;
      width: 230px;
      height: 46px;
      line-height: 46px;
      position: absolute;
      box-sizing: border-box;
      i {
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #fff;
      }
      p {
        font-size: 26px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
        padding-left: 16px;
        padding-right: 16px;
        opacity: 0.7;
      }
      &:nth-child(1) {
        top: 200px;
        right: 90px;
        &::before {
          position: absolute;
          width: 0;
          height: 0;
          border-top-style: solid;
          border-top-color: transparent;
          border-right-style: solid;
          border-right-color: rgba(0, 0, 0, 0.7);
          border-bottom-style: solid;
          border-bottom-color: transparent;
          content: "";
          left: 30px;
          top: 0;
          border-top-width: 24px;
          border-right-width: 24px;
          border-bottom-width: 24px;
          border-left: 0;
          opacity: 0.7;
        }
      }
      &:nth-child(2) {
        top: 380px;
        left: 50px;
        &::after {
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-top-color: transparent;
          border-bottom-color: transparent;
          border-left-color: rgba(0, 0, 0, 0.7);
          content: "";
          left: 157px;
          top: 0;
          border-top-width: 24px;
          border-left-width: 24px;
          border-bottom-width: 24px;
          border-right: 0;
          opacity: 0.7;
        }
      }
    }
  }
}
</style>

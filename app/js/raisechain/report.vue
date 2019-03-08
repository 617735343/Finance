<template>
  <Panel title="项目报告" :class="$style.panel">
    <section :class="$style.content">
      <p :class="$style.title">{{this.reportList.title}}</p>
      <p :class="$style.txt">{{this.reportList.txt}}</p>
      <div>申请0元试用</div>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel
  },
  props: {
    reportList: Object
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  margin-bottom: 85px;
  .content {
    @include flex;
    padding: 0 60px 80px 60px;
    .title {
      font-weight: 700;
      font-family: gotham;
      font-size: 28px;
      color: #333;
      margin-top: 15px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .txt {
      display: block;
      display: -webkit-box;
      // max-width: 400px;
      height: 109.2px;
      // margin: 0 auto;
      font-size: 26px;
      line-height: 1.4;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 20px 0;
    }
    div {
      width: 157px;
      height: 42px;
      color: #fff;
      background-color: #000;
      text-align: center;
      line-height: 42px;
      font-size: 20px;
      margin-top: 10px;
    }
  }
}
</style>

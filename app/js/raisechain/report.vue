<template>
  <Panel title="项目报告" :class="$style.panel">
    <section :class="$style.content">
      <p :class="$style.title">2019-3-6 HEAGS赫格无影读写台灯</p>
      <p :class="$style.txt">这是一款有多位资深的照明行业人士的具设计研发的一款具有多个专利的专业读写台灯。</p>
      <div>申请0元试用</div>
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
    }
    .txt {
      padding-top: 0.266667rem;
      margin-bottom: 0.266667rem;
      line-height: 35px;
      max-height: 87px;
      font-size: 24px;
      color: #444;
      overflow: hidden;
    }
    div{
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

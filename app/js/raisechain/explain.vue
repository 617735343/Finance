<template>
  <panel title="产品说明" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.title">
        <p>{{this.explainList.title}}</p>
        <p>{{this.explainList.txt}}</p>
      </div>
      <div :class="$style.items">
        <div :class="$style.item">
          <p :class="$style.num">{{this.explainList.support}}</p>
          <p :class="$style.txt">支持人数</p>
        </div>
        <div :class="$style.item">
          <p :class="$style.num">
            <em>￥</em>
            {{this.explainList.raise}}
          </p>
          <p :class="$style.txt">已筹金额</p>
        </div>
        <div :class="$style.item">
          <p :class="$style.num">{{this.explainList.reach}}</p>
          <p :class="$style.txt">达成率</p>
        </div>
      </div>
    </section>
  </panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel
  },
  props: {
    explainList: Object
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  width: 100%;
  height: 390px;
  position: absolute;
  left: 0;
  top: 710px;
  background-color: transparent;
  z-index: 99;
  > h4 {
    display: none;
  }
  .content {
    @include flex;
    width: 563px;
    height: 318px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    .title {
      position: relative;
      padding-left: 56px;
      padding-right: 56px;
      padding-bottom: 46px;
      padding-top: 46px;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.16rem;
        height: 1.866667rem;
        background: #ddc4b1;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0.866667rem;
        right: 0.866667rem;
        bottom: 0;
        height: 1px;
        background: #505050;
      }
      p {
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:first-child {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 5px;
        }
        &:last-child {
          font-size: 28px;
        }
      }
    }
    .items {
      @include flex(row);
      height: 148px;

      .item {
        width: 33.3333%;
        height: 73px;
        text-align: center;
        align-self: center;
        &:nth-child(1) {
          &:after {
            position: absolute;
            top: 50%;
            left: 200px;
            background-color: #ddd;
            content: "";
            opacity: 0.2;
            width: 1px;
            height: 48px;
            margin-top: 15px;
          }
        }
        &:nth-child(2) {
          &:after {
            position: absolute;
            top: 50%;
            left: 430px;
            background-color: #ddd;
            content: "";
            opacity: 0.2;
            width: 1px;
            height: 48px;
            margin-top: 15px;
          }
        }
        .num {
          color: #fff;
          font-size: 32px;
          margin-bottom: 10px;
        }
        .txt {
          color: #818181;
          font-size: 22px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>

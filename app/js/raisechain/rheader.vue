<template>
  <div :class="$style.header" v-show="show">
    <ul>
      <li class="iconfont">&#xe625;</li>
      <li>故事</li>
      <li>回报</li>
      <li>报告</li>
      <li>评论</li>
      <li>推荐</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Rheador',
    props: {
        show: Boolean
    }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.header {
  height: 85px;
  line-height: 85px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fff;
  ul {
    @include flex(row);
    justify-content: space-around;
    li {
      width: 18%;
      text-align: center;
      font-size: 24px;
      &:first-child {
        width: 5%;
        margin-left: 10px;
      }
    }
  }
}
</style>

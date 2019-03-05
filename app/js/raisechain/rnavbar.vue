<template>
  <div :class="$style.header" v-show="show">
    <ul>
      <li>
          <img src="../../../static/收 藏.png" alt="">
          <p>收藏 312</p>
      </li>
      <li>
          <i class="iconfont">&#xe622;</i>
          <p>分享</p>
      </li>
      <li>
          <i class="iconfont">&#xe62f;</i>
          <p>评论 39</p>
      </li>
      <li>去支持</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        show: Boolean
    }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.header {
  height: 85px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fff;
  ul {
    @include flex(row);
    justify-content: space-around;
    height: 85px;
    li {
      flex: 1;
      text-align: center;
      font-size: 24px;
      height: 50px;
      align-self: center;
      img{
          width: 32px;
          height: 34px;
      }
      i{
          font-size: 36px;
      }
      p{
          font-size: 18px;
      }
      &:last-child {
        flex: 2;
        color: #fff;
        background-color: #bd9474;
        height: 85px;
        line-height: 85px;
      }
    }
  }
}
</style>

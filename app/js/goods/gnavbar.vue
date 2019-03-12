<template>
  <section :class="$style.footer">
    <div :class="$style.price">
      <p>合计： ￥{{this.total}}</p>
      <p>不含运费</p>
    </div>
    <div :class="$style.out">结算 ({{this.num}})</div>
  </section>
</template>

<script>
export default {
  props: {
    total: Number,
    num: Number
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #fff;
  @include flex(row);
  .price {
    width: 70%;
    text-align: right;
    padding: 20px 20px;
    box-sizing: border-box;
    p {
      font-size: 24px;
      &:first-child {
        color: red;
        margin-bottom: 5px;
      }
      &:last-child {
        color: #666;
      }
    }
  }
  .out {
    width: 30%;
    background: #bd9474;
    color: white;
    text-align: center;
    line-height: 100px;
    font-size: 28px;
  }
}
</style>

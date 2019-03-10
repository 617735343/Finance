<template>
  <div :class="$style.header" v-show="show">
    <ul>
      <li>
        <img src="../../../static/收 藏.png" alt>
        <p>收藏 {{this.navborList.collection}}</p>
      </li>
      <li>
        <i class="iconfont">&#xe622;</i>
        <p>分享</p>
      </li>
      <li>
        <i class="iconfont">&#xe62f;</i>
        <p>评论 {{this.navborList.comment}}</p>
      </li>
      <li :style="{backgroundColor: color}" @click="handleAddSupport()" ref="add">加入购物车</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    show: Boolean,
    navborList: Object,
    showList: Object,
    explainList: Object
  },
  data() {
    return {
      goodsObject: {
        img: "",
        title: "",
        price: ""
      },
      color: "#bd9474",
      goodsList: []
    };
  },
  methods: {
    handleAddSupport() {
      if (localStorage.getItem("username") == "未登录") {
        this.$router.push("/login");
        alert("你还没登录账号，请登录");
      } else {
        let getgoods = "";
        if (localStorage.goods) {
          getgoods = localStorage.getItem("goods");

          const goods = JSON.parse(getgoods);
          for (let i = 0; i < goods.length; i++) {
            if (goods[i].title == this.explainList.title) {
              alert("购物车中已有该商品");
              this.color = "black";
              return;
            }
          }
        }
        alert("成功加入购物车");
        this.goodsObject.img = this.showList.bimg;
        this.goodsObject.title = this.explainList.title;
        this.goodsObject.price = this.explainList.price;
        this.changeGoods(this.goodsObject);
        this.$emit("change", localStorage.getItem("goods"));
        this.color = "black";
      }
    },
    ...mapActions(["changeGoods"])
  },
  mounted() {
      let getgoods = "";
        if (localStorage.goods) {
          getgoods = localStorage.getItem("goods");

          const goods = JSON.parse(getgoods);
          for (let i = 0; i < goods.length; i++) {
            if (goods[i].title == this.explainList.title) {
              alert("购物车中已有该商品");
              this.color = "black";
              return;
            }
          }
        }
  }
}
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
      img {
        width: 32px;
        height: 34px;
      }
      i {
        font-size: 36px;
      }
      p {
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

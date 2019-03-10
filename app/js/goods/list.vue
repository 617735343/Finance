<template>
  <section :class="$style.content">
    <div :class="$style.header">
      <div :class="$style.left">
        <input :class="$style.input" type="checkbox" id="alls" value="#f0544d">
        <label for="alls"></label>
        <span>全选</span>
      </div>
      <div :class="$style.right">删除</div>
    </div>
    <ul>
      <li v-for="(item,index) of goodsList" :key="index">
        <input :class="$style.input" type="checkbox" :id="index" value="#f0544d">
        <label :for="index"></label>
        <img :src="item.img" alt>
        <div :class="$style.center">
          <p>{{item.title}}</p>
          <div :class="$style.num">
            <button>-</button>
            <input type="num" :value="number">
            <button>+</button>
          </div>
        </div>
        <span>{{item.price}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      number: 1,
      goodsList: []
    };
  },
  methods: {},
  mounted() {
    if (localStorage.goods) {
      this.goodsList = JSON.parse(localStorage.getItem("goods"));
    }
  },
  computed: {
    // ...mapState(["goodsList"])
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.content {
  @include flex;
  margin-top: 100px;
  .header {
    height: 80px;
    position: relative;
    background: #fff;
    .left {
      position: relative;
      height: 80px;
      line-height: 70px;
      span {
        margin-left: 25px;
        font-size: 28px;
        color: #666;
      }
      .input + label {
        display: block;
        width: 30px;
        height: 30px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 15px;
        background: #bd9474;
        border-radius: 100%;
      }
      .input:checked + label::before {
        display: block;
        content: "\2714";
        text-align: center;
        font-size: 28px;
        line-height: 30px;
        color: white;
      }

      input[type="checkbox"] {
        visibility: hidden;
      }
    }
    .right {
      position: absolute;
      right: 25px;
      top: 0;
      bottom: 0;
      font-size: 28px;
      color: red;
      line-height: 80px;
    }
  }
  ul {
    @include flex;
    background-color: #fff;
    li {
      height: 100%;
      // line-height: 150px;
      @include flex;
      position: relative;
      justify-content: space-around;
      text-align: center;
      height: 150px;
      .input + label {
        display: block;
        width: 30px;
        height: 30px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 25px;
        background: #bd9474;
        border-radius: 100%;
        z-index: 9;
      }
      .input:checked + label::before {
        display: block;
        content: "\2714";
        text-align: center;
        font-size: 28px;
        line-height: 30px;
        color: white;
      }

      input[type="checkbox"] {
        visibility: hidden;
      }

      img {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 80px;
        top: 50%;
        transform: translateY(-50%);
      }
      span {
        position: absolute;
        right: 15px;
        top: 0;
        bottom: 0;
        line-height: 150px;
        font-size: 32px;
        color: red;
      }
      .center {
        padding: 20px 100px 30px 200px;
        box-sizing: border-box;
        position: relative;
        flex: 1;
        height: 100%;
        p {
          font-size: 28px;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 280px;
        }
        .num {
          @include flex(row);
          justify-content: space-between;
          box-sizing: border-box;
          width: 150px;
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);

          button {
            width: 35px;
            height: 35px;
            border: 0;
            border-radius: 100%;
            background-color: #bd9474;
            color: #fff;
            font-size: 28px;
            line-height: 35px;
          }
          input {
            width: 40px;
            text-align: center;
            font-size: 28px;
          }
        }
      }
    }
  }
}
</style>

<style>
</style>


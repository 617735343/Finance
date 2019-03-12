<template>
  <section :class="$style.content">
    <div :class="$style.header">
      <div :class="$style.left">
        <input
          :class="$style.input"
          v-model="checked"
          @click="handleSwapCheck()"
          type="checkbox"
          id="alls"
          value="#f0544d"
        >
        <label for="alls"></label>
        <span>全选</span>
      </div>
      <div :class="$style.right" @click="handleDelete">删除</div>
    </div>
    <ul>
      <li v-for="(item,index) of goodsList" :key="index">
        <input
          @click="handleCheckedList()"
          :class="$style.input"
          v-model="checkedList"
          ref="selectList"
          type="checkbox"
          :id="index"
          :value="index"
        >
        <label :for="index"></label>
        <img :src="item.img" alt>
        <div :class="$style.center">
          <p>{{item.title}}</p>
          <div :class="$style.num">
            <button @click="handleEle(index)">-</button>
            <input type="num" v-model="item.num">
            <button @click="handleAdd(index)">+</button>
          </div>
        </div>
        <span>￥{{item.price}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      //存储的数据
      goodsList: [],
      checked: false,
      checkedList: []
    };
  },
  methods: {
    //点击减号
    handleEle(index) {
      let item = this.goodsList[index];
      if (item.num < 1) {
        return;
      }
      item.num--;
      this.$emit("changeTotal", this.totalPrice, this.totalNum);
    },
    //点击加号
    handleAdd(index) {
      let item = this.goodsList[index];
      item.num++;
      this.$emit("changeTotal", this.totalPrice, this.totalNum);
    },
    //点击全选
    handleSwapCheck() {
      let selectList = this.$refs.selectList;
      console.log(selectList);
      const len = selectList.length;
      if (this.checked) {
        for (let i = 0; i < len; i++) {
          let item = selectList[i];
          item.checked = false;
        }
        this.checked = false;
        this.checkedList = [];
      } else {
        for (let i = 0; i < len; i++) {
          let item = selectList[i];
          if (item.checked === false) {
            item.checked = true;
            this.checkedList.push(selectList[i].value);
            console.log(this.checkedList);
          }
        }
        this.checked = true;
      }
      this.$emit("changeTotal", this.totalPrice, this.totalNum);
    },
    //点击子选择框
    handleCheckedList() {
      let selectList = this.$refs.selectList;
      const len = selectList.length;

      let j = 0;
      for (let i = 0; i < len; i++) {
        let item = selectList[i];
        if (item.checked) {
          j++;
        } else {
          j--;

          // console.log(this.checkedList);
        }
      }
      selectList.forEach((el, i) => {
        if (el.checked) {
          let index = this.checkedList.indexOf(el.value);
          // console.log(index)
          if (index == -1) {
            //  console.log(1);
            this.checkedList.push(el.value);
          }
        } else {
          let index = this.checkedList.indexOf(el.value);
          if (index > -1) {
            this.checkedList.splice(index, 1);
          }
        }
      });
      this.$emit("changeTotal", this.totalPrice, this.totalNum);
      if (j == len) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    //点击删除
    handleDelete() {
      const selectList = this.$refs.selectList;
      let setlocalStorage = [];
      let goodsObject = {
        img: "",
        title: "",
        price: "",
        num: ""
      };

      let arr0 = [];
      selectList.forEach((el, index) => {
        if (el.checked) {
          arr0.push(index);

          // console.log(index)
          // console.log(index)
          // goodsObject.img = this.goodsList[index].img;
          // goodsObject.title = this.goodsList[index].title;
          // goodsObject.price = this.goodsList[index].price;
          // goodsObject.num = this.goodsList[index].num;
          // this.changeDelete(goodsObject);
          // this.goodsList = JSON.parse(localStorage.getItem("goods"));
          // el.checked = false;
        }
        el.checked = false;
      });

      console.log(arr0);
      this.changeDelete(arr0);
      this.goodsList = JSON.parse(localStorage.getItem("goods"));
      this.$emit("changeTotal", this.totalPrice, this.totalNum);
    },
    ...mapMutations(["changeDelete"])
  },
  mounted() {
    if (localStorage.goods) {
      this.goodsList = JSON.parse(localStorage.getItem("goods"));
    }
  },
  computed: {
    // ...mapState(["goodsList"])
    //计算总价格
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.checkedList.length; i++) {
        const index = this.checkedList[i];
        const item = this.goodsList[index];
        if (item) {
          total += parseInt(item.price) * parseInt(item.num);
        } else {
          continue;
        }
      }
      return total;
    },
    //计算总数量
    totalNum() {
      let num = 0;
      for (let i = 0; i < this.checkedList.length; i++) {
        const index = this.checkedList[i];
        const item = this.goodsList[index];
        if (item) {
          num += parseInt(item.num);
        } else {
          continue;
        }
      }
      return num;
    }
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
    border-bottom: 1px solid #eee;
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
      border-bottom: 1px solid #eee;
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
        font-size: 28px;
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


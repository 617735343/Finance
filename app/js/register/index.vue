<template>
  <section :class="$style.content">
    <div :class="$style.header">
      <router-link to="/raise" tag="i" class="iconfont">&#xe625;</router-link>
      <router-link to="/login" tag="span">点击登录</router-link>
    </div>
    <h4>用户注册</h4>
    <div :class="$style.box">
      <label :class="$style.title" for>
        <img src="https://www.baicaif.com/V/home/Wang2/style/images/reg-1.png" alt>
      </label>
      <input :class="$style.num" type="text" placeholder="请输入要注册的用户名" v-model="username">
    </div>
    <div :class="$style.box">
      <label :class="$style.title" for>
        <img src="https://www.baicaif.com/V/home/Wang2/style/images/reg-4.png" alt>
      </label>
      <input :class="$style.num" type="number" placeholder="请输入要注册的密码" v-model="password">
    </div>
    <div :class="$style.box">
      <label :class="$style.title" for>
        <img src="https://www.baicaif.com/V/home/Wang2/style/images/reg-4.png" alt>
      </label>
      <input :class="$style.num" type="number" placeholder="请重新输入要注册的密码" v-model="passworder">
    </div>
    <button @click="handleRegister()">注册</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passworder: "",
      localList: [],
      localObject: {
        id: 0,
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleRegister() {
      if (this.password != "" && this.username != "" && this.passworder != "") {
        if (this.password == this.passworder) {
          this.localObject.id = this.localObject.id + 1;
          this.localObject.username = this.username;
          this.localObject.password = this.password;
          this.localList.push(this.localObject);
          const locals = JSON.stringify(this.localList);
          //   console.log(this.localList[this.localObject.id-1].username);
          if (JSON.parse(localStorage.getItem(
              this.localList[this.localObject.id - 1].username
            ))
          ) {
            alert("用户名已被注册");
          } else {
            localStorage.setItem(
              this.localList[this.localObject.id - 1].username,
              locals
            );
            alert("注册成功");
            this.username = "";
            this.password = "";
            this.passworder = "";
            this.$router.push('./login');
          }
        } else {
          alert("输入的密码不一致");
        }
      } else {
        alert("请输入用户名和密码");
      }
    }
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.content {
  text-align: center;
  .header {
    @include flex(row);
    justify-content: space-between;
    background: #fff;
    height: 80px;
    line-height: 80px;
    i {
      width: 10%;
      text-align: center;
      font-size: 30px;
    }
    span {
      font-size: 30px;
      color: #ef7d00;
      padding-right: 15px;
    }
  }
  h4 {
    width: 100%;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 40px;
    color: #666;
  }
  .box {
    @include flex(row);
    justify-content: space-between;
    padding: 0 25px;
    margin: 50px 0;
    height: 80px;
    box-sizing: border-box;
    .title {
      width: 10%;
      font-size: 0;
      text-align: center;
      position: relative;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
    .num {
      width: 85%;
      overflow: hidden;
      color: #888;
      line-height: 80px;
      font-size: 24px;
      border: 0;
      border-radius: 20px;
      padding-left: 20px;
      // background-color: rgb(243, 243, 243);
    }
    .left {
      width: 30%;
      font-size: 28px;
      line-height: 80px;
      input {
        width: 30px;
        height: 30px;
      }
    }
    .right {
      width: 45%;
      font-size: 28px;
      line-height: 80px;
      em {
        color: #ef7d00;
      }
    }
  }
  button {
    width: 90%;
    height: 80px;
    text-align: center;
    background: #ef7d00;
    color: #fff;
    font-size: 35px;
    line-height: 80px;
    border: 0;
    border-radius: 10px;
  }
}
</style>
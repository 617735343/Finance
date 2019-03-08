<template>
  <div :class="$style.header">
    <router-link to="/login" :class="$style.left">
      <span ref="users">
        <em>注册</em>&nbsp;|&nbsp;
        <em>登录</em>
      </span>
    </router-link>

    <btn :class="$style.btnDownload">APP下载</btn>
  </div>
</template>

<script>
import btn from "../core/btn.vue";
export default {
  data() {
    return {
      localUsernames: ""
    };
  },
  props: {
    localusername: String
  },
  components: {
    btn
  },
  mounted() {
    this.localUsernames = localStorage.getItem("username");
  },
  watch: {
    localUsernames() {
      //   console.log(this.$refs.user);
      //   console.log(1);
      if (this.localUsernames != "未登录") {
        this.$refs.users.innerHTML = this.localUsernames + ",欢迎你";
      } else {
        this.$refs.users.innerHTML = `<em>注册</em>&nbsp;|&nbsp;
        <em>登录</em>`;
      }
    },
    localusername() {
      if (this.localusername != "未登录") {
        this.$refs.users.innerHTML = this.localUsernames + ",欢迎你";
      } else {
        this.$refs.users.innerHTML = `<em>注册</em>&nbsp;|&nbsp;
        <em>登录</em>`;
      }
    }
  }
};
</script>

<style lang="scss" module>
.header {
  color: #666;
  height: 100px;
  line-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 32px;
  background: #fff url(//www.baicaif.com/V/home/Wang2/style/images/logo.png)
    center center no-repeat;
  background-size: auto 45%;
  z-index: 100;
  .left {
    display: inline-block;
    font-size: 28px;
    height: 30px;
    line-height: 30px;
    margin: 17px 0 0 18px;
    text-decoration: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 166px;
    span {
      width: 30px;
      color: #666;
    }
  }
  .btnDownload {
    float: right;
    font-size: 24px;
    border-width: 0;
    height: 56px;
    line-height: 56px;
    min-width: 120px;
    padding: 0;
    border-radius: 4px;
    margin: 28px 24px 0 0;
  }
}
</style>

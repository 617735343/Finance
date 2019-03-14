<template>
  <Panel title="用户信息" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.user">
        <img
          src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png"
          alt
        >
        <span :class="$style.name">{{this.username}}</span>
        <span :class="$style.out" @click="handleOut" v-if="show">退出登录</span>
        <router-link tag="span" to="/login" :class="$style.out" v-if="!show">登录账号</router-link>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      show: false,
      localUsername: ""
    };
  },
  components: {
    Panel
  },
  computed: {
    ...mapState(["username"])
  },
  methods: {
    handleOut() {
      localStorage.removeItem("username");
      this.changeUsername("未登录");
      this.localUsername = localStorage.getItem("username");
      alert("已退出登录");
      this.$emit("change", this.localUsername);
      localStorage.removeItem("goods");
    },
    ...mapActions(["changeUsername"])
  },
  mounted() {
    if (localStorage.username) {
      this.localUsername = localStorage.getItem("username");
    }else{
        this.localUsername = '未登录';
    }
  },
  watch: {
    localUsername() {
      if (this.localUsername == "未登录") {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    @include flex;
    margin-top: 100px;
    .user {
      @include flex(row);
      justify-content: space-around;
      height: 140px;
      line-height: 140px;
      img {
        width: 100px;
        height: 100px;
        margin-top: 20px;
        padding-left: 25px;
        padding-right: 30px;
      }
      span {
        font-size: 32px;
      }
      .name {
        flex: 2;
        color: #666;
      }
      .out {
        padding-right: 25px;
        color: #ef7d00;
      }
    }
  }
}
</style>

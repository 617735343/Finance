<template>
  <div>
    <heador :show="show"></heador>
    <show></show>
    <explain></explain>
    <story></story>
    <report></report>
    <navbor :show="show"></navbor>
  </div>
</template>

<script>
import Heador from "./rheader.vue";
import Show from "./show.vue";
import Explain from "./explain.vue";
import Story from "./story.vue";
import Report from "./report.vue";
import Navbor from "./rnavbar.vue";
import axios from "axios";
export default {
  components: {
    Heador,
    Show,
    Explain,
    Story,
    Report,
    Navbor
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    getRaiseChainInfo() {
      console.log(axios);
    
      axios.get("/api/detail.json").then(this.handleGetRaiseChainInfo);
      //   params: {
      //     id: this.$route.params.id
      //   }
    },
    handleGetRaiseChainInfo(res) {
      console.log(res.data);
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const clintHeight =
        window.innerHeight / 3 || document.documentElement.clientHeight / 3;
      if (scrollTop > clintHeight) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
    this.getRaiseChainInfo();
  }
};
</script>

<style lang="scss" module>
</style>

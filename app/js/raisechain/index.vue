<template>
  <div>
    <heador :show="show"></heador>
    <show :showList="showList"></show>
    <explain :explainList="explainList"></explain>
    <story :storyList="storyList"></story>
    <report :reportList="reportList"></report>
    <navbor :show="show" :navborList="navborList"></navbor>
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
      show: false,
      showList: {},
      explainList:{},
      storyList:[],
      reportList:{},
      navborList:{}
    };
  },
  methods: {
    getRaiseChainInfo() {
      console.log(axios);

      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetRaiseChainInfo);
    },
    handleGetRaiseChainInfo(res) {
      const data = res.data;
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.$route.params.id) {
          console.log(data[i]);
          this.showList = data[i].data.showList;
          this.explainList = data[i].data.explainList;
          this.storyList = data[i].data.storyList;
          this.reportList = data[i].data.reportList;
          this.navborList = data[i].data.navborList;
        }
      }
    }
  },
  mounted() {
    this.getRaiseChainInfo();
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
  }
};
</script>

<style lang="scss" module>
</style>

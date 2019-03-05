<template>
  <div>
    <heador :show="show"></heador>
    <show></show>
    <explain></explain>
    <story></story>
    <navbor :show='show'></navbor>
  </div>
</template>

<script>
import Heador from './rheader.vue'
import Show from "./show.vue";
import Explain from "./explain.vue";
import Story from './story.vue'
import Navbor from './rnavbar.vue'
export default {
  components: {
    Heador,
    Show,
    Explain,
    Story,
    Navbor
  },
  data (){
    return{
      show:false
    }
  },
  mounted(){
    window.addEventListener('scroll',()=>{
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const clintHeight = window.innerHeight / 3 || document.documentElement.clientHeight / 3;
        if (scrollTop > clintHeight) {
            this.show = true;
        } else {
            this.show = false;
        }
    })
  }
};
</script>

<style lang="scss" module>
</style>

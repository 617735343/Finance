<template>
  <div>
    <heador></heador>
    <list @changeTotal='changeTotal'></list>
    <navbor :total="total" :num="num"></navbor>
  </div>
</template>

<script>
import Heador from "./gheader.vue";
import List from "./list.vue";
import Navbor from './gnavbar.vue'
export default {
  components: {
    Heador,
    List,
    Navbor
  },
  data() {
    return {
      total: 0,
      num: 0,
    }
  },
  methods: {
    changeTotal(total,num){
      this.total = total;
      this.num = num;
    }
  }
};
</script>

<style>
</style>

<template>
  <div>
    <heador :localusername="localusername"></heador>
    <user @change="handleLocalUserName"></user>
    <list></list>
    <navbor></navbor>
  </div>
</template>

<script>
import Heador from "../public/header.vue";
import Navbor from "../public/navbar.vue";
import User from './user.vue'
import List from './list.vue'
export default {
  components: {
    Heador,
    Navbor,
    User,
    List
  },
  data() {
      return{
        localusername : ''
    }
      
  },
  methods: {
      handleLocalUserName(localusername){
          this.localusername = localusername;
      }
  }
};
</script>

<style>
</style>

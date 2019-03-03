<template>
    <div>
        <heador></heador>
        <slider></slider>
        <ada></ada>
        <money></money>
        <adb></adb>
        <finance></finance>
        <footor cname="nfooter"></footor>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from "./mslider.vue"
import Ada from './ada.vue'
import Money from './money.vue'
import Adb from './adb.vue'
import Finance from './finance.vue'
import Footor from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
export default {
  components: {
    Heador,
    Slider,
    Ada,
    Money,
    Adb,
    Finance,
    Footor,
    NavBar,
  }
}
</script>

<style lang="scss">
  .nfooter{
    ul{
      li:first-child{
        display: none;
      }
    }
  }

</style>
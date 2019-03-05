<template>
    <div>
        <heador></heador>
        <slider></slider>
        <daily></daily>
        <In></In>
        <more></more>
        <footor cname="nfooter"></footor>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from "./rslider.vue"
import Daily  from './daily.vue'
import In from './in.vue'
import More from './more.vue'
import Footor from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
export default {
  components: {
    Heador,
    Slider,
    Daily,
    In,
    More,
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
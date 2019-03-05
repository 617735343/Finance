<template>
    <div>
        <heador></heador>
        <slider></slider>
        <finance></finance>
        <service></service>
        <footor></footor>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from "./islider.vue"
import Finance from './finance.vue'
import Service from './service.vue'
import Footor from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
export default {
  components: {
    Heador,
    Slider,
    Finance,
    Service,
    Footor,
    NavBar,
  }
}
</script>

<style lang="scss">
  

</style>

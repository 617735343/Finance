<template>
    <div>
        <heador></heador>
        <slider></slider>
        <novice></novice>
        <borrow></borrow>
        <meney></meney>
        <product></product>
        <lift></lift>
        <footor></footor>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from "./hslider.vue"
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Meney from "./money.vue"
import Product from "./product.vue"
import Lift from './life.vue'
import Footor from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
export default {
  components: {
    Heador,
    Slider,
    Novice,
    Borrow,
    Meney,
    Product,
    Lift,
    Footor,
    NavBar,
  }
}
</script>

<style lang="scss" module>
 

</style>

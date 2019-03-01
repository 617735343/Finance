<template>
    <div>
        <heador></heador>
        <slider></slider>
        <novice></novice>
        <borrow></borrow>
        <meney></meney>
        <product></product>
        <lift></lift>
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
export default {
  components: {
    Heador,
    Slider,
    Novice,
    Borrow,
    Meney,
    Product,
    Lift
  }
}
</script>

<style lang="scss" module>
 

</style>

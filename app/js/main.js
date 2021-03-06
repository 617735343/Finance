import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "../css/iconfont.css"
import store from "./store"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */

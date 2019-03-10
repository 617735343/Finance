import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import Raise from "../raise/index.vue"
import RaiseChain from "../raisechain/index.vue"
import Me from "../me/index.vue"
import Login from "../login/index.vue"
import Register from "../register/index.vue"
import Goods from "../goods/index.vue"
import "../../css/reset.scss"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        }, {
            path: "/money",
            name: "money",
            component: Money,
        }, {
            path: "/ious",
            name: "ious",
            component: Ious,
        }, {
            path: "/raise",
            name: "raise",
            component: Raise,
        }, {
            path: "/raisechain/:id",
            name: "raisechain",
            component: RaiseChain,
        }, {
            path: "/me",
            name: "me",
            component: Me,
        }, {
            path: "/login",
            name: "login",
            component: Login,
        }, {
            path: "/register",
            name: "register",
            component: Register,
        }, {
            path: "/goods",
            name: "goods",
            component: Goods,
        },
    ],
    //每次做路由切换的时候，我都让切换的页面初始值x轴为0，y轴为0
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

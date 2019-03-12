import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    state: state,
    actions: {
        changeUsername(ctx,username) {
            ctx.commit('changeUsername',username);
        },
        changeGoods(ctx,obj){
            ctx.commit('changeGoods',obj);
        }
    },
    mutations: {
        changeUsername(state,username){
            state.username = username;
            localStorage.username = username;
        },
        changeGoods(state,obj){
            // state.goodsObject.img = obj.img;
            // state.goodsObject.title = obj.title;
            // state.goodsObject.price = obj.price;
            state.goodsList.push(obj);
            const list = JSON.stringify(state.goodsList);
            // if(localStorage.goods){
            //     let lists = JSON.parse(localStorage.getItem("goods"));
            //     lists.push(list);
            //     const strings = JSON.stringify(lists);
            //     localStorage.setItem("goods",strings);
            // }else{
                localStorage.setItem("goods",list);
            // }
        },
        changeDelete(state,obj){
            console.log(obj) //[1,3]
           
            console.log(state.goodsList)
            for(let i=obj.length-1;i>=0;i--){
                    state.goodsList.splice(obj[i],1);
                    const list = JSON.stringify(state.goodsList);
                    localStorage.setItem('goods',list);
            }
        }
    }
})
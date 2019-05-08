import Vue from 'vue'
import Vuex from 'vuex'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

//定义一个容器
let store=new Vuex.Store({
modules:{
   tagsView
}
})
export default store
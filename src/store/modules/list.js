import {getSelectList} from '@/api/list'
export default{
    state:{
        title:'',
        listDate:[],
    },
    mutations:{
        changeTitle(state,payload){
            state.title=payload.title
        },
        getList(state,list){
            state.listDate=list
        }
    },
    actions:{
        getTitleList({commit}){
            getSelectList().then(res=>{
                console.log(res.data)
                commit('getList',res.data)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
}
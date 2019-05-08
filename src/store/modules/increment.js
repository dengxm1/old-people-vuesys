export default{
    state:{
            count:0,  
    },
    getters:{
        getCount(state){
            return state.count>=20?20:state.count
        }
     },
     mutations:{
         addIncrement(state,n){
             state.count+=n;
         },
         subIncrement(state,payload){
             state.count>0?state.count-=payload.del:0
         }
     },
     actions:{
         addAction({commit,dispatch}){
             // console.log(context)
             setTimeout(()=>{
              commit("addIncrement",5)
              dispatch("textAction",{text:"测试"})
             },1000)
         },
         textAction(context,obj){
             console.log(obj)
         },
      
     },
}
<template>
<div>
    <h2>简易加法计算</h2>
    <div>
        <input type="button" value="-" @click="subHandle({del:5})">
        <span>{{num}}</span>
        <input type="button" value="+" @click="addHandle">
    </div>
    <p>{{num2}}</p>
</div>
</template>
<script>
//vuex的辅助函数
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    // computed:{
    //     num(){
    //         return this.$store.state.count
    //     },
    //     num2(){
    //         return this.$store.getters.getCount
    //     }
    // },
    // computed:mapState({
    //     // num:state=>state.count
    //     num:"count"
    // }),
    // computed:mapState(['count']),
    computed:{
        abc(){
            return 123
        },
        // ...mapState({
        //     num:'count'
        // }),
        num(){
         return  this.$store.state.increment.count
        },
        ...mapGetters({
            num2:'getCount'
        })
    },
    methods:{
    //   addHandle(){
    //       //改变状态，提交mutation addIncrement
    //     //   this.$store.commit("addIncrement",5)
    //     //触发一个action
    //      this.$store.dispatch("addAction")
    //   },
    ...mapActions({
         addHandle:'addAction'
    }),
    //   subHandle(){
    //     //   this.$store.commit("subIncrement",{n:5})
    //     this.$store.commit({
    //         type:"subIncrement",
    //         del:5
    //     })
    //   }
    ...mapMutations({
        subHandle:'subIncrement'
    })
    }
}
</script>

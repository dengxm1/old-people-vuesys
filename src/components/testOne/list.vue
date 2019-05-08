<template>
    <ul class="list">
     <li v-for="item in data" :key="item.title" @click=getTitleHandle(item.title)>{{item.title}}</li>
    </ul>
</template>
<script>
export default {
   computed:{
     data(){
      return this.$store.state.list.listDate  
     }
   },
   methods: {  
       getTitleHandle(title){
        //    this.$emit("changeTitle",title)
     
        this.$store.commit("changeTitle",{title})
       },
   },
   created(){
       this.$store.dispatch("getTitleList")
}
}
</script>


<template>
    <div>
        <input readonly='readonly' @click="showListHandle" :value="title">
        <input type="button" value="Go">
        <span></span>
    </div>
</template>
<script>
export default {
    props:['he'],
    computed: {
        initShow(){
            return this.he
        },
        title(){
            return this.$store.state.list.title
        }
        
    },
    methods: {
       showListHandle(){
           this.$emit("update:he",!this.initShow)
       } 
    },
}
</script>


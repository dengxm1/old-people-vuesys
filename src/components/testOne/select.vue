<template>
    <div>
        <select-input :he.sync="listShow"></select-input>
        <list v-show='listShow' @changeTitle="titleHandle"></list>
    </div>
</template>

<script>
import selectInput from './selectInput.vue'
import list from './list.vue'

// let listDate=[
//     {title:'javascript'},
//     {title:'html+css'},
//     {title:'jquery'},
//     {title:'react'},
//     {title:'nodejs'}
// ]
export default {
    data(){
        return{
             listShow:false,
             title:''
        
        }
    },
    methods: {
       titleHandle(title){
           this.title=title
        // console.log(title)
       } 
    },
    components: {
         selectInput,
         list  
    }
}
</script>

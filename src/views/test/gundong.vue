1,<template>
    <div>
        <div class="body-container" @scroll="scroll">
           <ul>
               <li style="height:200px;background:red"></li>
               <li style="height:200px;background:yellow"></li>
               <li style="height:200px;background:blue"></li>
               <li style="height:200px;background:green"></li>
               <li style="height:200px;background:pink"></li>
           </ul>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        scroll(e){
            console.log(e)
        }
    },
}
</script>

<style>
li{
    list-style-type: none;
}
li.one{
    background:rgb(39, 168, 104);
}
ul{
    background: #000;
    padding: 0;
}
.body-container{
width: 400px;
height: 1000px;
background: rgb(212, 74, 74);
overflow-y:scroll;
}
</style>

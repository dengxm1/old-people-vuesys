<template>
    <div>
        <div class="top"><ul>
            <li>
                <router-link to="/one">one</router-link>
            </li>
            <li><router-link to="/two">two</router-link></li>
            <li><router-link to="/three">three</router-link></li>          
            </ul></div>
            <router-view></router-view>
    </div>
</template>
<style>
.top{
    height: 100px;
    width: 100%;
    background: #000;
}
ul li{
    list-style: none;
    float: left;
}
li{
    margin-left: 50px;  
}
li a{
     color: aliceblue
}
</style>

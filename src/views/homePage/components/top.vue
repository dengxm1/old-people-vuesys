<template>
<div>
       <!-- 顶部固定条开始 -->
       
        <div class="header_wrap"></div>
             <!-- 系统登录 -->
            <div class="header_fixed" >  
                <div class="header_top clearfix">
                      <div class="w clearfix top">
                      <div class="fr">
                     <!-- <p><a href=""><span>幸福家养老管理平台</span></a></p> -->
                     <p><router-link to="/login"><span>幸福家养老管理平台</span></router-link></p>
                    </div>   
                      </div>                                                      
            <!-- 导航列表 -->
           <div class="nav"><div class="w clearfix">
               <img src="../../../assets/logo.png"><h2 class="fl">幸福家</h2>
                <div class="fl">
                   <ul class="clearfix">     
                       <li><router-link to="#shouye">首页</router-link> </li>               
                        <li><router-link to="#solution">解决方案</router-link></li>
                       <li><router-link to="#operateSystem">运营体系</router-link></li>
                       <li> <router-link to="#productFunction">产品功能</router-link></li>
                       <li><router-link to="#successCase">成功案例</router-link></li>
                       <li><router-link to="#aboutUs">关于我们</router-link> </li>                          
                   </ul>
                </div>
                <div class="fr top_tel"><h3>400-810-0083</h3></div>
                </div> 
                </div>            
                </div>       
               </div> 
                     

        <!-- 顶部固定条结束 -->
        <!-- 图片 -->
        <div class="banner"  id="shouye">
            <router-link to="/homePage" tag="a"><img src="../../../assets/1_2111011501.png"></router-link>
        <div class="banner_box">
           <p>免费预约演示，体验解决方案</p>
            <a class="tiyan_btn" href="">立即体验</a>
        </div>
        </div>
      
        <!-- 图片结束 -->
           <!-- 联系我们弹框开始 -->
        <!-- 联系我们弹框结束 -->
</div>
</template>
<script>
export default {
    
}
</script>
<style>
</style>

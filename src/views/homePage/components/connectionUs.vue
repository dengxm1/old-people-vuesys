<template>
    <div> 
     <div class="bg-dt" id="connectionUs">
        <!-- 联系我们 -->
        <div class="lx">
            <div class="w clearfix">
               <div class="fl">
                <span>联系我们</span>
                <i>售前工程师随时待命</i>
 <p>                                               
    北京华卫迪特健康科技有限公司<br>
咨询热线:<a href="tel:400-810-0083" style="color:#fff;"> 400-810-0083</a>&nbsp;&nbsp;&nbsp;<a href="tel:010-61252509" style="color:#fff;">010-61252509 </a><br>
公司邮箱: ejiatong@hwdt.com.cn<br>
公司传真:<a href="tel:010-61252521" style="color:#fff;"> 010-61252521</a><br>
邮政编码: 102609<br>
公司地址: 北京市大兴区中关村科技园区生物医药基地庆丰西路29号
</p>
</div>
<div class="fr">
  <span>官方微信公众号</span> 
  <img src="../../../assets/1-1Z1012043240-L.png" alt="">
            </div>
        </div>
          </div>
          <!-- 菜单底部 -->
            <div class="footer">
                <div class="w">
                    <h3 class="h4">导航栏目</h3>
                    <nav class="pc_nav">
                      <ul id="footer_nav">
                          <li><router-link :to="{path:'#shouye'}" class="tag">网站首页</router-link></li>
                          <li><router-link :to="{path:'#solution'}">解决方案</router-link></li>
                          <li><router-link :to="{path:'#operateSystem'}">运营体系</router-link></li>
                          <li><router-link :to="{path:'#productFunction'}">产品功能</router-link></li>
                          <li><router-link :to="{path:'#successCase'}">成功案例</router-link></li>
                          <li><router-link :to="{path:'#aboutUs'}">关于我们</router-link></li>
                      </ul>  
                    </nav>
                    <p style="text-align: center;display: block;">北京华卫迪特健康科技有限公司 
          <a href="http://www.miitbeian.gov.cn" style="color:#fff;">版权所有 Copyright © 2014-2020 京ICP备13023001号-4</a></p>
                </div>
            </div>
             <ul class="app_nav">
                 <li>
                     <router-link to="" tag="a">首页</router-link>
                 </li>
                 <li>
                     <router-link to="" tag="a">方案</router-link>
                 </li>
                 <li>
                     <router-link to="" tag="a">运营</router-link>
                 </li>
                 <li>
                     <router-link to="" tag="a">产品</router-link>
                 </li>
                 <li>
                     <router-link to="" tag="a">案例</router-link>
                 </li>
                 <li>
                     <router-link to="" tag="a">我们</router-link>
                 </li>
             </ul>
        </div>
        <a href="#homePage"  class="gotop"><img src="../../../assets/gotop.png"></a>
     </div>

  
</template>
<script>
export default {
    
}
</script>
<style>
.clearfix:after{
    display: block;
    content:'';
    clear: both
}
.clearfix{
    zoom: 1;
}
.bg-dt{
    width: 100%;
}
.w{
    width: 980px;
    margin-left: auto;
    margin-right: auto;
}
.fl{
    float: left;
}

.bg-dt .lx{
    padding-top: 70px;
    width: 100%;
    height: 462px;
    background-size: 100% 100%;
    background:#000 url("../../../assets/dt-img.png") center repeat-y;
}
.bg-dt .lx .fl span{
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    padding-right: 35px;
    background: url("../../../assets/img6.png") right center no-repeat;
}
.bg-dt .lx .fl i{
    color: #fff;
    font-size: 38px;
    display: block;
    font-weight: bold;
}
i{
    font-style: normal
}
.bg-dt .lx .fl p{
    color: #fff;
    font-size: 16px;
    line-height: 26px;
}
.fr{
    float: right;
}
.bg-dt .lx .fr{
  height: 303px;
  border-left: 1px solid #fff;
  width: 395px;
  text-align: center;
}
.bg-dt .lx .fr span{
   color: #fff;
   font-weight: bold;
   font-size: 38px; 
}
.bg-dt .lx .fr img{
    display: block;
    margin: 0 auto;
    width: 210px;
    margin-top: 40px;
}
.bg-dt .footer{
    height: 200px;
    background: url("../../../assets/dt-img1.png") center top no-repeat;
}
.bg-dt .footer .w h3{
    color: #fff;
    font-size: 24px;
    padding-top: 30px;
    font-weight: 400;
}
.bg-dt .footer .w ul{
    margin-top: 10px;
    height: 60px;
    border-bottom: 1px solid #fff;
}
.bg-dt .footer .w ul li{
    float:left;
    width: 150px;
}
.bg-dt .footer .w ul li a{
color: #fff;
font-size: 18px;
line-height: 60px;
font-weight: 400;

}
.bg-dt .footer p{
    color: #fff;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 15px;
}
.app_nav{
    display: none
}
.gotop{
    position: fixed;
    right: 3px;
    bottom: 50%;
    width: 50px;
    height: 50px;
    z-index: 99999;
}
</style>


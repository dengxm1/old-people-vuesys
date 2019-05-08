<template>
    <div>
            <!-- 成功案例开始 -->
    <div class="blue_bg case_top scroll_num" id="successCase">
        <div class="banner_box case_box">
            <p>免费预约演示，体验解决方案</p>
             <el-button class="tiyan" @click="dialogVisible=true">立即体验</el-button>
        </div>
         <div class="fw2 w2 pingjia_content case_tit_top">
            <p class="title_bg">
                "CASES"
              <span class="title">成功案例</span>  
                </p> 
                <p class="case_info">医家通深耕养老行业，凭独创居家养老3级火箭运营系统，为养老机构提供居家养老、机构养老、旅居养老、健康管理、连锁养老、政府监管等服务。已帮助部分用户获得政府项目补贴若干。</p>
               <h6 class="pingjia">客户评价</h6>
         <ul class="clearfix case pingjia_spa">
    	<li class="case_li">
        	<div class="pingjia_wrap">
            <div class="pingjia_box">
                    <p class="pingjia_tit">关于平台功能</p>
                    <p class="pingjia_con">"他们平台功能实用全面，符合国家对居家养老的功能要求，比如呼叫中心、会员体系、政府购买项目等模块，在申请项目的过程中为我们提供了很大的帮助！"<span>——湖南某居家养老中心</span></p>
                </div>
            </div>
        </li>
    	<li class="case_li">
        	<div class="pingjia_wrap">
            <div class="pingjia_box">
                    <p class="pingjia_tit">关于展示效果</p>
                    <p class="pingjia_con deep">"医家通的平台展示效果非常高大上，领导来视察时印象很深刻，在我们3线城市里还算比较突出的。"<span>——河南某养老公寓</span></p>
                </div>
            </div>
        </li>
    	<li class="case_li spa_sel">
        	<div class="pingjia_wrap">
            <div class="pingjia_box">
                    <p class="pingjia_tit">关于3级火箭运营体系</p>
                    <p class="pingjia_con">"政府给了一块场地做居家养老，但不知道怎么做。医家通的3级火箭运营体系简单实用，老人非常受用！花了一份钱，不仅买了软件，还能得到养老咨询服务，值了！医家通在居家养老这还是很有经验的。"<span>——安徽某养老服务公司</span></p>
                </div>
            </div>
        </li>
    	<li class="case_li">
        	<div class="pingjia_wrap">
            <div class="pingjia_box">
                    <p class="pingjia_tit">关于项目申报</p>
                    <p class="pingjia_con deep">"我之前在山东做家政很多年了，这几年政府把养老业务给了我们。后来找到医家通的养老系统，领导很认可，从而打通了民政系统，不仅让我们成功涉及了养老业务，还凭此获得了很多政府项目支持。"<span>——山东某家政公司</span></p>
                </div>
            </div>
        </li>
    	<li class="case_li">
        	<div class="pingjia_wrap">
            <div class="pingjia_box">
                    <p class="pingjia_tit">关于售后</p>
                    <p class="pingjia_con">"当时购买养老平台时时间紧迫，医家通的技术团队克服困难紧急部署，保证了我们的正常运营。后期遇到操作问题，他们的售后都耐心回复，还是很让人放心的！"<span>——江苏某社区便民中心</span></p>
                </div>
            </div>
        </li>
    </ul>
    <h6 class="pingjia huoban_tit">合作伙伴</h6>
         
    <el-dialog
  :visible.sync="dialogVisible"
  width="30%">
  <p class="miss">别告诉他，我很想他</p>
</el-dialog>

    <div class="huoban">   
        <div class="scrolllist" id="s1">
        	<a class="abtn aleft agrayleft" title="左移" id="left"></a>
            <div class="imglist_w">
                <ul class="imglist" style="left: 0px;">           
                    <li>
                <img src="../../../assets/3.jpg" width="88" height="31" border="0">
                    </li>            
                    <li>
                <img src="../../../assets/1.jpg" width="88" height="31" border="0">
                    </li>           
                    <li>
                <img src="../../../assets/2.jpg" width="88" height="31" border="0">
                    </li>            
                    <li>
                <img src="../../../assets/4.jpg" width="88" height="31" border="0">
                    </li>           
                    <li>
               <img src="../../../assets/5.jpg" width="88" height="31" border="0">
                    </li>           
                    <li>
                <img src="../../../assets/1901021515264180.png" width="88" height="31" border="0"> 
                    </li>           
                    <li>
                <img src="../../../assets/1901021500374897.png" width="88" height="31" border="0">
                    </li>            
                    <li>
                <img src="../../../assets/1901021501139197.png" width="88" height="31" border="0"> 
                    </li>           
                    <li>
                <img src="../../../assets/1901021501367076.png" width="88" height="31" border="0"> 
                    </li>           
                    <li>
                <img src="../../../assets/1901021502519943.png" width="88" height="31" border="0">
                    </li>            
                    <li>
                <img src="../../../assets/1901021503103825.png" width="88" height="31" border="0"> 
                    </li>           
                    <li>
                <img src="../../../assets/1901021503429530.png" width="88" height="31" border="0">
                    </li>           
                    <li>
               <img src="../../../assets/1901021504045409.png" width="88" height="31" border="0"> 
                    </li>            
                    <li>
                <img src="../../../assets/1901021504227026.png" width="88" height="31" border="0"> 
                    </li>           
                    <li>
                <img src="../../../assets/1901021505102230.png" width="88" height="31" border="0"> 
                    </li>           
                    <li>
                <img src="../../../assets/1901021505375706.png" width="88" height="31" border="0"> 
                    </li>            
                    <li>
                <img src="../../../assets/1901021505598098.png" width="88" height="31" border="0"> 
                    </li>
                </ul>
            </div>
            <a class="abtn aright" title="右移"></a>
        </div>
    </div>
         </div>
    </div>
        <!-- 成功案列结束 -->
    </div>
</template>
<script>
export default {
     data:() => ({
         dialogVisible:false,
         imageList:[
             {image:''}
         ]
     })  
}   
$(document).ready(function(){
var ul = $(".imglist");
var li=$("li")
var sl = 0;
var oneWidth = ul.find("li").eq(0).width();
$(".aright").click(function(){
    if(sl<11){
        if(sl<9){
          sl=sl+3;
        }        
     else{
  sl=sl+2
     }
 $(".imglist").css("left", -sl * oneWidth); 
 } 
})
$(".aleft").click(function(){  
   if(sl>0){
  if(sl>2){
          sl=sl-3
   }else{
    sl=sl-2
   }
       $(".imglist").css("left", -sl * oneWidth);
   }  
})

});
</script>

<style>
  /* 合作伙伴 */
.huoban{
height: 150px;
margin-top: 10px;
}
.huoban_tit{
    margin-top: 55px;
}
.huoban .scrolllist{
    height: 80px;
    margin: 0 auto;
}
.huoban a.abtn{
    display: block;
    height: 80px;
    width: 38px;
    overflow: hidden;
}
.huoban a.aleft{
    float: left;
}
.huoban a.agrayleft{
    cursor: default;
    background: #fff url("../../../assets/jiantou_l.png") no-repeat center center;
}
.huoban a.aright{
    float: right;
    background: #000;
    background: #fff url("../../../assets/jiantou_r.png") no-repeat center center;
}
.huoban .scrolllist .imglist_w{
    width: 900px;
    height: 80px;
    overflow: hidden;
    float: left;
    position: relative;
}
.huoban .scrolllist .imglist_w ul{
    width: 20000px;
    position: absolute;
    top: 0;
}
.huoban .scrolllist .imglist_w li{
    width: 150px;
    float: left;
}
.huoban .scrolllist .imglist_w li img{
    width: 148px;
    height: 78px;
    border: 1px solid #fff; 
}
.huoban .scrolllist .imglist_w li img:hover{
    border: 1px solid rgb(46, 167, 223); 
}
img{
    vertical-align: top
}

</style>

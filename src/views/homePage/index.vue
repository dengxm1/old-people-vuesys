<template>
    <div class="home-container">
       
       <top></top>
        <operate-system></operate-system>
        <product-function></product-function>
        <solution></solution>
        <success-case></success-case>
        <connection-us></connection-us>
        </div>
</template>
<script>
import TWEEN from "tween.js"
export default {
   components:{
       top:()=>import("./components/top"),
       operateSystem:()=>import("./components/operateSystem"),
       productFunction:()=>import("./components/productFunction"),
       solution:()=>import("./components/solution"),
       successCase:()=>import("./components/successCase"),
       connectionUs:()=>import("./components/connectionUs.vue")
   },
   beforeRouteEnter(to,from,next){//路由进来的时候
            next((vm)=>{
                vm.animate(to) 
           })
        },
        beforeRouteUpdate(to,from,next){//更新路由的时候,也可以用watch来监听route
            // console.log(to.hash)
            this.animate(to)
            next()
        },
        methods:{
            animate(to){
            //     function animateFunc(time){ //如果time没有被指定，将使用当前时间。
            //         requestAnimationFrame(animateFunc)
            //        TWEEN.update(time)
            //     }
                if(to.hash){
                    var el = document.getElementById(to.hash.slice(1))
                    var doc = document.getElementsByClassName('home-container')[0]
                    if(el){
                       console.log(el.offsetTop)
                        // animateFunc()
                        // new TWEEN.Tween({
                        //     number:doc.scrollTop //容器的起始位置
                        // }).to({
                        //     number:el.offsetTop //每个区域的位置
                        // },500).onUpdate(function(){ //这里不能使用箭头函数，只能使用fn(){},由于this指向问题，this指向当前的new TWEEN.Tween实例
                        //     doc.scrollTop = this.number.toFixed(0)
                        //     // console.log(this.number.toFixed(0))
                        // }).start()
                    }
                }
            }
   },
}

</script>
<style>
.miss{
   margin-top: 30px;
   height: 200px;
   text-align: left;
   line-height: 200px;
   text-indent: 2em;
   font:400 normal 50px/100px "微软雅黑";
   color: hsl(197, 74%, 47%)
   
}
/* 顶部固定条 */
.clearfix:after{
display:block;
content:'';
clear:both
}
.clearfix{
    zoom:1
}
 .header_wrap{
    height: 111px;
}
.header_fixed{
    height: 111px;
    width: 100%; 
    position:fixed;
    left: 0;
    top: 0;
    z-index: 999;
}
.header_top{
    height: 40px;
    background: #f2f2f2;
}
.fr{
    float: right;  
}
.w{
    width: 980px;
    margin-left: auto;
   margin-right: auto;
}
.header_top .fr p{
    display:block;
    position: relative;
    z-index: 999;
    text-align: right;
    margin-top: 10px;
     margin-bottom: 8px;
   
}
.header_top .fr p span{ 
    position:relative;
    color: #1fa0d3;
    font-size:15px;
    padding-left: 40px;
    background: url("../../assets/img1.png") left center no-repeat;
}
.header_top .fr p span:hover{
    color:rgb(100, 94, 94)
}
.nav{
   height: 71px; 
   position:relative;
   background: #fff;
   z-index: 999;
   width: 100%;
   box-shadow: 0px 2px 2px #eee;
}

.nav .w img{
   display: block;
   float: left;
   margin-top: 6px;
}
.fl{
    float: left;
}
h2.fl{
    width: 85px;
    height: 71px;
    margin: 0 auto;
    line-height: 71px;      
}
div.fl{
    width: 600px 70px;
}
.nav .w h2{
    color: rgb(32,135,183);
}
.nav .fl ul{
    margin-top: 5px;
}
.nav .fl ul li{
    float: left;   
    width:90px;
    position:relative;
    margin-left: 10px;
    height: 65px;
    text-align: center;
}
.nav .fl ul li.sel{
    border-bottom:2px solid #22A0D4;
}
.nav .fl ul li a{
   color:#22A0D4;
   font-size:18px;
   line-height:65px;
   font-weight:400;
}
.top_tel{
    width: 160px;
    height: 63px;
    text-align: left;
    background: url("../../assets/nav_tel.png") no-repeat left center;
    padding-left: 10px;
    margin-top: 5px;
}
.top_tel h3{
    margin: 0;
    height: 60px;
    line-height: 60px;
    display: block;
    font-size: 20px;
    color: #22A0D4;
    text-align:right;
} 
/* 顶部固定条 */
/* 图片 */
 .banner{
width: 100%;
overflow: hidden;
position: relative;
}
.banner img{
    position:relative;
    left: 50%;
    width: 1920px;
    margin-left: -960px;
}
.banner_box{
height: 180px;
border: 1px solid #eee;
position: absolute;
left:50%;
top: 400px;
width:380px;
margin-left: -190px;
background: #fff;
border-radius: 8px;
box-shadow: 0px 0px 8px #eee;
}
.banner_box p{
    text-align: center;
    height: 90px;
    margin-top: 10px;
    line-height: 90px;
    color:#666;
    font-size: 20px;
    font-weight: 500px;
}
.banner_box a{
    display: block;
    width: 200px;
    margin: 0 auto;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: #fff;
    font-size: 22px;
    border-radius: 17px;
    background: #fa6a0b;
    font-weight: 400;

} 
/* 解决方案 */
.fw2{
    padding-top: 40px;
    margin-top:  20px;
    position: relative;

}
.w2{
  width: 980px;
  margin-left: auto;
  margin-right: auto;  
}
.fw2 .title_bg{
    position: relative;
    margin: 0 auto;
    width: 300px;
    color: #F2F2F2;
    font-size: 58px;
    line-height: 80px;
    z-index: 9;
}
.fw2 .title_bg .title{
    display: block;
    position: absolute;
    top: 27px;
    left: 0;
    width: 300px;
    height: 40px;
    line-height: 40px;
    color: #333;
    font-size: 28px;
    text-align: center;
}
.fw2 .ul{
   width: 100%;
   margin-top: 25px;
}
.fw2 ul.fangan li{
text-align: center;
width: 241px;
height: 266px;
float: left;
margin: 2px;
}
.fw2 ul.fangan li.fangan_bg1{
    background: url("../../assets/fangan_bg1.png") no-repeat center center;
}
.fw2 ul.fangan li.fangan_bg2{
    background: url("../../assets/fangan_bg2.png") no-repeat center center;
}
.fw2 ul.fangan li.fangan_bg3{
    background: url("../../assets/fangan_bg3.png") no-repeat center center;
}
.fw2 ul.fangan li.fangan_bg4{
    background: url("../../assets/fangan_bg4.png") no-repeat center center;
}
.fw2 ul.fangan li h6{
display: block;
margin-left: 70px;
margin-top: 30px;
line-height: 20px;
font-size: 14px;
font-weight: 600;
text-align: left;
}
.fw2 ul.fangan li p{
   color: #333;
   font-size: 16px;
   line-height: 40px;
   display: block;
   margin-top: 50px; 
}
.fw2 ul.fangan li span{
    color: #FA6A0B;
    font-size: 18px;
    font-weight: bold;
}
/* 运营体系 */
.blue_bg{
    background: #F8FBFF;
    margin-top: 50px;
    position: relative;
}
.fw2 ul.tixi{
    margin-top:20px;
}
.fw2 ul.tixi li{
    text-align: center;
    width: 260px;
    height: 360px;
    float: left;
    margin-top: 40px;
}
.fw2 ul.tixi li.tixi_jiantou{
    width: 90px;
    height: 120px;
    background: url("../../assets/jiantou_r_big.png") no-repeat center center
}
.fw2 ul.tixi .tixi_img{
  height:120px;
  width: auto;  
}
.fw2 ul.tixi p{
    line-height: 25px;
    font-size: 16px;
    text-align: left;
    color: #333;
}
.fw2 ul.tixi h6{
    margin-top: 15px;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    font-weight: 400;
    color: #333;
}
/*产品功能 */
.fw2 ul.gongneng{
    margin-top: 20px;
}
.fw2 ul.gongneng .gongneng_bg {
    float: left;
    width: 310px;
    height: 169px;
    margin-top: 20px;
    border-radius: 8px;
    color: #fff;
    text-align: center;
    line-height: 169px;
    font-size: 28px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
}
.fw2 ul.gongneng .gongneng_bg .gallery{
   position: absolute;
   left: 0;
    top: 0;
    width: 310px;
    height: 169px;
    overflow: hidden;
    border-radius: 8px;
}
.fw2 ul.gongneng .gongneng_blank{
    float: left;
    width: 25px;
    height: 169px;
    margin-top: 20px;
}
.gongneng_bg1{
background:url(../../assets/1-1Q22QF2150-L.png) no-repeat center center
}
.gongneng_bg2{
background:url(../../assets/1-1Q22QF4110-L.png) no-repeat center center
}
.gongneng_bg3{
background:url(../../assets/1-1Q22QF5170-L.png) no-repeat center center
}
.gongneng_bg4{
background:url(../../assets/1-1Q22QF6040-L.png) no-repeat center center
}
.gongneng_bg5{
background:url(../../assets/1-1Q22QFF20-L.png) no-repeat center center
}
.gongneng_bg6{
background:url(../../assets/1-1Q22QFI30-L.png) no-repeat center center
}
/* 产品功能大图 */
.productPic{
    width: 560px;
    height: 560px;
    border-radius: 2px;
    position: absolute;
    left: 0;
    top:0;
    background: #fff;
}
.picDialog .el-dialog__header{
    padding: 0;
}
.picDialog .el-dialog__headerbtn{
   background: #000;
   top:-20px;
   right: 55px;
   height: 50px;
   width: 50px;
   z-index: 999;
   border-radius: 25px;
}
.picDialog .el-dialog__body{
    padding: 0
}
.productPic img{
    width: 560px;
    height: 560px;
    border-radius: 2px;
}
.picDialog .el-dialog__headerbtn .el-dialog__close{
   width: 30px;
   height: 30px;
   color: #fff;
  
}
.picDialog [class*=" el-icon-"]{
    line-height: 30px;
    text-align: center;
    font-size: 25px;

}
.picDialog [class*=" el-icon-"]:hover{
    color: #1fa0d3
}
/* 成功案例 */
.case_top{
    margin-top: 140px;
}
.blue_bg{
    background: #F8FBFF;
    position: relative;
}
.blue_bg .case_box{
    background: #fff;
    top: -90px;
    z-index: 99;
}
.banner_box{
    height: 180px;
    border: 1px solid #eee;
    position: absolute;
    left: 50%;
    width: 380px;
    margin-left: -190px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px #eee;
}
.banner_box p{
    height: 90px;
    line-height: 90px;
    margin-top: 10px;
    text-align: center;
    color: #666;
    font-size: 20px;
    font-weight: 500;
}
.banner_box .tiyan{
    display: block;
    width: 200px;
    margin: 0 auto;
    height: 50px;
    /* line-height: 50px; */
    text-align: center;
    color: #fff;
    font-size: 22px;
    border-radius: 17px;
    background: #fa6a0b;
    font-weight: 400;
}
.case_tit_top{
    padding-top: 140px;
}
.fw2 .title_bg{
    position: relative;
    margin: 0 auto;
    width: 300px;
    color: #F2F2F2;
    font-size: 58px;
    line-height: 80px;
    z-index: 9;
}
.fw2 .title_bg .title{
    display: block;
    position: absolute;
    top: 27px;
    left: 0;
    width: 300px;
    height: 40px;
    line-height: 40px;
    color: #333;
    font-size: 28px;
    text-align: center;
}
.fw2 > p{
    margin-top: 16px;
    text-align: center;
    color: #3e3a39;
    font-size: 16px;
    line-height: 24px;
    display: block;
}
.pingjia{
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    color: #22A0D4;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
}
.case .case_li{
    float: left;
    width: 194px;
    margin: 0 1px;
    z-index: 8;
}
.case .case_li .pingjia_wrap .pingjia_box:hover{
   position: absolute;
    top: -15px;
    left: -15px;
    width: 224px;
    z-index: 99;
    box-shadow: 0px 0px 5px #ccc;
    
}
.case .case_li .pingjia_wrap .pingjia_box .pingjia_con:hover{
 background: #fff;
}
.case .pingjia_wrap{
    width: 194px;
    height: 240px;
    position: relative;
}
.case .case_li .pingjia_box{
    width: 194px;
}
.case .case_li .pingjia_box .pingjia_tit{
    height: 35px;
    background: #1B77BA;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 35px;
}
.case .case_li .pingjia_box .pingjia_con{
    height: 220px;
    background: #EAF3FF;
    color: #666;
    font-size: 12px;
    line-height: 25px;
    padding: 10px;
    text-align: justify;
}
.case .case_li .pingjia_box .pingjia_con span{
    text-align: right;
    display: block;
    color: #666;
}
.case .case_li .pingjia_box .pingjia_con.deep{
    background: #E0EDFF;
}
.case .case_li.spa_sel{
    z-index: 9;
}
.case .case_li.spa_sel .pingjia_wrap{
    z-index: 99;
}
/* .case .case_li .pingjia_box.sel{
    position: absolute;
    top: -15px;
    left: -15px;
    width: 224px;
    z-index: 99;
    box-shadow: 0px 0px 5px #ccc;
} */
/* .case .case_li .pingjia_box.sel .pingjia_tit{
    height: 45px;
    line-height: 45px;
    background: #22A0D4;
    font-size: 16px;
} */
.case .case_li .pingjia_box.sel .pingjia_con{
    height: 240px;
    font-size: 14px;
    background: #fff;
    color: #333;
}
.case .case_li .pingjia_box.sel .pingjia_con span{
    color: #333;
}
/* 合作伙伴 */

</style>

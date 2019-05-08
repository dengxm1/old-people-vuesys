<template>
    <div>
         <!-- 产品功能开始 -->
        <div class="fw2 w2 scroll_num" id="productFunction">
            <p class="title_bg">
                "FUNCTION"
                <span class="title">产品功能</span>
            </p>
            <ul class="clearfix gongneng">
                <li class="gongneng_bg gongneng_bg1" @click="lookPicture(1)">
               居家养老平台   
        </li>
        <li class="gongneng_blank"></li>
        <li class="gongneng_bg gongneng_bg2" @click="lookPicture(2)">
        机构养老平台
        </li>
        <li class="gongneng_blank"></li>
        <li class="gongneng_bg gongneng_bg3" @click="lookPicture(3)">
        健康管理平台
        </li>
        <li class="gongneng_bg gongneng_bg4" @click="lookPicture(4)">
        旅居管理平台
        </li>
        <li class="gongneng_blank"></li>
        <li class="gongneng_bg gongneng_bg5" @click="lookPicture(5)">
        连锁养老平台
        </li>
        <li class="gongneng_blank"></li>
        <li class="gongneng_bg gongneng_bg6" @click="lookPicture(6)">
        政府监管平台
        </li>
            </ul>
        </div>
        <!--产品功能点击图片查看大图  -->
    <el-dialog
  :visible.sync="picDialog"
   width="40%" class="picDialog"
>    
  <div class="productPic">
   <img :src="picture" alt="图片加载失败">
  </div>
</el-dialog>
        <!-- 产品功能结束 -->
    </div>
</template>
<script>
export default {
      data:() => ({
         picDialog: false,
         picture:""
     }),
 methods: {         
    lookPicture(id){
        this.picDialog=true
      if(id==1){
          this.picture = require('../../../assets/1-1Q22QF239.jpg')
      }
      if(id==2){
          this.picture = require('../../../assets/1-1Q22QF430.jpg')
      }
      if(id==3){
          this.picture = require('../../../assets/1-1Q22QF533.jpg')
      }
      if(id==4){
          this.picture = require('../../../assets/1-1Q22QF635.png')
      }
      if(id==5){
          this.picture = require('../../../assets/1-1Q22QFF9.png')
      }
      if(id==6){
          this.picture = require('../../../assets/1-1Q22QFJ3.png')
      }
    },
 }
}
</script>


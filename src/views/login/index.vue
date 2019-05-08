<template>
    <div class="login">
        <div class="content1">
           <div class="fontdiv">幸福家养老管理平台</div>
         <div class="loginform">
               <div class="titlediv">系统管理人员</div>
               <el-form ref="loginForm" class="login-form">
            <el-form-item prop="username">
           <el-input type="text" v-model="loginForm.userName" autocomplete="on" placeholder="账 号">
               <svg-icon slot="prepend" icon-class="user"/>
           </el-input>             
            </el-form-item>
            <el-form-item  prop="password">
             <el-input type="password" v-model="loginForm.password" autocomplete="on" placeholder="密 码">
                <svg-icon slot="prepend" icon-class="key" />
             </el-input>
                </el-form-item>
          <el-row class="yanzheng">    
              <el-col :span="10" class="left">  
            <el-form-item  prop="checkCode">
             <el-input type="text" v-model="checkCode" autocomplete="on" placeholder="验证码" class="yzCode">
                <svg-icon slot="prepend" icon-class="editor" />
             </el-input> 
         </el-form-item>
         </el-col>
         <el-col :span="10">
            <el-form-item>
              <img :src="picture" @click="changeVerification">    
         </el-form-item>
         </el-col>
      </el-row> 
     <el-button type="primary" @click="handleLogin()">登录</el-button>
    </el-form>
           </div> 
        </div>
    </div>
</template>
<script>
import { Message } from 'element-ui'
import {adminLogin} from '@/api/login'
import {getResult} from '@/api/verificationCode'
export default {
    data(){
        return{
            picture:"api/yzm/captcha",
            loginForm:{
                userName:'',
                password:'',          
            },
             checkCode:'',
             codeResult:''
        }
    },
    methods:{
        changeVerification(){
            this.picture="api/yzm/captcha?time="+new Date()+"";
        },
        handleLogin(){
             return new Promise((resolve, reject) => {
         getResult({'checkCode':this.checkCode}).then(res=>{
           this.codeResult=res.data
        })
          adminLogin(this.loginForm).then(res=>{
            if(res.data===''){
                Message({
                    message: '账户或密码错误!',
                    type: 'warning'
                  })
            }else if(!this.codeResult){
                 Message({
                    message: '验证码错误!',
                    type: 'warning'
                  })
            }else{
                this.$local.save('userInfo',{
                    isLogin:true,
                    userName:res.data.userName,
                    password:res.data.password
                })
                let info=this.$route.query.info
                 if(!info){
                info='/floorInfo'
                 }
                this.$router.push({
                path:info
       })
                resolve()
            }      
        }).catch(error=>{
             reject(error)
        })
    })
        }
    }
}
</script>

<style>
 .login{
    width: auto;
    min-width: 960px;
    background: #0f7ac6; 
} 
.content1{
 width: 960px;
 height: 768px;
 margin: 0 auto;
 background:url("../../assets/image-01.png") no-repeat;
position: relative;  
}
.fontdiv{
    font:bold 40px "microsoft yahei";
    color: #fff;
    text-shadow: #666666 2px 3px 4px;
    margin-left: 6%;
    padding-top: 156px;
}
.loginform{
    width: 417px;
    height: 456px;
    background: #fff;
    margin-left: 57%;
    margin-top: -8%;
    position: relative;
}
.titlediv{
    width: 100%;
    height: 54px;
    text-align: center; 
    font: 600 18px/54px "microsoft yahei";
    color:#0553a8;   
}
.login-form{
    position: absolute;
    top:89px;
    left:12%;
}
.login-form .el-form-item{
    width: 320px;
}
.login-form .el-input-group__prepend{
   background-color:#fff
}
.login-form  .svg-icon {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      vertical-align: top;
      font-size: 20px;
    }
.yzCode .el-input__inner{
  width: 60%;
    }
.yanzheng img{
   width: 90px;
   height: 35px;
   margin-top: 3px;
   cursor: pointer;
}
.yanzheng .left{
    margin-right: 62px;
}
.loginform .el-button{
    width: 320px;
}
</style>

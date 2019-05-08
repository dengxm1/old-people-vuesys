<template>
    <div class="menu-container">
         <div class="header-container">
      <picture-search size="small" ref="pictureSearch" placeholder="名称/证件号" async emptyText @complete="onSearchChange" />
      <el-button size="small" type="primary" icon="el-icon-search" @click="$refs.pictureSearch.searchAsync()">搜索</el-button>

      <div class="right">
        <el-badge :max="99" class="notice">
          <svg-icon icon-class="notice" />
        </el-badge>
        <el-dropdown class="user" @command="onCommand">
          <div class="el-dropdown-link">
            <div class="box">
              <b>{{userInfo.userName}}
                <i class="el-icon-caret-bottom"></i>
              </b>
              <p>{{userInfo.userName}}</p>
            </div>
          </div>
          <el-dropdown-menu slot="dropdown" class="header-dropdown-menu">
            <el-dropdown-item command="password">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
         </div>
          <div class="sidebar-container">
           <img src="~@/assets/logo1.png" class="logo">
 
         <el-menu
      default-active="2"
        class="el-menu-vertical-demo"
      background-color="#32373d"
      text-color="#fff"
      active-text-color="#ffd04b">
          <i class="el-icon-location"></i>
          <span class="top-title">幸福家养老管理信息</span>
        <el-menu-item-group>
          <template slot="title">床位管理</template>
          <el-menu-item index="/floorInfo">   
          <router-link to="/floorInfo" class="url"><span>楼房资料</span></router-link>
        </el-menu-item>
          <el-menu-item index="/roomInfo">      
          <router-link to="/roomInfo" class="url"><span>房间资料</span></router-link>  
           </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">仓库管理</template>
          <el-menu-item index="/goodsInfo">         
          <router-link to="/goodsInfo" class="url"><span>货品信息</span></router-link>  
            </el-menu-item>
          </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">人事管理</template>
          <el-menu-item index="/employeeInfo">           
           <router-link to="/employeeInfo" class="url"><span>员工信息</span></router-link>    
           </el-menu-item>
         </el-menu-item-group>
          <el-submenu index="1-4">
          <template slot="title">老人管理</template>
          <el-menu-item index="1-4-1">
         <router-link to="/oldpeopleInfo" class="url"><span>老人资料</span></router-link>         
        </el-menu-item>
        </el-submenu>
        </el-menu>
          </div>
           <!-- 修改密码弹窗 -->
    <el-dialog title="修改密码" :visible.sync="isPasswordDialog" width="400px">
      <el-form ref="formPassword" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="旧密码" prop="oldPass">
          <el-input v-model="form.oldPass" type="password" placeholder="请输入旧密码" />
        </el-form-item>
        <el-form-item label="新密码" prop="newPass">
          <el-input v-model="form.newPass" type="password" placeholder="请输入新密码" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPass" class="m0">
          <el-input v-model="form.confirmPass" type="password" placeholder="请再次输入新密码" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button size="mini" type="primary" @click="onSubmit">确定</el-button>
        <el-button size="mini" @click="isPasswordDialog = false">取消</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<script>

import {mapGetters} from 'vuex'
import {putChangePassword} from '@/api/login'

export default {
     data(){
      const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.form.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
      return{
        isPasswordDialog:false,
         form: {
        oldPass: null,
        newPass: null,
        confirmPass: null
      },
      rules:{
        oldPass:[
          { required: true, message: "旧密码不能为空" },
          { min: 6, max: 20, message: "密码长度为6-20位" }
        ],
         newPass: [
          { required: true, message: "新密码不能为空" },
          { min: 6, max: 20, message: "密码长度为6-20位" }
        ],
        confirmPass: {
          required: true,
          validator: validatePass
        }
      }
      }
     },
  computed:{
   userInfo(){
       return this.$local.fetch('userInfo')  
   }
  },
    methods:{
      logout(){
        this.$local.remove('userInfo')
        this.$router.push('/login')
      },
     onCommand(command){
        if(command==='logout'){
          this.logout()
      }
      if(command==='password'){
        this.isPasswordDialog = true;
          this.$nextTick(() => {
          this.$refs.formPassword && this.$refs.formPassword.resetFields();
        });
      }   
     },
     onSubmit(){
        this.$refs.formPassword.validate(async valid => {
        if (!valid) return;
       putChangePassword(this.form).then(res=>{
        let isSuccess = res.data >0;
        console.log(isSuccess)
          // 提示处理
          this.$notify({
            title: isSuccess ? "成功" : "失败",
            message: isSuccess ? "修改成功" : "修改失败",
            type: isSuccess ? "success" : "error",
            duration: 2000
          });

          if (isSuccess) {
            this.isPasswordDialog = false;
          }
        })
         })
     },
        onSearchChange(){
        }
    }
}
</script>
 <style lang="scss">
   
</style>

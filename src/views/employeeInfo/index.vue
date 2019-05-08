<template>
   <div class="app-container">
    <!-- 表单筛选 -->
    <el-form class="form" ref="listForm" :model="listQuery" :inline="true">
      <span>姓名:</span>
      <el-form-item prop="e_name"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="员工姓名" v-model="listQuery.e_name"/>
      </el-form-item>
      <span>证件号:</span>
      <el-form-item prop="id_card"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="身份证号码" v-model="listQuery.id_card"/>
      </el-form-item>
       <span>类型:</span>
      <el-form-item prop="work_type"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="工作类型" v-model="listQuery.work_type"/>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary" @click="onSearch" icon="el-icon-search">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" @click="onResetForm">重置</el-button>
      </el-form-item>
      <el-form-item class="add">
        <el-button size="mini" type="primary" @click="addDialogForm=true" icon="el-icon-plus">新增</el-button>
      </el-form-item>
    </el-form>

    <!-- 工具栏 -->
    <div class="common-tool">
      <div class="title">
        房间资料
        <em>{{listData.total?listData.total:0}}</em>
      </div>
    </div>

    <!-- 表格模式 S -->
    <el-table ref="listTabel" :data="listData.rows" height="calc(100vh - 255px)"  v-loading.body="listLoading" highlight-current-row>
      <el-table-column label="姓名" align="center" prop="e_name"/>
      <el-table-column prop="sex" align="center" label="性别" />
      <el-table-column prop="age" align="center" label="年龄"/>
      <el-table-column prop="nation" align="center" label="名族"/>
         <el-table-column prop="id_card" align="center" label="证件号"/>
      <el-table-column prop="phone" align="center" label="联系电话"/>
      <el-table-column prop="work_type" align="center" label="工作类型"/>
      <el-table-column prop="entry_time" align="center" label="入职时间"/>
      <el-table-column prop="salary" align="center" label="薪资"/>
      <el-table-column  align="center" label="操作">
        <template slot-scope="{row,$index}">
        <el-button  @click="show(row)"  type="text" size="small">详情</el-button>
        <el-button  @click="update(row)"  type="text" size="small">修改</el-button>
        <el-popover placement="top" width="160" v-model="visible2[$index]">
        <p>确定删除这条记录吗？</p>
        <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible2.splice($index,1,false)">取消</el-button>
        <el-button type="primary" size="mini" @click="del(row,$index)">确定</el-button>
         </div>
      <el-button slot="reference" type="text" size="small">删除</el-button>
       </el-popover>
      
      </template>
      </el-table-column>     
    </el-table>
    <!-- 分页 -->
    <el-pagination @current-change="getTableList" :current-page.sync="listQuery.pageNo" layout="total, prev, pager, next, jumper" :total="listData.total" />
 <!-- 新增对话框 -->
 <el-dialog title="新增" :visible.sync="addDialogForm" width="40%">
  <el-form :model="addform" label-width="80px">
    <el-row>
      <el-col :span="11">
      <el-form-item label="姓名">
      <el-input v-model="addform.e_name"></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="11">
       <el-form-item label="性别" >    
       <el-select v-model="addform.sex">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
  </el-select>
    </el-form-item>
     </el-col>  
    </el-row>
    <el-row>
      <el-col :span="11">
        <el-form-item label="年龄" >    
        <el-input v-model="addform.age" ></el-input>
    </el-form-item>     
      </el-col>
      <el-col :span="11">
      <el-form-item label="名族" >    
        <el-input v-model="addform.nation" ></el-input>
     </el-form-item>
      </el-col>   
   </el-row>
   <el-row>  
       <el-col :span="11">
       <el-form-item label="身份证" >    
        <el-input v-model="addform.id_card"></el-input>
    </el-form-item>
     </el-col> 
     <el-col :span="11">
      <el-form-item label="住址" >   
        <textarea style="height:50px;width:194.25px" v-model="addform.address"></textarea> 
    </el-form-item>
     </el-col>
   </el-row>
  <el-row>
    <el-col :span="11">
      <el-form-item label="联系电话">    
        <el-input v-model="addform.phone" ></el-input>
    </el-form-item>
    </el-col>
    <el-col :span="11">
    <el-form-item label="工作类型">    
        <el-input v-model="addform.work_type" ></el-input>
    </el-form-item>
    </el-col>
  </el-row>
   <el-row>
     <el-col :span="11">
         <el-form-item label="入职时间">   
         <el-date-picker v-model="addform.entry_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
    </el-date-picker> 
    </el-form-item>
     </el-col>
     <el-col :span="11">
      <el-form-item label="薪水">    
        <el-input v-model="addform.salary"></el-input>
    </el-form-item>
     </el-col>
   </el-row>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addDialogForm = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </div>
</el-dialog>
<!-- 详情弹框 -->
<el-dialog title="详情" :visible.sync="showDialogForm" width="40%">
  <el-form :model="detailsData" label-width="80px" class="details">
    <el-row>
      <el-col :span="11">
      <el-form-item label="姓名">
      <el-input v-model="detailsData.e_name" disabled></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="11">
       <el-form-item label="性别" >    
        <el-input v-model="detailsData.sex" disabled></el-input>
    </el-form-item>
     </el-col> 
    </el-row>
    <el-row>
      <el-col :span="11">
        <el-form-item label="年龄" disabled>    
        <el-input v-model="detailsData.age" disabled></el-input>
    </el-form-item>
      </el-col>
      <el-col :span="11">
      <el-form-item label="名族" >    
        <el-input v-model="detailsData.nation" disabled></el-input>
     </el-form-item>
      </el-col>
   </el-row>
   <el-row>
     <el-col :span="11">
       <el-form-item label="身份证" >    
        <el-input v-model="detailsData.id_card" disabled></el-input>
    </el-form-item>
     </el-col>
     <el-col :span="11">
      <el-form-item label="住址" class="address">    
        <textarea style="height:50px;width:194.25px" v-model="detailsData.address" disabled></textarea> 
    </el-form-item>
     </el-col>
   </el-row>
  <el-row>
    <el-col :span="11">
      <el-form-item label="联系电话">    
        <el-input v-model="detailsData.phone" disabled></el-input>
    </el-form-item>
    </el-col>
    <el-col :span="11">
    <el-form-item label="工作类型">    
        <el-input v-model="detailsData.work_type" disabled></el-input>
    </el-form-item>
    </el-col>
  </el-row>
   <el-row>
     <el-col :span="11">
         <el-form-item label="入职时间"> 
             <el-input v-model="detailsData.entry_time" disabled></el-input>  
    </el-form-item>
     </el-col>
     <el-col :span="11">
      <el-form-item label="薪水">    
        <el-input v-model="detailsData.salary" disabled></el-input>
    </el-form-item>
     </el-col>
   </el-row>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="showDialogForm = false">关 闭</el-button>
  </div>
</el-dialog>
<!-- 修改弹框 -->
<el-dialog title="修改" :visible.sync="updateDialogForm" width="40%">
  <el-form :model="updateData" label-width="80px">
    <el-row>   
      <el-col :span="11">
   <el-form-item label="姓名">
      <el-input v-model="updateData.e_name"></el-input>
     </el-form-item>
     </el-col>
     <el-col :span="11">
     <el-form-item label="性别" >    
        <el-select v-model="updateData.sex">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
  </el-select>
    </el-form-item>
    </el-col>
    </el-row>
    <el-row>   
      <el-col :span="11">
     <el-form-item label="年龄" >    
        <el-input v-model="updateData.age" ></el-input>
    </el-form-item>
    </el-col>
    <el-col :span="11">
     <el-form-item label="名族" >    
        <el-input v-model="updateData.nation" ></el-input>
    </el-form-item>
    </el-col>
    </el-row>
    <el-row>  
    <el-col :span="11">
     <el-form-item label="身份证" >    
        <el-input v-model="updateData.id_card" ></el-input>
    </el-form-item>
    </el-col>
     <el-col :span="11">
     <el-form-item label="住址" >    
         <textarea style="height:50px;width:194.25px" v-model="updateData.address"></textarea> 
    </el-form-item>
    </el-col>
    </el-row>
     <el-row>
       <el-col :span="11">
     <el-form-item label="联系电话">    
        <el-input v-model="updateData.phone" ></el-input>
    </el-form-item>
    </el-col>
    <el-col :span="11">
     <el-form-item label="工作类型">    
        <el-input v-model="updateData.work_type" ></el-input>
    </el-form-item>
    </el-col>
    </el-row>
    <el-row>
    <el-col :span="11">   
     <el-form-item label="入职时间">    
        <el-input v-model="updateData.entry_time" ></el-input>
    </el-form-item>
    </el-col>
     <el-col :span="11">
     <el-form-item label="薪水">    
        <el-input v-model="updateData.salary" ></el-input>
    </el-form-item>
    </el-col>
    </el-row>
  </el-form>
  <div slot="footer" class="dialog-footer">
     <el-button @click="updateDialogForm = false">取 消</el-button>
    <el-button type="primary" @click="updateHandle">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
import {getEmployeeList,addEmployee,updateEmployee,deleteEmployee} from '@/api/employeeInfo'
export default {
    data() {
    return {
      addDialogForm:false,
      showDialogForm:false,
      updateDialogForm:false,
      visible2: [],
      li:'',
      detailsData: {},
      listData: {},
      addform:{},
      updateData:{},
      listQuery: {
        pageNo: 1,
        size: '',
       e_name:'',
       id_card:'',
       work_type:''
      },
      listLoading: false
    };
  },
  created(){
     this.getTableList()
  },
  methods:{
    getTableList(){
      this.listLoading=true;
      getEmployeeList(this.listQuery)
      .then(res=>{
      this.listData=res.data
      }).finally(()=>{
        this.listLoading=false;
      }
      )
    },
     onSearch(){
       this.listQuery.pageNo=1
      this.getTableList()
  },
  onResetForm(){
    if(this.listQuery.e_name!=''){
      this.listQuery.e_name=''
    }
    if(this.listQuery.id_card!=''){
      this.listQuery.id_card=''
    }
    if(this.listQuery.work_type!=''){
      this.listQuery.work_type=''
    }
    this.listQuery.pageNo=1
    this.getTableList()
  },
  add(){
    addEmployee(this.addform).then(()=>{
       this.getTableList()
       this.addform={}
       this.addDialogForm=false

    })
  },
  show(row){
  this.detailsData=row
  this.showDialogForm=true
  },
  update(row){
   this.updateData={...row}
   this.updateDialogForm=true
  
  },
  updateHandle(){
   updateEmployee(this.updateData).then(()=>{
      this.updateDialogForm=false
      this.getTableList()
   })
  },
  del(r,i){ 
  deleteEmployee(r.id).then(()=>{
   this.visible2.splice(i, 1, false)
    this.getTableList()
 })
  }

  }
 
}
</script>
<style>
.add{
  float: right;
}
.el-form-item__content{
 height: 50px;
}
input:disabled,textarea:disabled{
  background: #f5f7fa;
  color: #606266;
}
</style>

 <style lang="scss" scoped>
.app-container {
  height: 100%;
  .form {
    background: #fafbfd;
    height: 46px;
    line-height: 46px;
    padding: 0 12px;
    span {
      display: inline-block;
      margin-right: 8px;
      font-size: 13px;
      color: #3f4041;
    }
    .el-form-item {
      height: auto;
      line-height: 100%;
      margin: 4px 0 0;
      font-size: 0;
    }
  }
  .el-table {
    .pic {
      display: block;
      width: 48px;
      height: 48px;
      margin: 0 auto;
      border-radius: 4px;
    }
  }
  .el-pagination {
    padding: 10px;
  }
}
.pic-list-layer {
  .pic-box {
    position: relative;
    padding: 12px 0 0;
    overflow: hidden;
    border: 1px solid #edeff3;
    border-radius: 10px;
    text-align: center;
    .item {
      display: inline-block;
      width: 120px;
      vertical-align: top;
      margin: 0 8px;
      font-size: 0;
    }
    .img-show {
      display: inline-block;
      max-width: 220px;
      vertical-align: top;
    }
    .txt {
      line-height: 24px;
      font-size: 12px;
      color: #adb1b4;
    }
    .similarity {
      position: absolute;
      left: 50%;
      bottom: 24px;
      background: #f00;
      width: 60px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      transform: translateX(-50%);
      &:before {
        position: absolute;
        top: 0;
        left: -16px;
        width: 0;
        height: 0;
        float: left;
        border-width: 0 0 16px 16px;
        border-style: solid;
        border-color: transparent transparent #f00 transparent;
        content: "";
      }
      &:after {
        position: absolute;
        top: 0;
        right: -16px;
        width: 0;
        height: 0;
        float: left;
        border-width: 0 16px 16px 0;
        border-style: solid;
        border-color: transparent transparent #f00 transparent;
        content: "";
      }
    }
  }
}
</style>

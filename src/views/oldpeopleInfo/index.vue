<template>
   <div class="app-container">
    <!-- 表单筛选 -->
    <el-form class="form" ref="listQuery" :model="listQuery" :inline="true">
      <span>姓名:</span>
      <el-form-item prop="p_name"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="姓名" v-model="listQuery.p_name"/>
      </el-form-item>
      <span>证件号:</span>
      <el-form-item prop="id_card"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="身份证" v-model="listQuery.id_card"/>
      </el-form-item>
       <span>家属:</span>
      <el-form-item prop="relation_name"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="家属姓名" v-model="listQuery.relation_name"/>
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
      <el-table-column prop="p_name" align="center" label="姓名" width="80px"/>
      <el-table-column prop="sex" align="center" label="性别" width="80px"/>
      <el-table-column prop="age" align="center" label="年龄" width="80px"/>
      <el-table-column prop="nation" align="center" label="名族" width="80px"/>
      <el-table-column prop="id_card" align="center" label="身份证"/>
      <el-table-column prop="phone" align="center" label="联系电话"/>
      <el-table-column prop="relation_name" align="center" label="家属姓名"/>
      <el-table-column prop="register_time" align="center" label="入院时间"/>
      <el-table-column prop="floor_serialNumber" align="center" label="楼层编号"/>
      <el-table-column prop="room_serialNumber" align="center" label="房间编号"/>
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
      <el-col :span="8">
      <el-form-item label="姓名">
      <el-input v-model="addform.p_name"></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="8">
       <el-form-item label="性别" >    
        <el-select v-model="addform.sex">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
  </el-select>
    </el-form-item>
     </el-col> 
      <el-col :span="8">
        <el-form-item label="年龄" >    
        <el-input v-model="addform.age" ></el-input>
    </el-form-item>     
      </el-col>
    </el-row>
    <el-row>  
      <el-col :span="11">
      <el-form-item label="名族" >    
        <el-input v-model="addform.nation" ></el-input>
     </el-form-item>
      </el-col>   
         <el-col :span="11">
       <el-form-item label="身份证" >    
        <el-input v-model="addform.id_card"></el-input>
    </el-form-item>
     </el-col> 
   </el-row>
   <el-row>     
     <el-col :span="11">
      <el-form-item label="联系电话" >   
         <el-input v-model="addform.phone" ></el-input> 
    </el-form-item>
    </el-col>
    <el-col :span="11"> 
     <el-form-item label="入院时间" >   
       <el-date-picker v-model="addform.register_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> 
       </el-date-picker>
    </el-form-item>
    </el-col>
   </el-row>
  <el-row> 
    <el-col :span="11">
    <el-form-item label="楼层号">    
        <el-input v-model="addform.floor_serialNumber" ></el-input>
    </el-form-item>
    </el-col>
    <el-col :span="11">
    <el-form-item label="房间号">    
        <el-input v-model="addform.room_serialNumber" ></el-input>
    </el-form-item>
    </el-col>    
  </el-row>
   <el-row> 
      <el-col :span="11">
         <el-form-item label="房间类型">   
     <el-input v-model="addform.room_type" ></el-input>
    </el-form-item>
     </el-col>  
     <el-col :span="11">
      <el-form-item label="家属姓名">    
        <el-input v-model="addform.relation_name"></el-input>
    </el-form-item>
     </el-col>
   </el-row>
    <el-row> 
      <el-col :span="11">
         <el-form-item label="家属电话">   
     <el-input v-model="addform.relation_phone" ></el-input>
    </el-form-item>
     </el-col>  
     <el-col :span="11">
      <el-form-item label="住址">    
        <textarea style="height:50px;width:194.25px" v-model="addform.address"></textarea> 
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
      <el-col :span="8">
      <el-form-item label="姓名">
      <el-input v-model="detailsData.p_name" disabled></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="8">
       <el-form-item label="性别" >    
        <el-input v-model="detailsData.sex" disabled></el-input>
    </el-form-item>
     </el-col> 
      <el-col :span="8">
        <el-form-item label="年龄" >    
        <el-input v-model="detailsData.age" disabled></el-input>
    </el-form-item>     
      </el-col>
    </el-row>
    <el-row>  
      <el-col :span="11">
      <el-form-item label="名族" >    
        <el-input v-model="detailsData.nation" disabled></el-input>
     </el-form-item>
      </el-col>   
         <el-col :span="11">
       <el-form-item label="身份证" >    
        <el-input v-model="detailsData.id_card" disabled></el-input>
    </el-form-item>
     </el-col> 
   </el-row>
   <el-row>     
     <el-col :span="11">
      <el-form-item label="联系电话" >   
         <el-input v-model="detailsData.phone" disabled></el-input> 
    </el-form-item>
    </el-col>
    <el-col :span="11"> 
     <el-form-item label="入院时间" >   
         <el-input v-model="detailsData.register_time" disabled></el-input> 
    </el-form-item>
    </el-col>
   </el-row>
  <el-row> 
    <el-col :span="11">
    <el-form-item label="楼层号">    
        <el-input v-model="detailsData.floor_serialNumber" disabled></el-input>
    </el-form-item>
    </el-col>
    <el-col :span="11">
    <el-form-item label="房间号">    
        <el-input v-model="detailsData.room_serialNumber" disabled></el-input>
    </el-form-item>
    </el-col>    
  </el-row>
   <el-row> 
      <el-col :span="11">
         <el-form-item label="房间类型">   
     <el-input v-model="detailsData.room_type" disabled></el-input>
    </el-form-item>
     </el-col>  
     <el-col :span="11">
      <el-form-item label="家属姓名">    
        <el-input v-model="detailsData.relation_name" disabled></el-input>
    </el-form-item>
     </el-col>
   </el-row>
    <el-row> 
      <el-col :span="11">
         <el-form-item label="家属电话">   
     <el-input v-model="detailsData.relation_phone" disabled></el-input>
    </el-form-item>
     </el-col>  
     <el-col :span="11">
      <el-form-item label="住址">    
        <textarea style="height:50px;width:194.25px" v-model="detailsData.address" disabled></textarea> 
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
      <el-col :span="8">
      <el-form-item label="姓名">
      <el-input v-model="updateData.p_name"></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="8">
       <el-form-item label="性别" >    
     <el-select v-model="updateData.sex">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
  </el-select>
    </el-form-item>
     </el-col> 
      <el-col :span="8">
        <el-form-item label="年龄" >    
        <el-input v-model="updateData.age" ></el-input>
    </el-form-item>     
      </el-col>
    </el-row>
    <el-row>  
      <el-col :span="11">
      <el-form-item label="名族" >    
        <el-input v-model="updateData.nation" ></el-input>
     </el-form-item>
      </el-col>   
         <el-col :span="11">
       <el-form-item label="身份证" >    
        <el-input v-model="updateData.id_card"></el-input>
    </el-form-item>
     </el-col> 
   </el-row>
   <el-row>     
     <el-col :span="11">
      <el-form-item label="联系电话" >   
         <el-input v-model="updateData.phone" ></el-input> 
    </el-form-item>
    </el-col>
    <el-col :span="11"> 
     <el-form-item label="入院时间" >   
       <el-date-picker v-model="updateData.register_time" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"> 
       </el-date-picker>
    </el-form-item>
    </el-col>
   </el-row>
  <el-row> 
    <el-col :span="11">
    <el-form-item label="楼层号">    
        <el-input v-model="updateData.floor_serialNumber" ></el-input>
    </el-form-item>
    </el-col>
    <el-col :span="11">
    <el-form-item label="房间号">    
        <el-input v-model="updateData.room_serialNumber" ></el-input>
    </el-form-item>
    </el-col>    
  </el-row>
   <el-row> 
      <el-col :span="11">
         <el-form-item label="房间类型">   
     <el-input v-model="updateData.room_type" ></el-input>
    </el-form-item>
     </el-col>  
     <el-col :span="11">
      <el-form-item label="家属姓名">    
        <el-input v-model="updateData.relation_name"></el-input>
    </el-form-item>
     </el-col>
   </el-row>
    <el-row> 
      <el-col :span="11">
         <el-form-item label="家属电话">   
     <el-input v-model="updateData.relation_phone" ></el-input>
    </el-form-item>
     </el-col>  
     <el-col :span="11">
      <el-form-item label="住址">    
        <textarea style="height:50px;width:194.25px" v-model="updateData.address"></textarea> 
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
import {getPeopleList,addOldpeople,updateOldpeople,deleteOldpeople} from '@/api/oldpeopleInfo'
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
       p_name:'',
       id_card:'',
       relation_name:''
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
      getPeopleList(this.listQuery)
      .then(res=>{
      console.log(res)
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
    if(this.listQuery.p_name!=''){
      this.listQuery.p_name=''
    }
    if(this.listQuery.id_card!=''){
      this.listQuery.id_card=''
    }
    if(this.listQuery.relation_name!=''){
      this.listQuery.relation_name=''
    }
    this.listQuery.pageNo=1
    this.getTableList()
  },
  add(){
    addOldpeople(this.addform).then(()=>{
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
   updateOldpeople(this.updateData).then(()=>{
      this.updateDialogForm=false
      this.getTableList()
   })
  },
  del(r,i){ 
  deleteOldpeople(r.id).then(()=>{
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

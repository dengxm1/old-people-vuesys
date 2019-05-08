<template>
   <div class="app-container">
    <!-- 表单筛选 -->
    <el-form class="form" ref="listForm" :model="listQuery" :inline="true">
      <span>楼房:</span>
      <el-form-item prop="floor_serialNumber"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="楼房编号" v-model="listQuery.floor_serialNumber"/>
      </el-form-item>
      <span>房间:</span>
      <el-form-item prop="room_serialNumber"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="房间编号" v-model="listQuery.room_serialNumber"/>
      </el-form-item>
      <span>类型:</span>
      <el-form-item prop="room_type"> 
           <el-select v-model="listQuery.room_type" placeholder="房间类型" size="mini">
          <el-option label="单人间" :value="1"></el-option>
          <el-option label="双人间" :value="2"></el-option>
          <el-option label="三人间" :value="3"></el-option>
          <el-option label="四人间" :value="4"></el-option>
  </el-select>
      </el-form-item>
       <span>空余:</span>
      <el-form-item prop="empty_bed"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="空余床位" v-model="listQuery.empty_bed"/>
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
      <el-table-column label="楼房编号" align="center" prop="floor_serialNumber"/>
      <el-table-column prop="room_serialNumber" align="center" label="房间编号" />
      <el-table-column prop="room_type" align="center" label="房间类型">
         <template slot-scope="{row:{room_type}}">
         <span>{{room_type==1?'单人间':(room_type==2?'双人间':(room_type==3?'三人间':(room_type==4?'四人间':'')))}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="people_amount" align="center" label="居住人数"/>
      <el-table-column prop="empty_bed" align="center" label="空余床位"/>
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
 <el-dialog title="新增" :visible.sync="addDialogForm" width="30%">
  <el-form :model="addform" label-width="80px">
    <el-form-item label="楼房编号">
      <el-input v-model="addform.floor_serialNumber"></el-input>
     </el-form-item>
    <el-form-item label="房间编号">
      <el-input v-model="addform.room_serialNumber"></el-input>
     </el-form-item>
     <el-form-item label="房间类型">    
         <el-select v-model="addform.room_type">
          <el-option label="单人间" :value="1"></el-option>
          <el-option label="双人间" :value="2"></el-option>
          <el-option label="三人间" :value="3"></el-option>
          <el-option label="四人间" :value="4"></el-option>
  </el-select>
    </el-form-item>
     <el-form-item label="居住人数" >    
        <el-input v-model="addform.people_amount" ></el-input>
    </el-form-item>
     <el-form-item label="空余床位" >    
        <el-input v-model="addform.empty_bed" ></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="addDialogForm = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </div>
</el-dialog>
<!-- 详情弹框 -->
<el-dialog title="详情" :visible.sync="showDialogForm" width="30%">
  <el-form :model="detailsData" label-width="80px" class="details">
    <el-form-item label="楼房编号">
      <el-input v-model="detailsData.floor_serialNumber" disabled></el-input>
    </el-form-item>
     <el-form-item label="房间编号">
      <el-input v-model="detailsData.room_serialNumber" disabled></el-input>
    </el-form-item>
    <el-form-item label="房间类型">
   <el-input v-model="detailsData.room_type" disabled></el-input>
    </el-form-item>
    <el-form-item label="居住人数">
        <el-input v-model="detailsData.people_amount" disabled></el-input>
    </el-form-item>  
    <el-form-item label="空余床位">
        <el-input v-model="detailsData.empty_bed" disabled></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="showDialogForm = false">关 闭</el-button>
  </div>
</el-dialog>
<!-- 修改弹框 -->
<el-dialog title="修改" :visible.sync="updateDialogForm" width="30%">
  <el-form :model="updateData" label-width="80px">
    <el-form-item label="楼房编号">
      <el-input v-model="updateData.floor_serialNumber"></el-input>
    </el-form-item>
    <el-form-item label="房间编号">
        <el-input v-model="updateData.room_serialNumber"></el-input>
    </el-form-item>
    <el-form-item label="房间类型">
         <el-select v-model="updateData.room_type">
          <el-option label="单人间" :value="1"></el-option>
          <el-option label="双人间" :value="2"></el-option>
          <el-option label="三人间" :value="3"></el-option>
          <el-option label="四人间" :value="4"></el-option>
  </el-select>
    </el-form-item>
    <el-form-item label="居住人数">
        <el-input v-model="updateData.people_amount"></el-input>
    </el-form-item>
    <el-form-item label="空余床位">
        <el-input v-model="updateData.empty_bed"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
     <el-button @click="updateDialogForm = false">取 消</el-button>
    <el-button type="primary" @click="updateHandle">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
import {getRoomList,addRoom,updateRoom,deleteRoom} from '@/api/roomInfo'
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
       floor_serialNumber:'',
       room_serialNumber:'',
       room_type:'',
       empty_bed:''
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
      getRoomList(this.listQuery)
      .then(res=>{
        console.log(res)
      this.listData=res.data
      }).finally(()=>{
        this.listLoading=false;
      }
      )
    },
    onResetForm(){
     if(this.listQuery.floor_serialNumber!=''){
      this.listQuery.floor_serialNumber=''
    }
     if(this.listQuery.room_serialNumber!=''){
      this.listQuery.room_serialNumber=''
    }
    if(this.listQuery.room_type!=''){
      this.listQuery.room_type=''
    }
    if(this.listQuery.empty_bed!=''){
      this.listQuery.empty_bed=''
    }
    this.listQuery.pageNo=1
    this.getTableList()
    },
     update(row){
    console.log(typeof row.room_type)
      this.updateData={...row}
      this.updateDialogForm=true

    },
   add(){
   addRoom(this.addform)
   .then(()=>{
     this.addDialogForm=false
      this.getTableList()
   })
    }, 
    updateHandle(){
     updateRoom(this.updateData).then(()=>{
       this.updateDialogForm=false
        this.getTableList()
     })

    },
    show(row){
    this.detailsData={...row}
    this.detailsData.room_type=row.room_type==1?'单人间':(row.room_type==2?'双人间':row.room_type==3?'三人间':row.room_type==4?'四人间':'')
    this.showDialogForm=true
    },
    del(r,i){
     deleteRoom(r.id).then(()=>{
       this.visible2.splice(i,1,false)
       this.getTableList()
     })
    },
    onSearch(){
     this.listQuery.pageNo=1
     this.getTableList();
    }
}
}
</script>
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

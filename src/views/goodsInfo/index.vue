<template>
   <div class="app-container">
    <!-- 表单筛选 -->
    <el-form class="form" ref="listForm" :model="listQuery" :inline="true">
      <span>货品:</span>
      <el-form-item prop="goods_serialNumber"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="货品编号" v-model="listQuery.goods_serialNumber"/>
      </el-form-item>
      <span>名称:</span>
      <el-form-item prop="goods_name"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="货品名称" v-model="listQuery.goods_name"/>
      </el-form-item>
       <span>类型:</span>
      <el-form-item prop="goods_type"> 
        <el-input size="mini" @keyup.enter.native="onSearch" placeholder="货品类型" v-model="listQuery.goods_type"/>
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
      <el-table-column label="货品编号" align="center" prop="goods_serialNumber"/>
      <el-table-column prop="goods_name" align="center" label="货品名称" />
      <el-table-column prop="goods_type" align="center" label="货品类型"/>
      <el-table-column prop="goods_amount" align="center" label="货品数量"/>
      <el-table-column prop="goods_price" align="center" label="货品价格"/>
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
    <el-form-item label="货品编号">
      <el-input v-model="addform.goods_serialNumber"></el-input>
     </el-form-item>
     <el-form-item label="货品名称" >    
        <el-input v-model="addform.goods_name" ></el-input>
    </el-form-item>
     <el-form-item label="货品类型" >    
        <el-input v-model="addform.goods_type" ></el-input>
    </el-form-item>
     <el-form-item label="货品数量" >    
        <el-input v-model="addform.goods_amount" ></el-input>
    </el-form-item>
     <el-form-item label="货品价格" >    
        <el-input v-model="addform.goods_price" ></el-input>
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
    <el-form-item label="货品编号">
      <el-input v-model="detailsData.goods_serialNumber" disabled></el-input>
    </el-form-item>
    <el-form-item label="货品名称">
        <el-input v-model="detailsData.goods_name" disabled></el-input>
    </el-form-item>
    <el-form-item label="货品类型">
        <el-input v-model="detailsData.goods_type" disabled></el-input>
    </el-form-item>
    <el-form-item label="货品数量">
        <el-input v-model="detailsData.goods_amount" disabled></el-input>
    </el-form-item>
    <el-form-item label="货品价格">
        <el-input v-model="detailsData.goods_price" disabled></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="showDialogForm = false">关 闭</el-button>
  </div>
</el-dialog>
<!-- 修改弹框 -->
<el-dialog title="修改" :visible.sync="updateDialogForm" width="30%">
  <el-form :model="updateData" label-width="80px">
    <el-form-item label="货品编号">
      <el-input v-model="updateData.goods_serialNumber"></el-input>
    </el-form-item>
    <el-form-item label="货品名称">
        <el-input v-model="updateData.goods_name"></el-input>
    </el-form-item>
    <el-form-item label="货品类型">
        <el-input v-model="updateData.goods_type"></el-input>
    </el-form-item>
    <el-form-item label="货品数量">
        <el-input v-model="updateData.goods_amount"></el-input>
    </el-form-item>
    <el-form-item label="货品价格">
        <el-input v-model="updateData.goods_price"></el-input>
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
import {getGoodsList,addGoods,updateGoods,deleteGoods} from '@/api/goodsInfo'
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
       goods_serialNumber:'',
       goods_name:'',
       goods_type:''
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
      getGoodsList(this.listQuery)
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
    if(this.listQuery.goods_serialNumber!=''){
      this.listQuery.goods_serialNumber=''
    }
    if(this.listQuery.goods_name!=''){
      this.listQuery.goods_name=''
    }
    if(this.listQuery.goods_type!=''){
      this.listQuery.goods_type=''
    }
    this.listQuery.pageNo=1
    this.getTableList()
  },
  add(){
    addGoods(this.addform).then(()=>{
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
   updateGoods(this.updateData).then(()=>{
      this.updateDialogForm=false
      this.getTableList()
   })
  },
  del(r,i){ 
  deleteGoods(r.id).then(()=>{
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

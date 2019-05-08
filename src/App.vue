<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.add{
  float: right;
}
.el-input.is-disabled  .el-input__inner {
      color:#606266;
      cursor: default;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 194.25px;
}
</style>
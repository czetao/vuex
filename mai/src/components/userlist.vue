<template>
  <div class="userlist">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <!-- 账号列表 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>账号列表</span>
          <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
        </div>
        <!-- 表格 -->
        <div class="text item">

        </div>
      </el-card>
    </el-main>
  </div>
</template>
<script>
export default {};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.userlist {
  width: 100%;
}
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }


</style>

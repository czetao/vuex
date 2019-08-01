<template>
  <div class="index">
    <!-- {{ $store.state.userinfo}}     -->
    <el-container style="height: 500px; border: 1px solid #eee">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
       <!-- 菜单 -->
        <el-menu :default-openeds="['1']" router default-active='/'>
          <!-- 后台首页 导航-->
        <el-menu-item index="/" style = "background-color:;font-size: 20px;">
        <i class ="el-icon-setting"></i>
        后台首页</el-menu-item>

          <!-- 导航一 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>账号管理
            </template>
            <el-menu-item index="userlist">账号列表</el-menu-item>
            <el-menu-item index="useradd">添加账号</el-menu-item>
            <el-menu-item index="passwordedit">修改密码</el-menu-item>
          </el-submenu>
          <!-- 导航二 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>

            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
        <!-- 右侧内容 -->
      <el-container>

        <!-- 路由出口 -->
         <router-view>
         </router-view>
      </el-container>
     
    </el-container>
  </div>
</template>
<script>
export default {
  
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
html,
body,
#app,
.index {
  height: 100%;
}
.el-container {
  height: 100% !important;
}

</style>

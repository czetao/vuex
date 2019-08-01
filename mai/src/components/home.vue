<template>
  <div class="home">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="username">
        {{username}}
      </span>
    </el-header>
    <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>用户信息</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div  class="text item">
            用户账号：{{userinfo.username}}
          </div>
           <div  class="text item">
            用户密码：{{userinfo.password}}
          </div>
           <div  class="text item">
            实际姓名：{{userinfo.realname}}
          </div>
           <div  class="text item">
            证件号码：{{userinfo.idType}}
          </div>
        </el-card>
    </el-main>
  </div>
</template>
<script>
//引入mapState
import {mapState} from 'vuex';

export default {
  computed :{
    // username (){
    //   return this.$store.state.userinfo.username
    // },
    //通过mapState 辅助函数获取state数据
    ...mapState({
      userinfo :state => state.userinfo,
      username :state => state.userinfo.username
    })

  } 

};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.home{
    width: 100%;
}
.username{
  font-size: 20px;
  color: #409eff
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

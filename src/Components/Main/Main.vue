<template>


<div class="container">
<el-container>
  <el-aside width="220px">
      <h1>浩德慈善管理后台</h1>

  </el-aside>
  <el-container>
    <el-header>
    <el-tabs style="color:#6997B7;">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>


    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>

</div>


</template>




<script>


export default {


}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
    height 100vh
    .el-container 
        height 100%
        .el-header
            background #F5F7FA
            .el-tabs
                .el-tab-pane
                    color #C2C2C2
        .el-aside
            background #393D49
            h1
                color #C2C2C2
                margin 12px 2px 0
                text-align center
                font-weight 400
                font-size 24px
.el-tabs__item
        color white !important
</style>
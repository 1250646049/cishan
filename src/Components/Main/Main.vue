<template>


<div class="container">
<el-container>
  <el-aside :width="!iscollspan?'220px':'64px'">
    <div class="collspan el-icon-s-fold" @click="collspan" >

    </div>
    <!-- 收起 -->
    <el-menu
      :default-active="!currentIndex?'welcome':currentIndex"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      :collapse="iscollspan"

      @select="SelectActive($event)"
      >
      <el-submenu index="1"  >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group >
          <el-menu-item index="system">配置设置</el-menu-item>
          <el-menu-item index="welcome">快捷导航</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
   <el-submenu index="2">
          <template slot="title"> <i class="el-icon-menu"></i><span>受助者数据库</span></template>
          <el-menu-item index="need" >受助者信息预览</el-menu-item>
    </el-submenu>

       <el-submenu index="3">
          <template slot="title"> <i class="el-icon-menu"></i><span>捐助者数据库</span></template>
          <el-menu-item index="3-1-1">捐助者信息预览</el-menu-item>
          <el-menu-item index="3-1-2">处理来访信息</el-menu-item>
    </el-submenu>

           <el-submenu index="4" >
          <template slot="title"> <i class="el-icon-menu"></i><span>信息发布</span></template>
          <el-menu-item   index="4-1-1">管理公告</el-menu-item>
           <el-menu-item index="4-1-2">公布进度</el-menu-item>
          <el-menu-item index="4-1-3">发布捐助</el-menu-item>
    </el-submenu>
    </el-menu>

  </el-aside>
  <el-container>
    <el-header>
      <h1>中华浩德慈善基金会管理后台系统</h1>
      <div class="login">
          <span class="message">欢迎您：<span class="name">  
               <el-dropdown trigger="click">
      <span class="el-dropdown-link" style="color:white;">
        李淮源<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-switch-button">退出登陆</el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>
</span></span>

      </div>
    </el-header>
    <el-main>
      <router-view>

      </router-view>

    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</el-container>

</div>


</template>




<script>


export default {
data(){

  return {
    iscollspan:false,
    currentIndex:""

  }
},

methods:{
collspan(){
  this.iscollspan=!this.iscollspan
},
SelectActive(path){
  localStorage.setItem("CurrentIndex",path)
},
},

mounted() {
  localStorage.getItem("CurrentIndex")&&(this.currentIndex=localStorage.getItem("CurrentIndex"))


},

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
    position relative
    height 100vh
    .el-container 
        .collspan
            color white;
            letter-spacing 0.2em
            font-size 20px
            padding 8px 6px
            box-sizing border-box
            border-bottom 1px solid #000
            cursor pointer
        height 100%
        
        .el-header
            background #0177d5
            position absolute
            left 0
            right 0
            height 64px
            h1 
              margin 15px 15px 0
              font-size 24px
              letter-spacing 0.2em
              color white
              font-weight 500
              float left
            .login
              float right
              margin-top 15px
              margin-right 15px
              .message
                color white;
                span 
                  cursor pointer
            .el-tabs
                .el-tab-pane
                    color #C2C2C2
        .el-aside
            background #393D49
            margin-top 60px
            h1
                color #C2C2C2
                margin 12px 2px 0
                text-align center
                font-weight 400
                font-size 24px
        .el-main
          margin-top 60px
          overflow hidden
          background #F1EFF2

  .el-menu-item 
    padding-left 60px !important 
    box-sizing border-box !important
</style>
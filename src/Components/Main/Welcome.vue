<template>


<div class="container">

<h3 class="welcome">
    欢迎访问浩德管理后台
</h3>
<p class="link">快捷方式</p>

<ul>
    <li>
        <span class="el-icon-coin"></span><span>受捐信息</span>
    </li>
    <li>
     <span class="el-icon-notebook-2"></span><span>捐助信息</span>

    </li>
    <li>
          <span class="el-icon-message"></span><span>发布公告</span>
    </li>
    <li>
      <span class="
el-icon-switch-button"></span><span>发布捐助</span>  

    </li>
</ul>

<div class="detail">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>系统信息</span>
        </div>
 <el-table  stripe
    style="width: 100%"
    :data="systemMessage">
    <el-table-column prop="name"  label="类型"></el-table-column>
    <el-table-column prop="message"  label="详细概况"></el-table-column>
 </el-table>
    </el-card>
 
</div>

</div>


</template>




<script>


export default {
data(){

    return{
        systemMessage:[
            {name:"服务器",message:"Express"},
            {name:"版本",message:"V1.0"},
            {name:"作者",message:"李淮源"},

        ]


    }
}

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>
body 
    overflow hidden
.container
    .link 
        margin 10px 0
    ul 
        display flex
        li 
            width 125px
            height 106px
            border 1px solid #ccc
            margin-right 15px
            cursor pointer
            text-align center
            display flex
            flex-direction column
            justify-content center
            background white
            span 
                &:first-child 
                    font-size 36px
                    margin-bottom 3px

    .detail
        margin-top 15px
</style>
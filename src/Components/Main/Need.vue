<template>


<div class="container">
<el-card class="box-card">

<el-form>
    <el-form-item>
        <el-input placeholder="请输入姓名" style="width:180px;"></el-input>
        <el-button  type="primary" icon="el-icon-search" style="margin-left:10px;" >搜索</el-button>
    </el-form-item>
</el-form>
<el-table stripe :data="tableData" style="width: 100%" border >
    <el-table-column type="expand" label="进度" width="80">
        <el-steps :active="1" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
    </el-table-column>
    <el-table-column type="index" label="索引" width="80"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="年龄" prop="age"></el-table-column>
     <el-table-column label="操作" >
         <el-button icon="el-icon-delete" type="danger" @click="delectUser">删除</el-button>
         <el-button type="warning" icon="el-icon-edit" @click="alterUser">修改</el-button>
         <el-button type="info" icon="el-icon-s-order" @click="updateContent">更新进度</el-button>

     </el-table-column>
    


</el-table>

</el-card>
<!-- 分页 -->
<el-card>
    <el-pagination
     background
     layout="prev, pager, next"
    :total="1000"
    style="width:100%;"
    >
</el-pagination>
</el-card>

<!-- 分页End -->
<!-- diag -->
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <!-- 内容表单区 -->
<el-form  status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码">
    <el-input type="password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码">
    <el-input type="password"  autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input ></el-input>
  </el-form-item>
</el-form>

<!-- 内容表单区结束 -->
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

<!-- 抽屉页面 -->

<el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false">
  <!-- 时间线 -->
      <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>

    <!-- end -->
    <el-card>
        <el-button type="primary" icon="el-icon-edit-outline">添加新进展</el-button>
        <el-button type="info" icon="el-icon-folder-add">设置总进度</el-button>

    </el-card>
  </el-timeline>


  <!-- 时间线end -->
</el-drawer>
</div>


</template>




<script>


export default {
data(){
    return {
        tableData:[
            {"name":"小明",age:"18"},
            {"name":"小明",age:"18"},
            {"name":"小明",age:"18"},
            {"name":"小明",age:"18"},
            {"name":"小明",age:"18"},
        ],
        dialogVisible:false,
        drawer:false

    }
},
methods:{
    // 删除用户
    delectUser(){
        this.$MessageBox.confirm('确定要删除此用户吗?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    alterUser(){
       this.dialogVisible=true
            
    },
    handleClose(){
        
    },
    updateContent(){
        this.drawer=true
    }
}

}
</script>


<style lang='stylus' rel='stylesheet/stylus'>


</style>
<template>


<div class="container">
  <el-tabs  type="border-card" v-model="currentTab" >
    <el-tab-pane label="基本配置" name="first" class="system">
           <el-form ref="formLabelAlign"  :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
            <el-form-item label="网站名称">
                <el-input v-model="formLabelAlign.name" ></el-input>
            </el-form-item>
            <el-form-item label="网站创建时间">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="网站123">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm">保存</el-button>
                <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>

    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>



</div>


</template>




<script>


export default {
data(){
    return {
        formLabelAlign:{
            name:"",
            region:"",
            type:""
        },
        labelPosition:"left",
        currentTab:"first"
    }
},

methods:{
    submitForm(){
        this.$message.success("保存成功")
    },
    resetForm(){
       this.formLabelAlign.name=this.formLabelAlign.region=this.formLabelAlign.type=""
    }
}


}
</script>


<style lang='stylus' rel='stylesheet/stylus'>
.system
    .el-input
        width 40%

</style>
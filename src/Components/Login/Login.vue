<template>


<div class="container">
<!-- container布局 -->

<el-container class="big_container" >
  <el-header>中华浩德慈善项目管理后台端</el-header>
  <el-main>
    <el-card class="box-card">
        <div slot="header" class="clearfix top" >
         <span>浩德慈善项目管理系统</span>
    </div>
        <!-- 表单输入区域 -->
  <el-form :model="Login" :rules="rules"  ref="Form" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" >
            <el-input v-model="Login.username"    ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" >
            <el-input v-model="Login.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="reptpass" >
            <el-input  v-model="Login.reptpass" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="CheckLogin">登陆</el-button>
            <el-button @click="reset_login" >重置</el-button>
        </el-form-item>
</el-form>
    </el-card>


  </el-main>

</el-container>




</div>


</template>




<script>


export default {
  data(){
      return {
          Login:{
              username:"",
              password:"",
              reptpass:""
          },
          rules:{
              username:[
             { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
              ],
              password:[
                  { required: true, message: '请输入密码', trigger: 'blur' },
                 { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }

              ],
              reptpass:[
                    { required: true, message: '请重复密码', trigger: 'blur' },
                 { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
              ]

              


          }
      }

  },

  methods:{
      reset_login(){
        //   resetFields
        this.Login.username=this.Login.password=this.Login.reptpass=""
   
        this.$refs.Form.clearValidate()
      },
      async CheckLogin(){

      let result=await this.$refs.Form.validate()
        if(result){
            if(this.Login.password===this.Login.reptpass){
                // 登陆成功
                // 跳转
                this.$router.replace({
                    name:"main",

                })
                return this.$message.success("恭喜你，登陆成功！")

            }
            // 校验失败
            return this.$message.error("抱歉，两次输入的密码不一样！")

        }

      }
  }

}
</script>


<style lang='stylus' rel='stylesheet/stylus' scoped>

.big_container
    .el-header
        height 60px
        background #000000
        padding 0
        color white
        text-align center
        line-height 60px
        font-size 20px
        font-weight 700
        letter-spacing 0.2em
    .el-main
        height 80vh
        position relative
        .box-card
            box-shadow 5px 5px 15px #999
            width 460px

            background white
            position absolute
            left 50%
            top 50%
            transform translate(-50%,-50%)
            .top    
                text-align center
                font-size 18px
                color block

</style>
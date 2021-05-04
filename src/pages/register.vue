<template>
  <div id="poster">
    <el-form
      label-width="100px"
      class="login-container"
      status-icon
      :model="ruleForm"
      ref="ruleForm"
      :rules="rules"
      onsubmit="return false"
      @key.enter.native="register"
      :hide-required-asterisk="true"
    >
      <h3 class="login_title">系统注册</h3>
      
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

      <el-form-item style="width: 80%">
        <el-button
          type="primary"
          native-type="submit"
          style="width: 100%;background: #505458;border: none"
          @click="submitForm('ruleForm')"
        >注册</el-button>
      </el-form-item>
      <el-form-item style="width: 80%">
        <el-button
          type="primary"
          style="width: 100%;background: #505458;border: none"
          @click="resetForm('ruleForm')"
        >重置</el-button>
      </el-form-item>
      <el-link type="primary" href="/login">已有账号？点击登陆！</el-link>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        pass: "",
        email: ""
      },
      //头像
      photo:"",
      rules: {
        username: [{ validator: checkUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  methods: {
    
    //注册提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        //验证通过的时候
        if (valid) {
          //console.log(this.ruleForm);
          this.axios
            .post("/register", {
              username: this.ruleForm.username,
              password: this.ruleForm.pass,
              email: this.ruleForm.email
            })
            .then(res => {
              console.log(res);
              if (res.data.code === 200) {
                this.$message({
                  message: "注册成功，请前往登陆！",
                  type: "success"
                });
                this.$refs[formName].resetFields();
              } else {
                this.$message.error("用户已存在，请重新注册！");
                this.$refs[formName].resetFields();
              }
            });
        } else {
          //验证失败
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped lang="scss">
#poster {
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, #000000 0%, #ffffff 100%);
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 400px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px 5%;
  text-align: center;
  color: #505458;
}
.avatar{
  width: 60px;
  height: 60px;
}
</style>
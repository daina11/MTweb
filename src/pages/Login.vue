<template>
  <div id="poster">
    <el-form
      class="login-container"
      label-position="left"
      label-width="0px"
      onsubmit="return false"
      @key.enter.native="login"
    >
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          native-type="submit"
          style="width: 100%;background: #505458;border: none"
          @click="login"
        >登录</el-button>
      </el-form-item>
       <el-link type="primary" href="/register" >还没注册？点击注册！</el-link>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      responseResult: []
    };
  },
  methods: {
    login() {
      var _this = this;
      console.log(this.$store.state)
      this.axios
        .post("/login", {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(res => {
          if (res.data.code === 200) {
            _this.$store.commit("login", _this.loginForm); //第一个参数是要触发的方法，第二个是传递的参数

            //获取登陆前页面的路径并跳转，如果该路径不存在，则跳转到首页
            var path = this.$route.query.redirect;//注意是$route没有r
            this.$router.push({
              path: path === "/" || path === undefined ? "/index" : path
            }).catch(() => {});

            //this.$router.push({ path: "/index" });
          }
        })
        .catch(err => {
          console.log(111111)
        });
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
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>

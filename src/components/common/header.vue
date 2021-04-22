<template>
  <div class="head">
    <el-row :gutter="20">
      <el-col :span="8">
        <p class="slogan">点外卖吧！</p>
      </el-col>
      <el-col :span="8">
        <div style="margin-top: 8px;">
          <el-input
            placeholder="请输入搜索内容"
            v-model="keywords"
            class="input-with-select search"
            @keyup.enter.native="search"
          >
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div v-if="login" class="tx">
          <el-popover placement="bottom" width="100" trigger="hover">
            <div class="info">
              <div class="geren">
                <P class="uname">{{username}}</P>
                <el-link
                  href="/my_detail"
                  target="_blank"
                  class="el-icon-user-solid"
                  :underline="false"
                >个人中心</el-link>
              </div>
              <div class="tuichu">
                <el-link class="el-icon-switch-button" @click="logout" :underline="false">退出登陆</el-link>
              </div>
            </div>
            <div class="sl" slot="reference">
              <el-avatar :src="info.img"></el-avatar>
            </div>
          </el-popover>
        </div>
        <div class="click-login" v-else-if="login===false" @click="gologin()">点击登陆 / 注册</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      keywords: "",
      login: false,
      //个人信息
      info: [],
      username: ""
    };
  },
  computed: {},
  methods: {
    //搜索
    search() {
      console.log(this.keywords);
    },
    //退出登陆
    logout() {
      window.localStorage.clear();
      this.login = false;
      this.$router.go(0);
    },
    gologin() {
      this.$router.push({
        path: "login"
      });
    }
  },
  created() {
    //判断是否登陆
    if (this.$store.state.user.username) {
      //方法一登陆成功获取头像等个人信息
      this.axios
        .get("ms", {})
        .then(res => {
          this.info = res.data.info;
          //a
        })
        .catch(err => {});
      //方法二直接从缓存读取或者用上面的方法向后台读取
      this.username = this.$store.state.user.username;
      this.login = true;
      console.log(this.$store.state.user.username);
    } else {
      console.log("没登陆");
      this.login = false;
    }
  }
};
</script>

<style scoped lang="scss">
.uname {
  padding: 0;
  color: #303133;
  margin-top: 8%;
  margin-bottom: 8%;
  padding-bottom: 5%;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 1px solid #e4e7ed;
}
.slogan {
  font-weight: 700;
}
.click-login {
  cursor: pointer;
  margin-top: 15px;
  color: #303133;
  font-weight: 600;
}
/deep/ input.el-input__inner {
  background-color: #f2f5f6;
}

.head {
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
/deep/ .el-avatar img {
  width: 100%;
}
.tx {
  margin-top: 5px;
}
.sl {
  margin-left: 40%;
  width: 40px;
}
.info {
  text-align: center;
  div {
    margin: 2%;
  }
}
</style>

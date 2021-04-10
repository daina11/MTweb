<template>
  <div class="head">
    <el-row :gutter="20">
      <el-col :span="6">
        <p>点外卖吧！</p>
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
        <div v-if="login">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div v-else-if="login===false">点击登陆 / 注册</div>
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
      login: false
    };
  },
  computed: {},
  methods: {
    //搜索
    search() {
      console.log(this.keywords);
    }
  },
  created() {
    //判断是否登陆
    if (this.$store.state.user.username) {
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
/deep/ input.el-input__inner {
  background-color: #f2f5f6;
}
span {
  pointer-events: none;
}
.head {
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
</style>

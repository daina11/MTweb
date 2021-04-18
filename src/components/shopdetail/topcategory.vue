<template>
  <div class="main">
    <el-row>
      <el-col :span="4" v-for="(o, index) in 9" :key="o" span="4">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
        </el-card>
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "topcategory",
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.main {
  margin-top: 50px;
  background-color: white;
}
.el-card {
  margin: 20px;
  border-radius: 50%;
}
/deep/ .el-card__body {
  margin: 10px;
}

.image {
  width: 100%;
  display: block;
  border-radius: 50%;
}
</style>
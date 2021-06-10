<template>
  <div class="main">
    <el-container >
      <el-header>商店名字</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main class="c-main">Main</el-main>
          <el-footer><vcart></vcart></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import vcart from '../common/cart'
export default {
  name: "shopmain",
  data() {
    return {};
  },
  components: {
      vcart,
  },
  created() {}
};
</script>
<style scoped lang="scss">
.main {
  margin-top: 5%;
}
.c-main{
    min-height: 400px;
}
.el-container{
    height: 100%;
}
/deep/.el-footer{
    height: 100% !important;
}
</style>
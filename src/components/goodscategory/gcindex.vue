<template>
<div>
  <el-container>
      <el-header><gctop></gctop></el-header>
      <el-main><gcmain></gcmain></el-main>
  </el-container>
  <cart></cart></div>
</template>
<script>
import gctop from "./gctop"
import gcmain from "./gcmain"
import cart from "../common/cart"
export default {
  data() {
    return {
      id: this.$route.query.id
    };
  },
  components: {
      gctop,
      gcmain,
      cart
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="scss">
.el-header{
     border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    height: 100% !important;
}
.el-container{
    min-height: 500px;
    max-height: 500px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    margin: 3% 15%;
    background-color: #ffffff
}


</style>
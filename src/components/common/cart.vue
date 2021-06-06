<template>
  <div class="cart">
    <div class="text-a">
      <i class="el-icon-shopping-cart-2">:</i>
      <div class="sum">¥{{price}}</div>
      <div>
        <el-button round @click="jiezhang">去结账</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cart",
  props: ["price"],
  data() {
    return {};
  },
  methods: {
    jiezhang() {
      if (this.$store.state.user.username) {
        if (this.price === 0) {
          this.$message.warning("购物车为空！");
        } else {
          this.$router.push({
            path: "/payindex",
          });
        }
      } else {
        this.$message.error("请先登陆！");
      }
    }
  }
};
</script>
<style scoped lang="scss">
.cart {
  margin: 0;
  width: 100%;
  height: 100px;
  background: #303133;
  .text-a {
    display: flex;
    float: right;
    width: auto;
    height: 100%;
    color: #ffffff;
    background-color: #e6a23c;
    font-size: 60px;
    padding-left: 3%;
    padding-right: 3%;
    .sum {
      float: none;
      margin: auto;
    }
    .el-icon-shopping-cart-2 {
      float: left;
      margin: auto;
      padding-bottom: 5%;
      margin-left: -55%;
    }
    .el-button {
      margin-left: 20%;
      background-color: #303133;
      color: #ffffff;
      border: 0;
    }
  }
}
</style>
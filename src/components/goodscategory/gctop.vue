<template>
  <div class="top">
    <div class="list" v-for="(item,index) in data" :key="index">
      <el-image class="img" :src="item.img" fit="cover"></el-image>
      <div>
        <span class="demonstration">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "gctop",
  data() {
    return {
      data: [],
      id: this.$route.query.id
    };
  },
  components: {},
  created() {
    this.axios
      .get("/ms", {})
      .then(res => {
        this.data = res.data.fenlei;
      })
      .catch(err => {});
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.top {
  display: block;
}
/deep/ .el-image__inner {
  border-radius: 50%;
}
.list {
  
  .img {
    &:hover{
    background-color:  rgba(0, 0, 0, 0.05);
  }
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 10px;
  }
  cursor: pointer;
  margin: 0 1%;
  padding: 10px 0;
  text-align: center;
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}

</style>
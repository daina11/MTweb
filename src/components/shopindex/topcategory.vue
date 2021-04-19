<template>
  <div class="main">
    <el-row>
      <el-col :span="3" v-for="(item,index) in data.slice(0,8)" :key="index" :offset="2">
        <el-card :body-style="{ padding: '0px' }" shadow="hover"  @click.native="todetail(item.id)">
          <img
            :src="item.img"
            class="image"
          />
        </el-card>
        <div style="padding: 14px;" class="name">
          <span >{{item.name}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "topcategory",
  data() {
    return {
      data:[]
    };
  },
    created() {
    this.axios
      .get("ms", {})
      .then(res => {
        this.data = res.data.fenlei;
        //a
      })
      .catch(err => {});
  },
   methods: {
      todetail(id) {
      this.$router.push({
        path: "sdindex",
        query: { id: id }
      });
      },
   }
};
</script>
<style scoped lang="scss">
.main {
  padding-left: 5%;
  padding-bottom: 5%;
  margin-top: 50px;
  background-color: white;
}
 .name{
    font-size: 20px;
  }
.el-card {
  margin-top: 50px;
  border-radius: 50%;
 
}
/deep/ .el-card__body {
  margin: 5px;
}

.image {
  height:170px;
  width: 100%;
  display: block;
  border-radius: 50%;
}
</style>
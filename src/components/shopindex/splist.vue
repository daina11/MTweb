<template>
  <div class="main">
    <el-row>
      <el-col :span="4" v-for="(item,index) in data" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img
            :src="item.img"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">asadadads</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "splist",
  data() {
    return {
      data:[]
    };
  },
     created() {
    this.axios
      .get("ms", {})
      .then(res => {
        this.data = res.data.goods;
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
.main{
margin-top: 50px;
    background-color: white
}
.el-card{
   margin: 20px;
   
}
/deep/ .el-card__body{
    margin: 10px;
}
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    height: 160px;
    width: 100%;
    display: block;
  }


  

</style>
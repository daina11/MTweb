<template>
  <div class="main">
    <el-row>
      <el-col :span="4" v-for="(item,index) in data" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="item.img" class="image" />
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
    <div class="more">
      <el-button type="primary" round v-if="page<page_count" @click="loadMore">加载更多...</el-button>
      <el-button type="info" round plain disabled v-else>没有更多了</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "splist",
  data() {
    return {
      data: [],
      page: 1,
      page_count: 333
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
    loadMore() {
      this.page += 1;
      this.axios
        .get("ms", {
          //把页数传递到后台
          page: this.page
        })
        .then(res => {
          this.data= this.data.concat(res.data.goods);
        });
    }
  }
};
</script>
<style scoped lang="scss">
.more {
  padding: 20px;
}
.main {
  margin-top: 50px;
  background-color: white;
}
.el-card {
  margin: 20px;
}
/deep/ .el-card__body {
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
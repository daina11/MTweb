<template>
  <div class="main">
    <el-row>
      <el-col :span="4" v-for="(item,index) in data" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="item.goodimg" class="image" />
          <div style="padding: 14px;">
            <span class="sname">{{item.name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{item.location}}</time>
              <span class="money">￥{{item.price}}起</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="more">
      <el-button type="primary" round v-if="page<page_count-1" @click="loadMore">加载更多...</el-button>
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
      page: 0,
      page_count: '',

    };
  },
  created() {
    var that = this
    this.axios
      .post("getIndexGoodsList", {
        page: this.page
      })
      .then(res => {
        this.data = res.data.content;
        this.page_count=res.data.totalPages;
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
        .post("getIndexGoodsList", {
          //把页数传递到后台
          page: this.page
        })
        .then(res => {
          this.data = this.data.concat(res.data.content);
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
  max-width: 50%;
  float: left;
  font-size: 13px;
  color: #606266;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.money {
  margin-top: 2%;
  margin-left: 6%;
  color: #f56c6c;
  font-size: 20px;
}
.clearfix {
  display: flex;
  line-height: 20px;
  margin: 5px;
}
.sname {
  color: #303133;
  font-size: 18px;
  font-weight: 500;
}
.image {
  height: 160px;
  width: 100%;
  display: block;
}
</style>
<template>
  <div>
    <div class="main" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
      <el-row class="row" v-for="(item,index) in goods" :key="index">
        <el-col :span="24">
          <div class="g">
            <el-image :src="item.img" fit="fit"></el-image>
            <div class="text">
              <div class="g-name">{{item.name}}</div>
              <div class="g-store">还剩{{item.store}}份</div>
              <div class="g-location">{{item.location}}</div>
            </div>
            <div class="add" tabindex="0" outline="0" @blur="handleChange">
              <div class="price">¥{{item.money}}</div>
              <span class="number">数量：</span>
              <el-input-number
                @blur="handleChange"
                @change="store(index,item.money)"
                v-model="list[index]"
                size="mini"
                :min="0"
                :max="item.store"
                label="加入购物车"
              ></el-input-number>
            </div>
          </div>
        </el-col>
      </el-row>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "gcmain",
  data() {
    return {
      id: this.$route.query.id,
      count: 10,
      loading: false,
      goods: {},
      list: [],
      cart: 0,
      sumlist: []
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      var that = this;
      return that.loading || that.noMore;
    }
  },
  created() {
    this.axios
      .get("ms", {})
      .then(res => {
        this.goods = res.data.goods;
      })
      .catch(err => {});
  },
  methods: {
    store(v, p) {
      //获取到的当前商品数量和价格
      //用数组计算购物车的价格
      this.sumlist[v] = this.list[v] * p;
      let s = 0;
      this.sumlist.forEach(item => {
        s += item;
      });
      this.cart = s;

      //这个传值不涉及后台请求只是实时更新页面购物车的值 失去焦点后请求后台在handleChange（）
      this.$emit("sumprice", this.cart);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
    handleChange() {
      //存入到购物车
      //失去焦点后请求 减少请求次数
      this.$emit("sumprice", this.cart);
    }
  }
};
</script>
<style scoped lang="scss">
.g {
  .add {
    display: flex;
    line-height: 30px;
    text-align: center;
    margin-top: 60px;
    .price {
      padding-right: 20%;
      font-size: 25px;
      color: #ff2d2d;
    }
    .number {
      width: 80px;
      text-align: right;
    }
    .el-input-number {
    }
  }
  .el-image {
    height: 100px;
    width: 100px;
  }
  .text {
    margin-right: 35%;
    height: 100px;
    width: 20%;
    .g-name {
      font-size: 18px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    .g-store {
      font-size: 15px;
      font-weight: 100;
    }
    .g-location {
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    div {
      padding-left: 20%;
      text-align: left;
      margin: 6%;
      font-size: 16px;
      line-height: 17px;
    }
  }
  padding: 1%;
  display: flex;
}
.main {
  padding: 1%;
  background-color: #f2f5f6;
}
.row {
  padding: 0 10%;
  margin: 1%;
  background-color: #ffffff;
}
</style>
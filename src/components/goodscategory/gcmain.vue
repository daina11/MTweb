<template>
  <div>
    <div class="tilte_top" v-show="catename===''">{{catetoryname}}</div>
    <div class="tilte_top" v-show="catename!='null'">{{catename}}</div>
    <div class="main" v-infinite-scroll="load" :infinite-scroll-disabled="loading">
      <el-row class="row" v-for="(item,index) in goods" :key="index">
        <el-col :span="24">
          <div class="g">
            <el-image :src="item.goodimg" fit="fit"></el-image>
            <div class="text">
              <div class="g-name">{{item.name}}</div>
              <div class="g-store">还剩{{item.store}}份</div>
              <div class="g-location">地点: {{item.shop.location}}</div>
            </div>
            <div class="add" tabindex="0" outline="0" @blur="handleChange">
              <div class="price">¥{{item.price}}</div>
              <span class="number">数量：</span>
              <el-input-number
                @blur="handleChange"
                @change="store(index,item.price,item.id,item.name)"
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
      <p v-else="loading=='true'">没有更多了</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "gcmain",
  props: ["flid","catename","good"],
  data() {
    return {
      goods:this.good,
      fid:this.flid,
      cid: this.$route.query.id,
      catetoryname:'',
      loading: false,
     
      list: [],
      cart: 0,
      sumlist: [],
      page: 0,
      page_count: "",
      //购物清单信息
      item:[[]],
    };
  },
  computed: { 
  },
  created() {
    this.axios
      .post("getGoodsListBycid", {
        cid:parseInt(this.cid) ,
        page:0
      })
      .then(res => {
        this.goods = res.data.content;
        this.page_count = res.totalPages;
      })
      .catch(err => {});
       this.axios
      .post("getShopcategoryByid", {
        id:this.cid,
      })
      .then(res => {
        this.catetoryname=res.data.name
      })
      .catch(err => {});
  },
// 监听父组件传值的变化实时改变子组件的值
watch: {
  good: {
　　　handler (newValue, oldValue) {
      this.goods = newValue
    },
　　　　deep: true
　　},
flid:{
  handler(){
    this.page=0
  }
}
},

  methods: {
    store(v, p,id,n) {
      //获取到的当前商品数量和价格
      //用数组计算购物车的价格
      this.sumlist[v] =this.list[v] * p;
      let s = 0;
      this.sumlist.forEach(item => {
        s += item;
      });
      this.cart = s.toFixed(2);

      var user=JSON.parse(window.localStorage.user)
      let a={"goodsid":id,"goodsprice":p,"goodsnumber":this.list[v],"goodsamout":this.sumlist[v],"uid":user.id,"goodname":n}
      this.item[v]=a
      console.log(n)
      console.log(this.item)
      //这个传值不涉及后台请求只是实时更新页面购物车的值 失去焦点后请求后台在handleChange（）
      this.$emit("sumprice", this.cart);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.page+=1
        this.axios
          .post("getGoodsListBycid", {
            cid:parseInt(this.flid),
            page: this.page
          })
          .then(res => {
             this.page_count = res.totalPages;
            if (res.data.empty) {
              this.loading = false;
            } else {
              this.goods = this.goods.concat(res.data.content);
             
            }
          })
          .catch(err => {});
        this.loading = false;
      }, 1000);
    },
    handleChange() {
      //存入到购物车
      //失去焦点后请求 减少请求次数
      this.$emit("sumprice", this.cart);
      console.log(this.item)
      this.axios.post('insertOrderItem',{
        data:this.item
      }).then(res=>{

      }).catch(err=>{

      })
    }
  }
};
</script>
<style scoped lang="scss">
.tilte_top{
  font-size: 30px;
  margin-bottom: 2%;
}
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
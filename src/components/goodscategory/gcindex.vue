<template>
<div>
  <el-container>
      <el-header><gctop @getcid="getcid"  @getname="getname"  @getgoods="getgoods"></gctop></el-header>
      <el-main><gcmain @sumprice="sumprice" :flid="cid" :catename="cname" :good="goods"></gcmain></el-main>
  </el-container>
  <cart :price="pricesum" ></cart>
  </div>
</template>
<script>
import gctop from "./gctop"
import gcmain from "./gcmain"
import cart from "../common/cart"
export default {
  data() {
    return {
      id: this.$route.query.id,
      pricesum:0,
      cid:'',
      cname:'',
      goods:{},
      page:0,
    };
  },
  components: {
      gctop,
      gcmain,
      cart,
  },
  created() {
    //  this.axios
    //   .post("getGoodsListBycid", {
    //     cid:parseInt(this.id) ,
    //     page: this.page
    //   })
    //   .then(res => {
    
    //     this.goods = res.data.content;
    //   })
    //   .catch(err => {});
  },
  methods: {
    sumprice(data){
      this.pricesum=data
     
    },
    getcid(cidd){
      this.cid=cidd
      this.axios
      .post("getGoodsListBycid", {
        cid:parseInt(cidd) ,
        page: this.page
      })
      .then(res => {
        this.goods = res.data.content;
         console.log(1111111)
        console.log(this.goods)
      })
      .catch(err => {});
      console.log(cidd)
      console.log(2222222)
      console.log(this.goods)
    },
    getgoodlist(cidd){

    },
    getname(name){
        this.cname=name
    },
    getgoods(g){
      this.goods=g
    }
  }
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
    margin: 3.1% 15%;
    background-color: #ffffff
}

</style>
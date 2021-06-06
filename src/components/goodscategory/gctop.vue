<template>
  <div class="top">
    <div class="list" v-for="(item,index) in data" :key="index" @click="getmain(item.id)">
      <el-image class="img" :src="item.picture" fit="cover"></el-image>
      <div>
        <span class="demonstration" >{{item.name}}</span>
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
      id: this.$route.query.id,
      cname:"",
      goods:{}
    };
  },
  components: {},
  created() {
     this.$emit("getcid", this.id);
    //顶部分类加载
    this.axios
      .post("ShopCategoryAll", {
       
      })
      .then(res => {
       this.data = res.data.content;
      })
      .catch(err => {});
  },
  methods: {
    getmain(iid){
        this.$emit("getcid", iid);
        this.axios
        .post('getShopcategoryByid',{
          id:iid
        }).then(res=>{
           this.cname=res.data.name
         this.$emit("getname", this.cname);
        }).catch(err=>{

        });
        this.axios
      .post("getGoodsListBycid", {
        cid:parseInt(iid) ,
        page: 0
      })
      .then(res => {
        this.goods = res.data.content;
         this.$emit("getgoods", this.goods);
      })
      .catch(err => {});
       
    }
  }
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
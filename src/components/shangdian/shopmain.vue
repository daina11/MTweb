<template>
  <div class="main">
    <el-container>
      <el-header class="header"></el-header>
      <el-container>
        <el-aside width="200px">
          <el-tabs tab-position="left" style="height: 200px;" @tab-click="getgoodlist">
            <el-tab-pane :sid="0" label="所有"></el-tab-pane>
            <el-tab-pane
              :sid="item.id"
              :label="item.name"
              v-for="(item,index) in citem"
              :key="index"
            ></el-tab-pane>
          </el-tabs>
        </el-aside>
        <el-container>
          <el-main class="c-main">
            <shopg :id="sgid" @sumprice="sumprice" :sssid="ssid"></shopg>
          </el-main>
          <el-footer>
            <vcart :price="pricesum"></vcart>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import vcart from "../common/cart";
import shopg from "./shopgood";
export default {
  name: "shopmain",
  props: ["sid"],
  data() {
    return {
      sgid: 0,
      pricesum: 0,
      ssid: this.sid,
      citem: []
    };
  },
  components: {
    vcart,
    shopg
  },
  created() {
    this.axios
      .post("getSgCategory", {
        sid: parseInt(this.ssid)
      })
      .then(res => {
        this.citem = res.data;
      })
      .catch({});
  },
  methods: {
    getgoodlist(tab, event) {
      console.log(tab.$attrs.sid);
      this.sgid = tab.$attrs.sid;
    },
    sumprice(data){
      this.pricesum=data
    },
  }
};
</script>
<style scoped lang="scss">
.main {
  margin-top: 5%;
  background-color: #ffff;
  .header {
    font-size: 30px;
    font-weight: 600;
  }
}
.c-main {
  min-height: 400px;
  max-height: 400px;
}
.el-container {
  height: 100%;
}
/deep/.el-footer {
  height: 100% !important;
}
</style>
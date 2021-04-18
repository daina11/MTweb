<template>
  <div class="main">
    <el-row>
      <el-col :span="4" v-for="(o, index) in 9" :key="o" span="4">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
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
  name: "topcategory",
  data() {
    return {};
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
    width: 100%;
    display: block;
  }


  

</style>
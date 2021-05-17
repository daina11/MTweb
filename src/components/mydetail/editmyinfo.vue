<template>
  <div class="edinfo">
    <div class="text">基本信息</div>
    <div class="av">
      <el-avatar :src="photo" class="avatar"></el-avatar>
      <!-- <img :src="geren.avatar" alt /> -->
      <el-upload
        action="http://localhost:8081/api/upavatar"
        :show-file-list="false"
        :accept="'image/*'"
        :on-success="handleSuccess"
      >
        <el-button
          type="primary"
          native-type="submit"
          style="width: 100%;background: #505458;border: none"
        >上传头像</el-button>
      </el-upload>
    </div>

    <!-- 信息编辑框 -->
    <div class="inForm">
    <el-form label-position="right" label-width="80px" :model="infoForm" >
      <el-form-item label="名称">
        <el-input v-model="infoForm.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="infoForm.email"></el-input>
      </el-form-item>
      <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
  </el-form-item>
    </el-form>
  </div>
  </div>
</template>
<script>
export default {
  name: "edinfo",
  data() {
    return {
      photo: "",
      infoForm:{
        username:'',
        email:''
      }
    };
  },
  methods: {
    //上传成功后修改
    handleSuccess: function(result) {
      this.axios
        .post("/editinfo", {
          username: this.$store.state.user.username
        })
        .then(res => {
          if (res.data.username != null) {
            window.localStorage.setItem("user", JSON.stringify(res.data));
            // this.$store.commit("login", _this.loginForm);
          } else {
          }
        })
        .catch(err => {});
      this.photo = result;
    }
    ,
    //提交修改
    submitForm(){
      var user = JSON.parse(window.localStorage.user);
      this.axios
        .post("/edinfoForm", {
          username: this.infoForm.username,
          id: user.id,
          email:this.infoForm.email
        })
        .then(res=>{
             if (res.data!='') {
                this.$message({
                  message: "修改信息成功！",
                  type: "success"
                });
               window.localStorage.setItem("user", JSON.stringify(res.data));
              } else {
                this.$message.error("用户名已存在，请重新输入！");
              }
        }).catch(err=>{})
    }
  },
  created() {
    var user = JSON.parse(window.localStorage.user);
    this.photo = user.photo;
    this.infoForm.username=user.username
    this.infoForm.email=user.email
  }
};
</script>
<style scoped lang="scss">
.edinfo {
  background-color: #ffffff;
  .text {
    font-size: 25px;
    font-weight: 500;
    padding: 1%;
    border-bottom: 1px solid #f2f5f6;
  }
  .av {
    padding: 1%;
  }
  .inForm{
    margin: 0 auto;
    padding: 1%;
    width: 30%;
  }
}
</style>
<template>
    <div>
        <div style="">
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
    </div>
</template>
<script>
export default {
    name:'edinfo',
    data(){
        return{
        photo:'' 
        }
    },
     methods: {
       //上传成功后修改
    handleSuccess: function(result) {
      this.axios.post("/editinfo",{
        username:this.$store.state.user.username
      }).then(res=>{
        if(res.data.username!=null){
          window.localStorage.setItem('user', JSON.stringify(res.data))
          // this.$store.commit("login", _this.loginForm);
         
        }else{

        }
      }).catch(err => {
        
        });
      this.photo=result
    }
    },
    created(){
      
      var user=JSON.parse(window.localStorage.user)
      this.photo= user.photo;
    }
}
</script>
<style scoped lang="scss">

</style>
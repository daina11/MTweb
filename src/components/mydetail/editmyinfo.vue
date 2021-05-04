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
    handleSuccess: function(result) {
      console.log(result)
      this.photo=result
    }
    },
}
</script>
<style scoped lang="scss">

</style>
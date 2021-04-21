<template>
    <div class="footer">
        <el-row>
          <h1>@copyright <span>daina</span></h1> 
        </el-row>
    </div>
</template>
<script>
export default {
    name:'vfooter',
    data(){
        return{

        }
    }
}
</script>
<style scoped lang="scss">
.footer{
    width: 100%;
    height: 100px;
    background-color: white;
}
h1{
    margin-top: 2%;
    color: #909399
}
span{
    color: #606266
}
</style>
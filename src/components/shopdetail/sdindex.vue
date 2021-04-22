<template>
    <div>
        {{id}}
          <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">hover 激活</el-button>
  </el-popover>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id: this.$route.query.id,
        }
    },
     created() {

     }
}
</script>
<style scoped>

</style>
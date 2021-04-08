<template>
  <div>
    <el-menu
      :default-active="currentPath"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1300px">
      <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">美团</span>
      <el-input
        placeholder="快速搜索..."
        prefix-icon="el-icon-search"
        size="medium"
        style="width: 300px;position:absolute;margin-top: 12px;right: 18%"
        v-model="keywords">
      </el-input>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
      
        keywords: ''
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  span {
    pointer-events: none;
  }

</style>

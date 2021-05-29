<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import headerd from '@/components/common/header'
export default {
  name: 'App'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
   background-color: #f2f5f6;
}
#app {
  overflow:-Scroll;overflow-x:hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
 font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>

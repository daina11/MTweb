<template>
  <div class="main">
    <paymain></paymain>
  </div>
</template>
<script>
import paymain from './paymain'
export default {
  name: "payindex",
  data() {
    return {};
  },
  components: {
   paymain
  },
  created() {}
};
</script>
<style scoped lang="scss">
.main{
  margin: 0 10%;
}
</style>
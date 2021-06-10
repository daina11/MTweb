<template>
  <div class="main">
    <smian></smian>
  </div>
</template>
<script>
import smian from './shopmain'
export default {
  name: "shopindex",
  data() {
    return {};
  },
  components: {
    smian,
  },
  created() {}
};
</script>
<style scoped lang="scss">
.main{
  margin: 0 10%;
}
</style>
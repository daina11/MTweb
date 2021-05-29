<template>
  <div>
    <div class="main">
    <topcategory></topcategory>
    <splist></splist></div>
    <vfooter class="footer"></vfooter>
  </div>
</template>
<script>
import vfooter from '../common/footer'
import topcategory from "./topcategory";
import splist from "./splist";
export default {
  name: "spindex",
  data() {
    return {};
  },
  components: {
    topcategory,
    splist,
    vfooter
  },
  created() {}
};
</script>
<style scoped lang="scss">
.footer{
  margin-top: 50px;
}
.main{
  margin: 2%;
}
.bd{
  margin-bottom: 5px;
}
</style>
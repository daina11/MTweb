<template>
  <div>
    <topcategory></topcategory>
    <splist></splist>
  </div>
</template>
<script>
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
  },
  created() {}
};
</script>
<style scoped lang="scss">
</style>
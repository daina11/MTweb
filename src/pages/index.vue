<template>
  <div>{{mg}}</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      mg: {}
    };
  },
  created() {
    this.axios
      .get("ms", {})
      .then(res => {
        this.mg = res.data.fenlei;
        //a
      })
      .catch(err => {});
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
</style>

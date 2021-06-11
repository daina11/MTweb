<template>
  <div class="main">
    <smian :sid="id"></smian>
  </div>
</template>
<script>
import smian from './shopmain'
export default {
  name: "shopindex",
  
  data() {
    return {
      id:this.$route.query.id,
       pricesum:0,
    };
  },
  components: {
    smian,
  },
  created() {

  },
  methods:{
     sumprice(data){
      this.pricesum=data
    },
  }
};
</script>
<style scoped lang="scss">
.main{
  margin: 0 8%;

 
}
</style>
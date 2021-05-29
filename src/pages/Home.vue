<template>
    <div>
        <headerd></headerd>
         <router-view class="bd"/>
         <!-- <vfooter></vfooter> -->
         <backtop></backtop>
    </div>
</template>
<script>
import headerd from '../components/common/header'
import vfooter from '../components/common/footer'
import backtop from '../components/common/backtop'
export default {
    name:'home',
    components: {headerd,
                vfooter,
                backtop
    },
    
}
</script>
<style>
  .nav-menu {
    /*margin-bottom: 40px;*/
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  }
  /* .bd{
    margin: 2%;
  } */
</style>
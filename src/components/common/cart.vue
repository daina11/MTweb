<template>
    <div class="cart">
          <div class="text"><i class="el-icon-shopping-cart-2">:</i>
          <div class="sum">¥12</div>
          <div><el-button type="warning" round>去结账</el-button></div>
          </div>
          
    </div>
</template>
<script>
export default {
    name:'cart',
    data(){
        return{

        }
    }
}
</script>
<style scoped lang="scss">
.cart{
    margin: 0;
    width: 100%;
    height: 100px;
    background: #ffffff;
    .text{
        display: flex;
        float: right;
        width: auto;
        height: 100%;
        color: #ffffff;
        background-color: 	#606266;
        font-size: 60px;
        padding-left: 3%;
        padding-right: 3%;

        .sum{
      
            float: none
        }
       
        .el-icon-shopping-cart-2{
            float: left;
            margin: 0 2%;
        }
    }
}

</style>
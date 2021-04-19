<template>
    <div>
        {{id}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            id: this.$route.query.id,
        }
    },
     created() {

     }
}
</script>
<style scoped>

</style>
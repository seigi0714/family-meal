<template>
  <div>
    <AppHeader />
    <nuxt />
  </div>
</template>

<script>
import  AppHeader  from '~/components/organisms/AppHeader.vue'
export default {
  components:{
     AppHeader
  }  
}
</script>
<style lang="scss">
body{
  margin: 0
}
section.index{
  padding-top: 50px;
}
</style>
<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
   <!-- <router-view></router-view>-->
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from './components/project/MainTabbar'

export default ({

  name: 'App',

  components: {
    MainTabbar,
  },


});
</script>
<style scoped>
  @import "./assets/css/base.css";
</style>

<template>
    <div class="nav-bar">

      <div class="nav-left"><slot name="left"></slot></div>
      <div class="nav-middle"><slot name="middle"></slot></div>
      <div class="nav-right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;

  }
  .nav-left,.nav-right{
    width: 60px;

  }
  .nav-middle{
    flex: 1;

  }
</style>

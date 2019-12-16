<template>
    <div class="toTop" >
      <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackToTop",

    }
</script>

<style scoped>
.toTop{
  position: fixed;
  bottom: 65px ;
  right: 10px;

}
  .toTop img{
    width: 43px;
    height: 43px;

  }
</style>

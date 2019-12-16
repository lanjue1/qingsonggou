<template>
 <div class="checkIcon" >
   <img src="~assets/img/common/check1.png" alt="" v-if="checked" >
   <img src="~assets/img/common/uncheck.png" alt="" v-else>
 </div>
</template>

<script>
    export default {
      name: "checkIcon",
      props:{
        checked:Boolean,

      },
      mounted(){
        console.log(typeof this.checked);
        console.log(this.checked);
      },
      watch:{
        checked(newValue){
          console.log(newValue);
        }
      }
    }
</script>

<style scoped>
  .checkIcon img{
    width: 25px;
    height:25px;

  }

</style>

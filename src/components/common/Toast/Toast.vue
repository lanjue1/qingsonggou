<template>
    <div v-show="isShow" class="Toast">
      <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
      name: "Toast",
      data(){
        return{
          message:'',
          isShow:false,
        }
      },
      methods:{
        show(message,duration=2500){
          this.isShow=true;
          this.message=message;
          setTimeout(()=>{
            this.isShow=false;
            this.message=''
          },duration)

        }
      }
    }
</script>

<style scoped>
  .Toast{
    padding: 20px 20px;
    background-color: rgba(0,0,0,.7);
    color: white;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 200;
  }
</style>

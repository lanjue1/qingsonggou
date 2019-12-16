<template>
  <div class="addCount" >
    <img src="~/assets/img/common/subtract.png" @click="subtract"></img>
    <div @input="NumChanged">{{Num}}</div>
    <img src="~/assets/img/common/add.png" @click="add"></img>
  </div>
</template>

<script>
    export default {
        name: "Counter",

      props:{
        maxGoods:{
          type:Number,
          default:100
        }
      },
      data:function () {
        return{
          Num:1
        }
      },
      methods:{
        subtract(){
          console.log('-');
          if (this.Num > 1) {
            this.Num=this.Num-1
          } else {
            this.Num=1
          }
          this.$bus.$emit('CountNumber',this.Num)
        },
        add(){
          console.log('+');
          if (this.Num < 100) {
            this.Num=this.Num+1
          } else {
            this.Num=this.maxGoods
          }
          this.$bus.$emit('CountNumber',this.Num)
        },
        NumChanged(){

        }
      }
    }
</script>

<style scoped>
  .addCount{
    margin-left: 25px;
    font-size: 18px;
    color: #ff5777;
    display: flex;
    text-align: center;

    right: 15px;
  }
  .addCount div{
    margin:0 10px;
    width: 20px;

  }
  .addCount img{
    width: 20px;
    height: 20px
  }
</style>

<template>
    <div class="detailInfo">
      <div class="desc">
        <div class="start line"></div>
        <div class="infoDesc">{{DetailInfo.desc}}</div>
        <div class="end line"></div>
      </div>

      <div class="detailImage" v-for="item in DetailInfo.detailImage" >

        <img :src="item" alt="" @load="imgLoad">

      </div>
    </div>


</template>

<script>
    export default {
        name: "DetailImgInfo",
      props:{
        DetailInfo:Object,
      },
      data:function(){
          return{
            counter:0,
            imgLength:0
          }
      },
      methods:{
        imgLoad(){
          this.counter+=1
          if(this.counter===this.imgLength){
            this.$emit('imgLoad')
          }
        }
      },
      watch:{
        DetailInfo(){
          this.imgLength=this.DetailInfo.length
          //监听图片数量的变化，为避免万一拿到的是初始的DetailInfo的长度，初始赋值为空；
        }
      }
    }
</script>

<style scoped>

  .detailInfo{
    padding: 17px 0;
    border-top: 6px solid #eee;
    line-height: 1.5em;
    font-size: 16px;
    color: #777777;
  }
  .desc .line{
    position: relative;
  }
  .desc {
    padding:0 10px;
  }
  .line{
    width: 90px;
    height: 2px;
    background-color: #666666;

  }
  .desc .end{
    float: right;
  }
  .start::before,.end::after{
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    background-color: black;
  }
  .start::before {
    bottom: 0;
  }
  .end::after {
    bottom: 0;
    right: 0;
  }
  .desc .infoDesc{
    padding: 15px 0;
  }
  .detailImage{
    margin-top: 15px;
    text-align: center;
  }
  .detailImage img{
    width: 96%;
  }

</style>

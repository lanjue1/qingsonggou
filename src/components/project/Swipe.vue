<template>

  <Swiper
    v-if="banners.length>0"
    :autoPlay='autoPlay'
    :showIndicator='showIndicator'
    :interval="interval"
    :duration="duration"
  >
    <Slide v-for="(item,index) in banners" :key="index"
           @load="clickSwiper(index)" class="swipe-img"
            @click="swiperClick">
      <img :src=" item.image ||item" @load="swipeLoad"/>

    </Slide>
  </Swiper>



</template>

<script>
import Vue from 'vue';

  import { Swiper, Slide } from 'vue-swiper-component';

    export default {
        name: "Swipe",
      components: {
        Swiper,
        Slide,
      },
      props:{
        banners:Array,
        /**
        *是否自动轮播
        */
        autoPlay:{
          type:Boolean,
          default:true
        },
        /**
         * 是否显示轮播的点
         */
        showIndicator:{
          type:Boolean,
          default:true
        },
        /**
         * 每两次隔多久滚动一次
         */
        interval:{
          type:Number,
          default:3000
        },
        /**
         * 每次滚动一页需要多久
         */
        duration:{
          type:Number,
          default:500
        },
      },
      data:function(){
          return{
            emitOnce:false
          }
      },
      methods:{
        swipeLoad(){
          //console.log('swipeLoad'); 注意：这里直接$emit的话是会导出n(轮播图数) 次事件，要想节约性能要用节流阀，
          //当导出一次时，就阻止其他的事件再继续导出；
          if(!this.emitOnce){
            this.$emit('swipeLoad')
            this.emitOnce=true
          }

        },
        swiperClick(){
          this.$emit('swiperClick')
        }
      }
    }
</script>

<style scoped>
.swipe-img{

  height: 30vh;
}
  .swipe-img img{

    width: 100%;
  }

</style>

<template>
    <div id="tabbar-item" @click="itemClick">
        <!--<img src="../../assets/img/tabbar/home.png"/>-->
        <!--<div>首页</div>-->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="isActiveStyle" :class="{active:isActive}"><slot name="item-text"></slot></div>

    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
        props:{
            path:String,
            activeColor:{
                default:'#ff5777',
            }

        },
        data:function () {
            return{
                //isActive:true,
                pathList:this.path
            }
        },
        computed:{
            isActive(){
                return this.$route.path===this.pathList
          },
            isActiveStyle(){
                return this.isActive?{color:this.activeColor}:{}
            }
        },
        methods:{
            itemClick(){
               this.$router.replace(this.pathList)
            }
        }
    }
</script>

<style scoped>
#tabbar-item{
    flex: 1;
    font-size: 13px  ;
    text-align: center;
    height: 49px;

    vertical-align:middle;
}
    #tabbar-item img{
      padding-top: 6px;
        width: 24px;
        height: 24px;

    }
    .active{
      color: #ff5777;
    }
</style>

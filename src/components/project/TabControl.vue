<template>
    <div class="tab-control">

      <div v-for="(item,index) in tabList" class="tab-item" :class="{active:index===currentIndex}"
            @click="TabClick(index)">
        <span>{{item}}</span>

      </div>
    </div>
</template>

<script>
    export default {
      name: "TabControl",
      props:{
        tabList:Array,
      },
      data:function () {
        return{
          currentIndex:0
        }
      },
      methods:{
        TabClick(Index){
          this.currentIndex=Index;
          this.$emit('IndexClick',Index)
        }
      }
    }
</script>

<style scoped>
  .tab-control{

    display: flex;
    text-align: center;

    padding-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    background-color: #fffffd;
  }
.tab-item{
    flex: 1;
    height: 40px;
    line-height: 40px;

  }
  .active{
    color: #ff5777

  }
  .active span{
    padding: 8px 5px;
    border-bottom: 3px solid #ff5777;
  }
</style>

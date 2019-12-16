<template>
    <div class="menu-scroll" >
      <div v-for="(item,index) in list"
            class="menu-item"
           :class="{active:currentIndex===index}"
           @click="menuClick(index)">
        {{item.title}}
      </div>
    </div>
</template>

<script>

    export default {
        name: "CategoryTitle",
      props:{
          list:Array,
      },
      data:function () {
        return{
          currentIndex:0,
          maitKey:3627,
          miniWallkey:0,
        }
      },
      methods:{
        menuClick(index){
          this.currentIndex=index
          this.maitKey=this.list[index].maitKey
          //console.log(this.maitKey);
         // this.$bus.$emit('getMaitKey',this.maitKey)
          this.miniWallkey=this.list[index].miniWallkey
          this.$emit('getMaitKey' ,[this.maitKey,this.miniWallkey])
        }
      }
    }
</script>

<style scoped>
.menu-scroll{
  background-color: #F6F6F6;
  width: 30%;
  text-align: center;
  color: #777;
  height: 100%;

}
.menu-item{
  line-height: 55px;

}
.active{
  border-left: 2px solid #ff5777;
  color: #ff5777;
  background-color: white;
  font-weight: bold;
}
</style>

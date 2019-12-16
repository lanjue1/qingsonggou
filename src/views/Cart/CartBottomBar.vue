<template>
  <div class="count-bar">
    <div class="all-select">
      <!--<checkIcon @click.native="totallCheck"
                  :checked="checkedB"
            ></checkIcon>
      <span class="text">全选</span>-->

    </div>

    <div class="count">合计: ￥{{totalPrice}}</div>
    <div class="settlement" ><span>结算({{settlementLength}})</span></div>
  </div>
</template>

<script>
  import checkIcon from 'components/project/checkIcon/checkIcon.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    components:{
      checkIcon,
    },

    props:{
      totalPrice:Number,
      settlementLength:Number,
      //checkedB:Boolean
    },
    methods:{
      /*totallCheck(){
        this.$emit('totallCheck')
      }*/
    },
    computed:{
      ...mapGetters(['addCarList','addCarListLength']),


    },

    /*computed:{
      ...mapGetters(['addCarList']),
      /!*settlementLength(){
        return this.addCarList.filter(item=>item.checked).length
      },*!/
      totalPrice() {
        if(this.addCarList.filter(item=>item.checked).length==0){
          return 0
        }else {
          return this.addCarList.filter((item) => item.checked).reduce((preValue, item) => {
            return preValue + item.price * item.count
          },0)
        }
        console.log(this.addCarList.filter(item => item.checked).length);
      }
        /!*if(this.settlementLength=0){
          return 0
        }*!/

        /!*return this.addCarList.filter((item)=>item.checked).reduce((preValue,item)=>{
          return preValue+item.price*item.count
        })*!/

      },

      }*/

   }
</script>

<style scoped>

  .count-bar{
    position: fixed;
    bottom: 49px;
    display: flex;
    height: 40px;
    background-color: #eee;
    text-align: center;
    width: 100%;
    padding-left:15px;
  }


  /*.all-select{
    margin-top: 10px;
     display: flex;
    text-align: center
  }
  .all-select .text{
    padding: 5px 25px 0 7px;
    font-size: 15px;
    width: 50%;
  }*/
  .count{
    margin-top: 10px;
    color: rgb(61, 58, 58);
    font-size: 18px;
  }
  .count span{
    color: #ff5777;
    font-size: 24px;
  }
  .settlement{
    width: 90px;
    background-color: #FF3F33;
    color: white;
    text-align: center;
    border-radius: 20px;
    position: fixed;
    right: 0;
  }
  .settlement span{
    line-height: 40px;
    right: 18px;
  }
</style>

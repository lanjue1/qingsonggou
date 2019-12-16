<template>
    <div class="Cart">
      <NavBar class="NavBar">
        <div slot="middle">购物车({{addCarListLength}})</div>
      </NavBar>

      <BScroll class="content" ref="Bscroll">

        <CartList v-for="(item,index) in addCarList" :GoodsCar="item" ref="CartList"
                  @CarImgLoad="CarImgLoad" @checkC="checkC"
        ></CartList>

      </BScroll>
      <CartBottomBar :totalPrice="totalPrice" :settlementLength="settlementLength"

                    ></CartBottomBar>
    </div>
</template>

<script>
  import NavBar from 'components/common/Navbar/Navbar.vue'
  import BScroll from 'components/common/ThirdComponents/Scroll.vue';

  import CartList from './CartList'
  import CartBottomBar from './CartBottomBar'

  import {mapGetters} from 'vuex'
    export default {
      name: "Cart",
      data(){
        return{
          totalPrice:0,
          settlementLength:0,

          //checkedB:false,
        }
      },
      components:{
        CartList,
        NavBar,
        CartBottomBar,
        BScroll,
      },
      activated(){
          //console.log(this.addCarList)
        //this.addCarList.forEach((e)=>console.log(e))

      },
      computed:{
        ...mapGetters(['addCarList','addCarListLength']),
        /*checkedB(){
          return !(this.addCarList.filter(item=>!item.checked).length)
          console.log(this.addCarList.filter(item => !item.checked).length);
        }*/
      },

      watch:{
        /*totalPrice(newValue){
          this.checkedB= !(this.addCarList.filter(item=>!item.checked).length)
        }*/
      },
      methods:{
        CarImgLoad(){
          this.$refs.Bscroll.refresh()
        },
        checkC(e){
          this.changeData()
        },
        changeData(){
          let Price = 0;
          let counter = 0;
          //console.log('-----',typeof this.data.cartList)
          for (let item of this.addCarList) { // object 对象用of ，如果是数组则用 in

            if (item.checked) {

              //console.log(item.price, item.count)

              counter++

              Price += item.price * item.count
             // console.log(Price, counter)
            }
          }
          this.settlementLength=counter,
           this.totalPrice=Price
        },
        /*totallCheck(){
          let E=this.addCarList.every(item=>!item.checked)
          if(this.checkedB){

            this.addCarList.forEach(e=>{
              e.checked=false
            });
            this.$refs.CartList.checked=false
            this.checkedB=false;
          }else {
            this.addCarList.forEach(e=>{
              e.checked=true
            });
            console.log(E);
            this.$refs.CartList.checked=true
            this.checkedB=true;
          }
          /!*let E=this.addCarList.every(item=>!item.checked)
          console.log(E);
          if(E){this.addCarList.forEach(e=>{
              e.checked=true
            });
            console.log(E);
            this.checkedB=true
          }else {

            this.addCarList.forEach(e=>{
              e.checked=false
            });
            this.checkedB=false
          }*!/
        }*/
      }

    }
</script>

<style scoped>
  .Cart{
    position: relative;
    height: 100vh;
  }
  .content{

    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .NavBar{
    background-color: #ff5777;
    font-size: 16px;
    color: white;
    font-weight: bold;
  }

</style>

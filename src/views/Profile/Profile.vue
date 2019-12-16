<template>


  <div class="mypro" bindtap="handleToLogin">
    <div class="my-title">
      <img class="deffaultimg" src="~assets/img/profile/avatar.png">
      <div class="login">
        <div class="loginRegister">登录/注册</div>
        <div class="memberTel">会员等级：0 </div>
      </div>

    </div>

    <div class="my-order">
      <div class="order-title">
        <span class="myorder">我的订单</span>
        <span class="moreOrder">查看更多订单  ></span>
      </div>
      <div  class="orderMenu">
        <div class="orderinfo">
          <img src="~assets/img/profile/04-dfk.png">
          <div>待付款</div>
        </div>
        <div class="orderinfo">
          <img src="~assets/img/profile/04-dfh.png">
          <div>待发货</div>
        </div>
        <div class="orderinfo">
          <img src="~assets/img/profile/04-dsh.png">
          <div>待收货</div>
        </div>
        <div class="orderinfo">
          <img src="~assets/img/profile/04-shouhou.png">
          <div>退款/售后</div>
        </div>
      </div>
    </div>

    <div class="my-tools">
      <div class="tools-item">
        <img src="~assets/img/profile/message.png">
        <span>我的消息</span>
      </div>
      <div class="tools-item">
        <img src="~assets/img/profile/pointer.png">
        <span>积分商城</span>
      </div>
      <div class="tools-item">
        <img src="~assets/img/profile/vip.png">
        <span>我的优惠券</span>
      </div>
    </div>

    <div class="my-tools">
      <div class="tools-item">
        <img src="~assets/img/profile/cart.png">
        <span>我的购物车</span>
      </div>
      <div class="tools-item">
        <img src="~assets/img/profile/app.png">
        <span>下载轻松购APP</span>
      </div>
    </div>



  </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

  .mypro{
    background-color: #F8F8F8;

  }
  .my-title{
    background-color: #ff5777;
    padding: 15px 0 20px 15px;
    color: white;
    display: flex;
    text-align: center;
  }
  .my-title .deffaultimg{
    border: 1px solid white;
    border-radius: 100%;
    width: 75px;
    height: 75px;
    background-color: white;
    margin-right:15px
  }
  .login{
    margin-top: 20px;

  }
  .login .loginRegister{
    font-size: 18px;
  }
  .login .memberTel{
    font-size: 14px;
    margin-top:10px;
  }
  .my-order{
    background-color: white;
    padding-left: 15px;

  }

  .orderinfo img{
    width: 30px;
    height: 30px;
  }

  .my-order{
    margin: 15px 0;
  }
  .order-title{
    line-height: 38px;
    border-bottom: 1px solid #eee;

  }
  .myorder{
    font-weight: bold;
  }
  .moreOrder{
    float: right;
    padding-right: 15px;
  }
  .orderMenu{
    display: flex;
    text-align: center;
    justify-content:space-evenly;
    margin: 15px 0 15px 0;

  }
  .orderMenu div{
    margin: 10px 0;
  }

  .my-tools{
    background-color: white;
    padding: 15px;
    margin-bottom: 15px ;
    font-size: 17px;
  }

  .my-tools img{
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
  .tools-item span{
    line-height: 37px;
  }
</style>

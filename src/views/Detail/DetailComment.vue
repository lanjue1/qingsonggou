<template>
    <div class="comment">

      <div class="comment-more">
        <span>宝贝评价</span>
        <span class="more">查看全部></span>
      </div>
      <div class="useR">
        <img :src="Comment.avatar" alt="">
        <span>{{Comment.uname}}</span>

      </div>
      <div class="user-style">{{Comment.style}}</div>
      <div class="content">{{Comment.content}}</div>
    </div>
</template>

<script>
    export default {
        name: "DetailComment",
      props:{
        Comment:{
          type:Object,
          default:function () {

          }
        },

      },
    }

</script>

<style scoped>
  /* components/06-detail/my-comment-info/my-comment-info.wxss */
  .comment{
    margin-top: 10px ;
    padding: 25px 15px;
    border-top:  6px solid #eee;
    color: #777;
  }
  .comment-more{
    font-size: 18px;
    padding-bottom: 15px;
    border-bottom: 1px solid #F2F2F2;
  }
  .more{
    float: right;
    color: #ff5777;
  }
  .useR{
    position: relative;
    padding: 15px 0;
  }
  .useR img{
    width: 30px;
    height: 30px;

    border: 2px solid #eee;
    border-radius: 100%;

  }
  .useR span{
    font-size: 15px;
    color: #777;
    vertical-align: baseline;
    position: absolute;
    bottom: 20px;
    padding-left: 10px;
  }
  .user-style{
    font-size: 13px;
    color: rgb(173, 170, 170);

  }
  .content{
    color: rgb(102, 100, 100);
    padding-top: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

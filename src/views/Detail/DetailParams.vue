<template>
    <div class="params">
      <div class="rule-tables" v-for="item in tables" >
        <div v-for="item1 in item" class="rule-item">
          {{item1}}
        </div>

      </div>
      <div v-for="item2 in set"  class="info-set">
        <div class="set-key">{{item2.key}}</div>
        <div class="set-value">{{item2.value}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailParams",
      props:{
        tables:Array,
        set:Array,
      },
    }
</script>

<style scoped>
  .params{
    margin-bottom: 30px;
    padding: 15px 0 20px 15px;
    border-top: 6px solid #eee;
    color: #777777;
    line-height: 43px;
  }



  .rule-tables,.info-set{
    display: flex;
    /* justify-content: center; */
    border-bottom: 1px solid #F2F2F2;

  }
  .rule-item{
    flex: 1;
    text-align: left;

  }
  .set-key{
    width: 80px;
  }
  .set-value{
    flex: 1;
    color: #ff5777;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
</style>

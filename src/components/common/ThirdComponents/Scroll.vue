<template>
    <div class="bscroll" ref="Bscroll">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll';
    export default {
        name: "Scroll",
      props:{
        probeType:{
          type:Number,
          default:0
        },
        pullUpLoad:{
          default: false
        }
      },
      data:function(){
          return{
            B:null,
          }
      },
      mounted(){
        this.B=new BScroll((this.$refs.Bscroll),{
          probeType:this.probeType, //封装组件的时候为避免引用的父组件有的不需要监听滚动距离，故这里的参数不写死为3，
          click:true,
          pullUpLoad:this.pullUpLoad, //上拉加载并不是必须的，所以要让父组件决定是否用这个功能
          scrollbar:false,   //滚动条显示
          pullDownRefresh:false,
          //下拉刷新 监听是：pullingDown事件 pullDownRefresh:{threshold: 50,stop: 20}
          //当下拉到超过顶部 50px 时，触发 pullingDown 事件 ,刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        })
        //this.B.scrollTo(0,0) //让加载时/刷新时始终在(0,0)位置

        /*--------1.监听滚动的距离，并传给父组件使用---------*/
        this.B.on('scroll',(position)=>{ // 在设置了probeType：3后，对滚动距离进行具体的监听；
          this.$emit('scrollY',position.y)
        })
        /*-------2.上拉加载更多的设置-----*/
        this.B.on('pullingUp',()=>{

          this.$emit('pullingUpLoad')
        })
      },
      methods:{
        scrollTo(x,y,time=1000){  // 自己封装一种scrollTo（）方法，有点在于可以传第三个参数时间，
          this.B &&this.B.scrollTo(x,y,time)
        },
        refresh(){
          //console.log('----');
          this.B &&this.B.refresh()
        }
      }
    }
</script>

<style scoped>

</style>

import BackToTop from 'components/common/BackToTop/BackToTop.vue';
export const BackToTopMixin={
  components:{
    BackToTop
  },
  data(){
    return{
      isShowBacktop:false,
    }
  },
  methods:{
    backToTop(){
      this.$refs.Bscroll.scrollTo(0,0)
    },

    listenShowBackToTop(y){
      this.isShowBacktop=(-y) > 1000
    }
  }

}

import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/Home.vue'


const Home =()=>import('views/Home/Home.vue')
const Category =()=>import('views/Category/Category.vue')
const Cart =()=>import('views/Cart/Cart.vue')
const Profile =()=>import('views/Profile/Profile.vue')
const Detail =()=>import('views/Detail/Detail.vue')


Vue.use(VueRouter)
const routes = [
  {path:'',redirect:'/home'},
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },

  {
    path:'/detail/:iid',
    component:Detail
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router

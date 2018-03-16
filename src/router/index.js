import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/Shouye/Shouye'
import Goods from '@/components/Detail/Goods'
import Detail from '@/components/Detail/Detail'
import Comment from '@/components/Detail/Comment'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shouye',
      component : Shouye
    } ,
    {
      path: '/goods',
      name: 'Goods',
      component : Goods
     }, 
		 {
		  path: '/detail',
		  name: 'Detail',
		  component : Detail
		 },
		 {
		  path: '/comment',
		  name: 'Comment',
		  component : Comment
		 } ,
		 {
		  path: '/cart',
		  name: 'Cart',
		  component : Cart
		 } 
  ]
})


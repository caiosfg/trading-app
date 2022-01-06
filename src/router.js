import Vue from "vue";
import Router from "vue-router";


import Home from './components/Home'
import Stocks from './components/Stocks'
import Stock from './components/Stock'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home},
    { path: '/stocks', component: Stocks },
    { path: '/stock', component: Stock },
  ]
})



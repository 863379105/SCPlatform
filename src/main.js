// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import iView from 'iview';
import VueResource from 'vue-resource';
import 'iview/dist/styles/iview.css';
import VModal from 'vue-js-modal'
import VueRouter from 'vue-router'//引用路由
import IndexPage from './pages/index'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import UsercenterPage from './pages/usercenter'
import UserinfoPage from './pages/Usercenter/userinfo'
import OrdercenterPage from './pages/Usercenter/ordercenter'
import SettingPage from './pages/Usercenter/setting'
import DetailPage from './pages/detail';
import OrderPage from './pages/order';


Vue.use(VModal)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(VueResource)

let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      path:'/login',
      component:LoginPage
    },
    {
      path:'/register',
      component:RegisterPage
    },
    {
      path:'/detail',
      component:DetailPage
    },
    {
      path:'/order',
      component:OrderPage
    },
    {
      path:'/usercenter',
      component:UsercenterPage,
      children:[
        {
          path:'userinfo',
          component:UserinfoPage,
        },
        {
          path:'ordercenter',
          component:OrdercenterPage,
        },
        {
          path:'setting',
          component:SettingPage
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})

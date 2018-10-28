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
import Cookie from "../static/plugin/cookie"
import HTTP from "../HTTP/main"
import Crpyto from 'jsencrypt'


Vue.use(VModal)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(VueResource)
Vue.prototype.HTTP = HTTP

let router = new VueRouter({
  mode  : 'history',
  routes: [
    {
      path     : '/',
      component: IndexPage
    },
    {
      path     : '/login',
      component: LoginPage
    },
    {
      path     : '/register',
      component: RegisterPage
    },
    {
      path     : '/detail',
      component: DetailPage
    },
    {
      path     : '/order',
      component: OrderPage
    },
    {
      path     : '/usercenter',
      component: UsercenterPage,
      children : [
        {
          path     : 'userinfo',
          component: UserinfoPage,
        },
        {
          path     : 'ordercenter',
          component: OrdercenterPage,
        },
        {
          path     : 'setting',
          component: SettingPage
        }
      ]
    }
  ]
})

//路由守卫
router.beforeEach((to, from, next) => {
  //进度条
  iView.LoadingBar.start()
  //如果是去登陆页，直接next
  if (to.path == "/login") {
      next()
      return
  }
  //判断当前登录身份
  let cookie = Cookie.getCookie('scp_token')
  if(cookie != null && cookie != "") {
      //有cookie
      HTTP.checkCookie(cookie).then( res => {
          if(!res.data.data) {
              //cookie无效 跳转到登录页面
              next("/login")
              return
          } else {
              //正常next
              next()
              return
          }
      })
  } else {
      //无cookie 跳转到登录页面
      next({path: "/login"})
      return
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template  : '<Layout/>'
})

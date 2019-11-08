import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/home/index'),
        meta: { noCache: true }
      }
    ]
  },
  {
    name: 'userManage',
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    meta: {
      title: '用户管理',
    },
    children: [
      {
        name: 'user',
        path: '/user/list',
        component: () => import('@/views/user/user'),
        meta: { noCache: true }
      },
    ]
  },
  {
    name: 'mapManage',
    path: '/map',
    component: Layout,
    meta: {
      title: '地图管理',
    },
    children: [
      {
        name: 'mapLabel',
        path: '/map/maplabel',
        component: () => import('@/views/map/label'),
        meta: { noCache: true }
      },

    ]
  },

  { path: '*', redirect: '/404',  component: () => import('@/views/errorPage/404') }
]

let router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
  
})
export default router

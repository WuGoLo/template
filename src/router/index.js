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
    path: '/',
    redirect: '/login',
    hidden: true
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
    name: 'mapManage',
    path: '/map',
    component: Layout,
    meta: {
      title: '地图管理'
    },
    children: [
      {
        name: 'mapLabel',
        path: 'maplabel',
        component: () => import('@/views/map/label'),
        meta: { title: '地图标注', noCache: true }
      }

    ]
  },
  {
    name: 'userManage',
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    meta: {
      title: '用户管理'
    },
    children: [
      {
        name: 'user',
        path: 'list',
        component: () => import('@/views/user/user'),
        meta: { title: '用户列表', noCache: true }
      }
    ]
  },

  { path: '*', redirect: '/404', component: () => import('@/views/errorPage/404') }
]

const router = new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
  next()
})
export default router

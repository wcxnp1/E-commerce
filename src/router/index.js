
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/Scrre'
  },
  {
    path: '/Scrre',
    name: 'Scrre',
    component: () => import('../views/ScrrenPage.vue')
  },
  {
    path: '/trend',
    name: 'trend',
    component: () => import('../views/trend/IndexTrend.vue')
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import('../views/seller/IndexTrend.vue')
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import('../views/rank/IndexTrend.vue')
  },
  {
    path: '/stock',
    name: 'stock',
    component: () => import('../views/stock/IndexTrend.vue')
  },
  {
    path: '/hot',
    name: 'hot',
    component: () => import('../views/hot/IndexTrend.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/map/IndexTrend.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

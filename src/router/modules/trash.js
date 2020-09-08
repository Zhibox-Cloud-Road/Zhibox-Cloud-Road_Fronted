/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const trashRouter = {
  path: '/tab',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Tab',
  meta: {
    title: '智箱云路',
    icon: 'tab'
  },
  children: [{
    path: 'zhi-box',
    component: () => import('@/views/tab/zhi-box'),
    name: 'ZhiBox',
    meta: {
      title: '智箱'
    }
  },
    
   {
      path: 'cloud-road',
      component: () => import('@/views/tab/cloud-road'),
      name: 'CloudRoad',
      meta: {
        title: '云路'
      }
    }, 
    {
      path: 'box-info',
      component: () => import('@/views/tab/box-info'),
      name: 'BoxInfo',
      meta: {
        title: '智箱详情'
      }
    },

    {
      path: 'zhi-boxes-management',
      component: () => import('@/views/tab/zhi-boxes-management'),
      name: 'ZhiBoxesManagement',
      meta: {
        title: '智箱管理'
      }
    },
  ]
}

export default trashRouter

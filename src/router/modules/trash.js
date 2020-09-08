/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const trashRouter = {
    path: '/tab',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Tab',
    meta: {
      title: '智箱',
      icon: 'tab'
    }, 
    children: [
        {
          path: 'lajixiang',
          component: () => import('@/views/tab/lajixiang'),
          name: 'lajixiang',
          meta: { title: '垃圾箱状态管理' }
        },
        {
            path: 'drag-table',
            component: () => import('@/views/table/drag-table'),
            name: 'DragTable',
            meta: { title: '权限管理' }
          },
      ]
}

export default trashRouter

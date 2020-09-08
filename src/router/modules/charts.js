/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '数据预测',
    icon: 'chart'
  },
  children: [
    {
      path: 'heat_to_try',
      component: () => import('@/views/charts/heat_to_try'),
      name: 'Heat_to_try',
      meta: { title: '热力图', noCache: true }
    },
    {
      path: 'analysis',
      component: () => import('@/views/charts/analysis'),
      name: 'Analysis',
      meta: { title: '预测分析', noCache: true }
    }]
}

export default chartsRouter

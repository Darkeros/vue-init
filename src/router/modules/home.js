export default () => {
  return [
    {
      path: `/`,
      component: () => import('@/views/Home'),
      meta: { name: '首页' }
    }
  ]
}

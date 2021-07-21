import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '@/styles/nprogress.less'

/**
 * 路由守卫回调函数
 * @param {import('vue-router').Route} to 即将要进入的目标路由对象
 * @param {import('vue-router').Route} from 当前导航正要离开的路由对象
 * @param {Function} next 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 */
export const beforeEach = (to, from, next) => {
  NProgress.start()

  const originNext = next

  next = (...args) => {
    originNext(...args)

    const siteTitle = process.env.VUE_APP_SITE_TITLE
    // const routeName = to.meta.name
    // 设置当前页面的标题
    document.title = siteTitle

    NProgress.done()
  }

  next()
}

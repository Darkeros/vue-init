import Vue from 'vue'
import Router from 'vue-router'
import { beforeEach } from './guard'

Vue.use(Router)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const files = require.context('./modules', true, /\.js$/)
const modules = files.keys().reduce((modules, filePath) => {
  const moduleName = filePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = files(filePath)
  modules[moduleName] = value.default
  return modules
}, {})

function createRouter() {
  return new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [...modules.home()]
  })
}

const router = createRouter()

/**
 * 全局前置守卫
 */
router.beforeEach(beforeEach)

export default router

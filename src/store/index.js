import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const files = require.context('./modules', true, /\.js$/)
const modules = files.keys().reduce((modules, filePath) => {
  const moduleName = filePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = files(filePath)
  modules[moduleName] = value.default
  return modules
}, {})

const state = {
  token: localStorage.getItem('token') || '',
  userInfo: localStorage.getItem('userInfo') || null,
  auth: localStorage.getItem('auth') || null
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})

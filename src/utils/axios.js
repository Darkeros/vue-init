import Axios from 'axios'

const axios = Axios.create({
  baseURL: '',
  timeout: 20000 // 请求超过 20s 强制超时
})

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios

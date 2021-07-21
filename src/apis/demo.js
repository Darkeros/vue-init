import axios from '@/utils/axios'

class DemoApi {
  /**
   * demo get
   */
  demoGet() {
    return axios.get('/api/demo-get')
  }
  /**
   * demo post
   */
  demoPost(params) {
    return axios.post('/api/demo-post', params)
  }
}

export default new DemoApi()

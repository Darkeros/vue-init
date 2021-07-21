<template>
  <div id="App-Container">
    <router-view />
  </div>
</template>

<script>
import { debounce } from 'throttle-debounce'
import { identifyRuntimeEnv } from '@/utils/runtime-env'

export default {
  name: 'AppContainer',
  created() {
    const debounceFix = debounce(300, this.setAppContainerWidth)
    window.addEventListener('resize', debounceFix)
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        this.setAppContainerWidth()
      }
    })
  },
  mounted() {
    this.setAppContainerWidth()
  },
  methods: {
    /**
     * 设置主体区域宽度
     * 如果在移动端，100%宽度
     * 如果在桌面端，600px宽度，居中显示
     */
    setAppContainerWidth() {
      const appContainer = document.getElementById('App-Container')
      identifyRuntimeEnv().platform === 'mobile'
        ? (appContainer.style.width = '100%')
        : (appContainer.style.width = '600px')
    }
  }
}
</script>

<style lang="less" scoped>
#App-Container {
  margin: 0 auto;
  overflow: hidden;
  // TODO: 示例，待删除
  min-height: 100vh;
  background-color: chocolate;
}
</style>

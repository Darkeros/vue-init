'use strict'

const path = require('path')

// const pathJoin = directory => {
//   return path.join(__dirname, directory)
// }

const pathResolve = directory => {
  return path.resolve(__dirname, directory)
}

module.exports = {
  publicPath: './',
  // 在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: true,
  // 通过 Babel 显式转译一个依赖
  transpileDependencies: [],
  devServer: {
    // 本地服务启动端口
    port: 8001
    // 反向代理
    // proxy: {
    //   '/api/': {
    //     target: process.env.VUE_APP_REQUEST_DOMAIN,
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },
  css: {
    // 配置css模块
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    // 向全局注入 less 变量
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        pathResolve('./src/styles/_variables.less'),
        pathResolve('./src/styles/_mixins.less'),
        pathResolve('./src/styles/index.less')
      ]
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = process.env.VUE_APP_SITE_TITLE
      return args
    })
  }
}

const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    open: true
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '电子购物平台'
        return args
      })
    // 设置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('coms', resolve('src/components'))
  }
})

module.exports = {
  entry: 'src/index.js',
  output: {
    format: 'umd',
    moduleName: 'Docola',
    fileNames: {
      js: 'docola.js',
      css: 'docola.css'
    }
  },
  html: false,
  chainWebpack(config) {
    config.output.libraryExport('default')
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm')
  }
}

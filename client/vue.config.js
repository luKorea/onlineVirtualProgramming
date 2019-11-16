module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    https: false,
    hotOnly: false,
    // eslint-disable-next-line no-dupe-keys
    open: true,
    proxy: {
      '/': {
        target: 'http://172.30.106.203:8080/onlinevps/',
        changeOrigin: true
      }
    }
  }
}

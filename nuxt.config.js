const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/element-ui',
      ssr: false
    },
    {
      src: '@/plugins/vant.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  // proxy: {
  //   '/api/': {
  //     target: 'https://h5api.zhefengle.cn',//这个网站是开源的可以请求到数据的
  //     pathRewrite: {
  //       '^/api/': '/',
  //       changeOrigin: true
  //     }
  //   }
  // },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    vendor:['element-ui','vant','axios'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

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
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1, minimum-scale=1, user-scalable=no' },
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
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/normalize.css'
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
      src: '@/plugins/flexible',
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

    postcss: {
      // 添加插件名称作为键，参数作为值
      // 使用npm或yarn安装它们
      plugins: {
        // 通过传递 false 来禁用插件
        // 'postcss-url': false,
        // 'postcss-nested': {},
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {},
      },
      preset: {
        // 更改postcss-preset-env 设置
          autoprefixer: {
            grid: true,
            browsers: ['last 2 versions'],
            // browsers: [
            //   "> 1%",
            //   "last 7 versions",
            //   "not ie <= 8",
            //   "ios >= 8",
            //   "android >= 4.0"
            // ]
        }
      }
    },

    loaders: [
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

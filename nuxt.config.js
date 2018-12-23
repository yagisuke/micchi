var baseRoute = env => (env === 'GH_PAGES' ? '/sample-color-selection/' : '/')

module.exports = {
  head: {
    title: 'hair color',
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: baseRoute(process.env.DEPLOY_ENV) + 'favicon.ico'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
  },
  router: {
    base: baseRoute(process.env.DEPLOY_ENV)
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    'normalize.css',
    '~/assets/scss/main.scss'
  ],
  build: {},
  modules: [
    ['nuxt-sass-resources-loader', [
      '~/assets/scss/config/variable.scss'
    ]],
    '~/modules/typescript.js'
  ]
}

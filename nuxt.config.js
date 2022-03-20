export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iGradePlus-sms-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

       //CSS
      //  {
      //   href: "/assets/css/all.css",
      //   rel: "stylesheet"
      // },

      // {
      //   href: "/assets/css/bootstrap.min.css",
      //   rel: "stylesheet"
      // },
      ///
      {
        href: "/assets\css\simplebar.css",
        rel: "stylesheet"
      },
      {
        href: "/assets/css/vendors/simplebar.css",
        rel: "stylesheet"
      },
      {
        href: "/assets/css/style.css",
        rel: "stylesheet"
      },
      {
        href: "/assets/css/prism.css",
        rel: "stylesheet"
      },
      {
        href: "/assets/css/coreui-chartjs.css",
        rel: "stylesheet"
      },
      {
        href: "https://www.googletagmanager.com/gtag/js?id=UA-118965717-1",
        rel: "stylesheet"
      },

      // {
      //   href: "https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css",
      //   rel: "stylesheet"
      // },

      // {
      //   href: "https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js",
      //   rel: "stylesheet"
      // },

    ],
    // JavaScripts
    script: [{
      type: "text/JavaScripts",
      src: "/assets/js/coreui.bundle.min.js",
    },

    {
      type: "text/JavaScripts",
      src:"/assets/js/simplebar.min.js",
    },

    {
      type: "text/JavaScripts",
      src:"/assets/js/prism.js",
    },

    {
      type: "text/JavaScripts",
      src:"/assets/js/prism-autoloader.min.js",
    },

    {
      type: "text/JavaScripts",
      src:"/assets/js/prism-unescaped-markup.min.js",
    },

    {
      type: "text/JavaScripts",
      src:"/assets/js/prism-normalize-whitespace.js",
    },

    {
      type: "text/JavaScripts",
      src:"/assets/js/chart.min.js",
    },

    {
      type: "text/JavaScripts",
      src:"/assets/js/coreui-chartjs.js",
    },

    {
      type: "text/JavaScripts",
      src:"/assets/js/coreui-utils.js",
    },

    {
      type: "text/JavaScripts",
      src:"/assets/js/main.js",
    },


    {
      type: "text/JavaScripts",
      src:"/assets/js/popovers.js",
    },


    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

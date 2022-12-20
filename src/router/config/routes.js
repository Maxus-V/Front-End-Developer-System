const routes = [
    {
      path: '/',
      redirect: '/overview',
    },
    {
      path: '/overview',
      component: () => import('@/components/pages/Overview/index.vue')
    },
    {
      path: '/frontendbasics',
      children: [
        {
          path: '/frontendbasics',
          redirect: '/frontendbasics/htmlbase'
        },
        {
          path: 'htmlbase',
          component: () => import('@/components/pages/FrontEndBasics/HtmlBase.vue')
        },
        {
          path: 'cssbase',
          component: () => import('@/components/pages/FrontEndBasics/CssBase.vue')
        },
        {
          path: 'javascriptbase',
          component: () => import('@/components/pages/FrontEndBasics/JavascriptBase.vue')
        },
      ]
    },
    {
        path: '/frontendframes',
        children: [
          {
            path: '/frontendframes',
            redirect: '/frontendframes/vue'
          },
          {
            path: 'vue',
            component: () => import('@/components/pages/FrontEndFrame/VueFrame.vue')
          },
          {
            path: 'react',
            component: () => import('@/components/pages/FrontEndFrame/ReactFrame.vue')
          },
          {
            path: 'angular',
            component: () => import('@/components/pages/FrontEndFrame/AngularFrame.vue')
          },
        ]
    },
    {
      path: '/frontendprogression',
      children: [
        {
          path: '/frontendprogression',
          redirect: '/frontendprogression/typescript'
        },
        {
          path: 'typescript',
          component: () => import('@/components/pages/FrontEndProgression/TypescriptBase.vue')
        },
        {
          path: 'webpack',
          component: () => import('@/components/pages/FrontEndProgression/WebpackBase.vue')
        },
        {
          path: 'node',
          component: () => import('@/components/pages/FrontEndProgression/NodeBase.vue')
        },
      ]
  },
];

export default routes
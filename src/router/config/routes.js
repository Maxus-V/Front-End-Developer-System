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
          component: () => import('@/components/pages/FrontEndBasics/HtmlBase/index.vue')
        },
        {
          path: 'cssbase',
          component: () => import('@/components/pages/FrontEndBasics/CssBase/index.vue')
        },
        {
          path: 'javascriptbase',
          component: () => import('@/components/pages/FrontEndBasics/JavaScriptBase/index.vue')
        },
      ]
    },
    {
      path: '/frontendbasics/:type/:id',
      component: () => import('@/components/pages/FrontEndBasics/BaseDetail/index.vue')
    },
    {
      path: '/frontendframes/formfilling/:type/create',
      component: () => import('@/components/pages/FrontEndFrame/formFilling/index.vue')
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
            component: () => import('@/components/pages/FrontEndFrame/vueFrame/index.vue')
          },
          {
            path: 'react',
            component: () => import('@/components/pages/FrontEndFrame/ReactFrame.vue'),
          },
          {
            path: 'angular',
            component: () => import('@/components/pages/FrontEndFrame/AngularFrame.vue')
          },
          {
            path: 'create',
            component: () => import('@/components/pages/FrontEndFrame/contentForm/index.vue')
          }
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
    {
      path: '/settings',
      children: [
        {
          path: '/settings',
          redirect: '/settings/refreshrate'
        },
        {
          path: 'refreshrate',
          component: () => import('@/components/pages/Settings/RefreshRate/index.vue')
        }
      ]
    }
];

export default routes
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
      path: '/frontendbasics/detail/:id',
      component: () => import('@/components/pages/FrontEndBasics/BaseDetail/index.vue')
    },
    {
      path: '/frontendframes/formfilling/:type/create',
      component: () => import('@/components/pages/FrontEndFrame/FormFilling/index.vue')
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
            component: () => import('@/components/pages/FrontEndFrame/VueFrame/index.vue')
          },
          {
            path: 'react',
            component: () => import('@/components/pages/FrontEndFrame/ReactFrame/index.vue'),
          },
          {
            path: 'angular',
            component: () => import('@/components/pages/FrontEndFrame/AngularFrame/index.vue')
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
          component: () => import('@/components/pages/FrontEndProgression/TypescriptBase/index.vue')
        },
        {
          path: 'webpack',
          component: () => import('@/components/pages/FrontEndProgression/WebpackBase/index.vue')
        },
        {
          path: 'node',
          component: () => import('@/components/pages/FrontEndProgression/NodeBase/index.vue')
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
        },
        {
          path: 'darktheme',
          component: () => import('@/components/pages/Settings/darkTheme/index.vue')
        },
        {
          path: 'waterMarker',
          component: () => import('@/components/pages/Settings/waterMarker/index.vue')
        },
        {
          path: 'noviceguide',
          component: () => import('@/components/pages/Settings/NoviceGuide/index.vue')
        },
      ]
    }
];

export default routes
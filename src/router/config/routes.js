const routes = [
    {
      path: '/',
      redirect: '/overview',
    },
    {
      path: '/overview',
      meta: {
        title: "概览",
      },
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
          meta: {
            title: "HTML",
          },
          component: () => import('@/components/pages/FrontEndBasics/HtmlBase/index.vue')
        },
        {
          path: 'cssbase',
          meta: {
            title: "CSS",
          },
          component: () => import('@/components/pages/FrontEndBasics/CssBase/index.vue')
        },
        {
          path: 'javascriptbase',
          meta: {
            title: "JavaScript",
          },
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
            meta: {
              title: "Vue",
            },
            component: () => import('@/components/pages/FrontEndFrame/VueFrame/index.vue')
          },
          {
            path: 'react',
            meta: {
              title: "React",
            },
            component: () => import('@/components/pages/FrontEndFrame/ReactFrame/index.vue'),
          },
          {
            path: 'angular',
            meta: {
              title: "Angular",
            },
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
          meta: {
            title: "TypeScript",
          },
          component: () => import('@/components/pages/FrontEndProgression/TypescriptBase/index.vue')
        },
        {
          path: 'webpack',
          meta: {
            title: "Webpack",
          },
          component: () => import('@/components/pages/FrontEndProgression/WebpackBase/index.vue')
        },
        {
          path: 'node',
          meta: {
            title: "Node",
          },
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
          meta: {
            title: "RefreshRate",
          },
          component: () => import('@/components/pages/Settings/RefreshRate/index.vue')
        },
        {
          path: 'darktheme',
          meta: {
            title: "DarkTheme",
          },
          component: () => import('@/components/pages/Settings/darkTheme/index.vue')
        },
        {
          path: 'waterMarker',
          meta: {
            title: "WaterMarker",
          },
          component: () => import('@/components/pages/Settings/waterMarker/index.vue')
        },
        {
          path: 'noviceguide',
          meta: {
            title: "NoviceGuide",
          },
          component: () => import('@/components/pages/Settings/NoviceGuide/index.vue')
        },
      ]
    }
];

export default routes
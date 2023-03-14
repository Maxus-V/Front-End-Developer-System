const routes = {
  overview: {
    name: 'overview',
    path: '/overview',
  },
  frontendbasics: {
      name: 'frontendbasics',
      children: [
        {
          name: 'HTML',
          path: '/frontendbasics/htmlbase',
          index: '1-1',
        },
        {
          name: 'CSS',
          path: '/frontendbasics/cssbase',
          index: '1-2',
        },
        {
          name: 'JavaScript',
          path: '/frontendbasics/javascriptbase',
          index: '1-3',
        },
      ]
    },
    frontendframe: {
        name: 'frontendframes',
        children: [
          {
            name: 'Vue',
            path: '/frontendframes/vue',
            index: '2-1',
          },
          {
            name: 'React',
            path: '/frontendframes/react',
            index: '2-2',
          },
          {
            name: 'Angular',
            path: '/frontendframes/angular',
            index: '2-3',
          },
        ]
    },
    frontendprogression: {
      name: 'frontendprogression',
      children: [
        {
          name: 'TypeScript',
          path: '/frontendprogression/typescript',
          index: '3-1',
        },
        {
          name: 'Webpack',
          path: '/frontendprogression/webpack',
          index: '3-2',
        },
        {
          name: 'Node',
          path: '/frontendprogression/node',
          index: '3-3',
        },
      ]
    },
    settings: {
      name: 'settings',
      children: [
        {
          name: '刷新频率',
          path: '/settings/refreshrate',
          index: '4-1',
        },
        {
          name: '黑夜模式',
          path: '/settings/darkTheme',
          index: '4-2',
        },
        {
          name: '添加水印',
          path: '/settings/waterMarker',
          index: '4-3',
        },
        {
          name: '新手引导',
          path: '/settings/noviceguide',
          index: '4-4',
        },
        {
          name: '音乐盒子',
          path: '/settings/cloudmusic',
          index: '4-5',
        },
        {
          name: '集成部署',
          path: '/settings/cicd',
          index: '4-6',
        },
        {
          name: '高德地图',
          path: '/settings/amap',
          index: '4-7',
        },
      ]
    }
  }

export default routes
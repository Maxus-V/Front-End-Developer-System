const routes = {
  overview: {
    name: 'overview',
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
        }
      ]
    }
  }

export default routes
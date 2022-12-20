const routes = {
  overview: {
    name: '概览',
  },
  frontendbasics: {
      name: '前端基础',
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
        name: '前端框架',
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
      name: '前端进阶',
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
      name: '设置',
      text: '敬请期待'
    }
  }

export default routes
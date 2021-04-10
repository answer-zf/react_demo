export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                name: 'about',
                icon: 'table',
                path: '/about',
                component: './about/index',
              },
              {
                name: 'more',
                icon: 'table',
                path: '/more',
                component: './more/index',
              },
              { path: '/product/:id', component: './product/[id]' },
              {
                path: '/productDetail/:id?',
                component: './productDetail/[id$]',
              },
              {
                path: '/ofLayout',
                component: './ofLayout/_layout',
                routes: [
                  {
                    path: '/ofLayout/index',
                    component: './ofLayout/index',
                  },
                  {
                    path: '/ofLayout/index2',
                    component: './ofLayout/index2',
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];

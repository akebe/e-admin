const Router = () =>
  import ( /* webpackChunkName: "router" */ '@/views/router/Router.vue');
const Default = () =>
  import ( /* webpackChunkName: "router-default" */ '@/views/router/project/default.md');
const ProjectSrcApp = () =>
  import ( /* webpackChunkName: "router-default" */ '@/views/router/project/src/App.vue.md');
const ProjectSrcMain = () =>
  import ( /* webpackChunkName: "router-default" */ '@/views/router/project/src/main.js.md');
const ProjectSrcRouterEach = () =>
  import ( /* webpackChunkName: "router-default" */ '@/views/router/project/src/router/router-each.js.md');
const ProjectSrcRouterIndex = () =>
  import ( /* webpackChunkName: "router-default" */ '@/views/router/project/src/router/index.js.md');
const ProjectSrcStoreIndex = () =>
  import ( /* webpackChunkName: "router-default" */ '@/views/router/project/src/store/index.js.md');
const ProjectSrcViewsIndex = () =>
  import ( /* webpackChunkName: "router-default" */ '@/views/router/project/src/views/Index.vue.md');

export default [
  {
    path: '/router',
    name: 'Router',
    component: Router,
    props: (route) => ({
      path: route.path.substr(8),
    }),
    meta: {
      childrenAgent: true,
    },
    children: [
      {
        path: '',
        redirect: 'project/src/router/index.js',
      },
      {
        path: 'project/src/App.vue',
        component: ProjectSrcApp,
      },
      {
        path: 'project/src/main.js',
        component: ProjectSrcMain,
      },
      {
        path: 'project/src/router/router-each.js',
        component: ProjectSrcRouterEach,
      },
      {
        path: 'project/src/router/index.js',
        component: ProjectSrcRouterIndex,
      },
      {
        path: 'project/src/store/index.js',
        component: ProjectSrcStoreIndex,
      },
      {
        path: 'project/src/views/Index.vue',
        component: ProjectSrcViewsIndex,
      },
      {
        path: '*',
        component: Default,
      },
    ],
  },
];
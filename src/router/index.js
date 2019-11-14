import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterEach from './router-each';

import Router from './router/index';

const Index = () =>
  import ( /* webpackChunkName: "index" */ '@/views/Index.vue');
const Login = () =>
  import ( /* webpackChunkName: "login" */ '@/views/Login.vue');
const Install = () =>
  import ( /* webpackChunkName: "install" */ '@/views/Install.vue');
const EaAdmin = () =>
  import ( /* webpackChunkName: "ea-admin" */ '@/views/admin/EaAdmin.vue');
const EaAdminHeader = () =>
  import ( /* webpackChunkName: "ea-admin-header" */ '@/views/header/AdminHeader.vue');
const EaAdminLogo = () =>
  import ( /* webpackChunkName: "ea-admin-logo" */ '@/views/EaAdminLogo.vue');
const EaAdminMenu = () =>
  import ( /* webpackChunkName: "ea-admin-menu" */ '@/views/EaAdminMenu.vue');
const EaView = () =>
  import ( /* webpackChunkName: "ea-view" */ '@/views/EaView.vue');
const Error = () =>
  import ( /* webpackChunkName: "error" */ '../../packages/components/error/src/Error.vue');


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          component: Install,
        },
        {
          path: '/error/:code',
          name: 'Error',
          component: Error,
          props: true,
          meta: {
            tabs: false,
          },
        },
        {
          path: '/install',
          name: 'Install',
          component: Install,
        },
        {
          path: '/ea-admin',
          name: 'EaAdmin',
          component: EaAdmin,
        },
        {
          path: '/ea-admin-header',
          name: 'AdminHeader',
          component: EaAdminHeader,
        },
        {
          path: '/ea-admin-logo',
          name: 'EaAdminLogo',
          component: EaAdminLogo,
        },
        {
          path: '/ea-admin-menu',
          name: 'EaAdminMenu',
          component: EaAdminMenu,
          meta: {
            tabs: {
              title: '左侧菜单',
              icon: 'el-icon-menu',
            },
          },
        },
        {
          path: '/ea-view',
          name: 'EaView',
          component: EaView,
        },
        ...Router,
        {
          path: '*',
          redirect: '/error/404',
        },
      ],
    },
  ],
});

/**
 * 路由meta规范
 meta: {
    childrenAgent: false, // 是否代理子路由 设定为true在tabs及menu中子路由激活的是当前路由
    tabs: {               // 自定义路由tabs 设定为false 不在tabs显示这个路由
      title: '',
      icon: '',
      src: '',
    },
  },
 */

RouterEach(router);

export default router;
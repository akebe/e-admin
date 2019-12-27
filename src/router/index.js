import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterEach from './router-each';

import Router from './router/index';

import {Error} from 'e-admin';
//import {Error} from '../../lib/index.umd.js';

const Index = () =>
  import ( /* webpackChunkName: "index" */ '@/views/Index.vue');
const Intro = () =>
  import ( /* webpackChunkName: "index" */ '@/views/intro/Intro.vue');
const Update = () =>
  import ( /* webpackChunkName: "update" */ '@/views/update/Update.vue');
const Login = () =>
  import ( /* webpackChunkName: "login" */ '@/views/Login.vue');
const Install = () =>
  import ( /* webpackChunkName: "install" */ '@/views/install/Install.vue');
const Affix = () =>
  import ( /* webpackChunkName: "ea-affix" */ '@/views/affix/Affix.vue');
const Admin = () =>
  import ( /* webpackChunkName: "ea-admin" */ '@/views/admin/Admin.vue');
const Header = () =>
  import ( /* webpackChunkName: "ea-header" */ '@/views/header/Header.vue');
const Tabs = () =>
  import ( /* webpackChunkName: "ea-tabs" */ '@/views/tabs/Tabs.vue');
const Logo = () =>
  import ( /* webpackChunkName: "ea-logo" */ '@/views/logo/Logo.vue');
const NavMenu = () =>
  import ( /* webpackChunkName: "ea-nav-menu" */ '@/views/nav-menu/NavMenu.vue');
const View = () =>
  import ( /* webpackChunkName: "ea-view" */ '@/views/view/View.vue');
const MultiView = () =>
  import ( /* webpackChunkName: "ea-multi-view" */ '@/views/view/MultiView.vue');
const SingleView = () =>
  import ( /* webpackChunkName: "ea-single-view" */ '@/views/view/SingleView.vue');
const Image = () =>
  import ( /* webpackChunkName: "ea-image" */ '@/views/image/Image.vue');
const ImageDialog = () =>
  import ( /* webpackChunkName: "ea-image-dialog" */ '@/views/image-dialog/ImageDialog.vue');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        login: false,
      },
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          component: Intro,
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
          path: '/update',
          name: 'Update',
          component: Update,
        },
        {
          path: '/admin',
          name: 'Admin',
          component: Admin,
        },
        {
          path: '/header',
          name: 'Header',
          component: Header,
        },
        {
          path: '/tabs',
          name: 'Tabs',
          component: Tabs,
        },
        {
          path: '/logo',
          name: 'Logo',
          component: Logo,
        },
        {
          path: '/nav-menu',
          name: 'NavMenu',
          component: NavMenu,
        },
        {
          path: '/view',
          name: 'View',
          component: View,
        },
        {
          path: '/view/multi/:id',
          props: true,
          name: 'MultiView',
          component: MultiView,
        },
        {
          path: '/view/single/:id',
          props: true,
          name: 'SingleView',
          component: SingleView,
          meta:{
            tabs: {
              title: 'SingleView1',
              onOpen(tab) {
                // eslint-disable-next-line no-console
                console.log('tab-open:router', tab);
                if (tab.route.params.id === '103') {
                  tab.title = 'lucky number';
                }
              },
              onClose(tab) {
                // eslint-disable-next-line no-console
                console.log('tab-close:router', tab);
              },
            },
          }

        },
        {
          path: '/image',
          name: 'Image',
          component: Image,
        },
        {
          path: '/image-dialog',
          name: 'ImageDialog',
          component: ImageDialog,
        },
        {
          path: '/affix',
          name: 'Affix',
          component: Affix,
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
    childrenAgent: false, // 是否代理子路由 设定为true在tabs及nav-menu中子路由激活的是当前路由
    tabs: {               // 自定义路由tabs 设定为false 不在tabs显示这个路由
      title: '',
      icon: '',
      src: '',
    },
  },
 */

RouterEach(router);

export default router;
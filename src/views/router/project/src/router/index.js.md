````
import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterEach from './router-each';

const Index = () =>
  import ( /* webpackChunkName: "index" */ '@/document/views/Index.vue');
const Install = () =>
  import ( /* webpackChunkName: "install" */ '@/document/views/Install.vue');
const Error = () =>
  import ( /* webpackChunkName: "error" */ '@/components/error/Error.vue');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/',
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
          tabs: false,
        },
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
````
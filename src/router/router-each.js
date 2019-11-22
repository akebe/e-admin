import {Message} from 'element-ui';
import Ea from 'e-admin';
import store from '@/store';

/**
 * 全局路由守卫
 */
export default (router) => {

  router.beforeEach((to, from, next) => {
    //当前成员没有登录 跳到登录页
    if (to.meta.login !== false && !store.user.id) {
      Message.warning('请您先登录~');
      //记录的是进入页面 使登录或注册成功后可以正确跳回
      store.route.to = to;
      next({path: '/login'});
    } else {
      //判断是否禁止跳转
      if (!store.route.stopJump) {
        Ea.LoadingBar.start();
        next();
      } else {
        Ea.LoadingBar.error();
        next(false);
      }
    }
  });

  router.afterEach(to => {
    if (to.meta.title) {
      document.title = to.meta.title;
    } else {
      document.title = store.title;
    }
    if (Ea.LoadingBar.isStart()) Ea.LoadingBar.finish();
  });

}
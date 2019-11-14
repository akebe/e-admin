import {Message} from 'element-ui';
import LoadingBar from '../../packages/components/loading-bar/src/index';
import store from '../store';

/**
 * 全局路由守卫
 */
export default (router) => {

  router.beforeEach((to, from, next) => {

    LoadingBar.start();

    //如果当前访问页面不是无限制页面 并且当前成员没有登录 跳到登录页
    if (to.meta.login === true && !store.user.id) {
      Message.warning('请您先登录~');
      //记录的是进入页面 使登录或注册成功后可以正确跳回
      store.route.to = to;
      next({name: 'Login'});
    } else {
      //判断是否禁止跳转
      if (!store.route.stopJump) {
        next();
      } else {
        LoadingBar.error();
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
    if (LoadingBar.isStart()) LoadingBar.finish();
  });

}
import NavMenu from './src/NavMenu.vue';
import './src/index.less';

NavMenu.install = Vue => {
  Vue.component(NavMenu.name, NavMenu);
};

export default NavMenu;
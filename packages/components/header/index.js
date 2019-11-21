import Header from './src/Header.vue';
import './src/index.less';

Header.install = Vue => {
  Vue.component(Header.name, Header);
};

export default Header;
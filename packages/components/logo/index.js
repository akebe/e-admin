import Logo from './src/Logo.vue';
import './src/index.less';

Logo.install = Vue => {
  Vue.component(Logo.name, Logo);
};

export default Logo;
import Affix from './src/Affix.vue';
import './src/index.less';

Affix.install = Vue => {
  Vue.component(Affix.name, Affix);
};

export default Affix;
import Scrollbar from './src/Scrollbar.vue';
import './src/index.less';

Scrollbar.install = Vue => {
  Vue.component(Scrollbar.name, Scrollbar);
};

export default Scrollbar;
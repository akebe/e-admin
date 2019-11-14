import View from './src/View.vue';
import './src/index.less';

View.install = Vue => {
  Vue.component(View.name, View);
};

export default View;
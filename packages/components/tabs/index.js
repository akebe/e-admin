import Tabs from './src/Tabs.vue';
import './src/index.less';

Tabs.install = Vue => {
  Vue.component(Tabs.name, Tabs);
};

export default Tabs;
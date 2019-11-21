import TabsItem from './src/TabsItem.vue';
import './src/index.less';

TabsItem.install = Vue => {
  Vue.component(TabsItem.name, TabsItem);
};

export default TabsItem;
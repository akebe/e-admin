import AdminTabsItem from './src/AdminTabsItem.vue';
import './src/index.less';

AdminTabsItem.install = Vue => {
  Vue.component(AdminTabsItem.name, AdminTabsItem);
};

export default AdminTabsItem;
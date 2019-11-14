import AdminTabs from './src/AdminTabs.vue';
import './src/index.less';

AdminTabs.install = Vue => {
  Vue.component(AdminTabs.name, AdminTabs);
};

export default AdminTabs;
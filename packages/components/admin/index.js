import Admin from './src/Admin.vue';
import './src/index.less';

Admin.install = Vue => {
  Vue.component(Admin.name, Admin);
};

export default Admin;
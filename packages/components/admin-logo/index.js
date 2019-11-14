import AdminLogo from './src/AdminLogo.vue';
import './src/index.less';

AdminLogo.install = Vue => {
  Vue.component(AdminLogo.name, AdminLogo);
};

export default AdminLogo;
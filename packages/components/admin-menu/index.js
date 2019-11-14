import AdminMenu from './src/AdminMenu.vue';
import './src/index.less';

AdminMenu.install = Vue => {
  Vue.component(AdminMenu.name, AdminMenu);
};

export default AdminMenu;
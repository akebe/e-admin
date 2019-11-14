import AdminHeader from './src/AdminHeader.vue';
import './src/index.less';

AdminHeader.install = Vue => {
  Vue.component(AdminHeader.name, AdminHeader);
};

export default AdminHeader;
import AdminLogin from './src/AdminLogin.vue';
import './src/index.less';

AdminLogin.install = Vue => {
  Vue.component(AdminLogin.name, AdminLogin);
};

export default AdminLogin;
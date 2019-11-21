import Login from './src/Login.vue';
import './src/index.less';

Login.install = Vue => {
  Vue.component(Login.name, Login);
};

export default Login;
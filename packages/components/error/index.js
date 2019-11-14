import Error from './src/Error.vue';
import './src/index.less';

Error.install = Vue => {
  Vue.component(Error.name, Error);
};

export default Error;
import LoadingBar from './src/LoadingBar.vue';
import './src/index.less';

LoadingBar.install = Vue => {
  Vue.component(LoadingBar.name, LoadingBar);
};

export default LoadingBar;
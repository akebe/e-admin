import LoadingBar from './src/LoadingBar.vue';
import instance from './src/index';
import './src/index.less';

LoadingBar.install = Vue => {
  Vue.component(LoadingBar.name, LoadingBar);
};

LoadingBar.instance = instance;

export default LoadingBar;
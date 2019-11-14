import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import Ea from '../packages';

import 'element-ui/lib/theme-chalk/index.css';
import 'prismjs/themes/prism.css';
import './style/markdown-segmentfault.css';

Vue.use(ElementUI);
Vue.use(Ea, {});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

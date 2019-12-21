import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Ea from 'e-admin';
import 'e-admin/lib/index.css';

//import Ea from '../lib/index.umd.js';
//import '../lib/index.css';

//import Ea from '../packages/index.js';

import 'prismjs/themes/prism.css';
import '@/style/markdown-segmentfault.css';
import '@/style/index.less';

import DemoBlock from '@/components/demo-block/DemoBlock.vue';
import DocumentTable from '@/components/DocumentTable.vue';
import ElImageViewer from 'element-ui/packages/image/src/image-viewer';

Vue.use(ElementUI).use(Ea);

Vue.component(DemoBlock.name, DemoBlock);
Vue.component(DocumentTable.name, DocumentTable);
Vue.component(ElImageViewer.name, ElImageViewer);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

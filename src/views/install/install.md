### Install
```npm
npm install e-admin --save
```
基于`element v2.12.0`开发，如出现组件显示异常，请确保版本兼容
### Start  
#####完整引入
在 `main.js` 中写入以下内容：
```javascript
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import ElImageViewer from 'element-ui/packages/image/src/image-viewer';
import 'element-ui/lib/theme-chalk/index.css';

import Ea from 'e-admin';
import 'e-admin/lib/index.css';

Vue.use(ElementUI).use(Ea);
Vue.component(ElImageViewer.name, ElImageViewer);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
```
#####按需引入

借助 [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component) 引入需要的组件，以达到减小项目体积的目的。
安装 babel-plugin-component
```npm
npm install babel-plugin-component --save
```
待完善



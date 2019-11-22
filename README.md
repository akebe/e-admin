# e-admin
基于 [element](https://github.com/ElemeFE/element) 封装的即开即用渐进式中后台组件库

📄中文文档 [github](https://akebe.github.io/e-admin/) [gitee](https://asseek.gitee.io/e-admin/) 

### Install
```
npm install e-admin --save
```

### Start
```
import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import Ea from 'e-admin';

import 'element-ui/lib/theme-chalk/index.css';
import 'e-admin/lib/index.css';


Vue.use(ElementUI).use(Ea);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
```

### LICENSE
[MIT](https://en.wikipedia.org/wiki/MIT_License)

# e-admin
基于element-ui搭建的中后台半成品UI框架

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

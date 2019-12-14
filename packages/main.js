import Config from './config';

import Utils from './utils/index.js';

import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont.js';
import './style/ea.less';
import './style/theme/dark.less';

function install(Vue, options = {}) {
  const _options = Object.assign({
    publicStyle: true,
  }, options);


  if (_options.publicStyle) {
    require('./style/index.less');
  }

  require('./style/element-custom.less');

  const el = document.createElement('DIV');
  document.body.appendChild(el);

  if (options.setting) Object.assign(Config, options.setting);

  const ea = new Vue({
    render: h => h(),
    data: {
      config: Config,
    },
    methods: {},
  }).$mount(el);

  ea.$utils = Utils;

  Vue.prototype.$ea = ea;

}

export {install};

export default {
  install,
};
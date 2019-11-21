import Config from '../../config';

import Package from '../../../package.json';

import '../../assets/iconfont/iconfont.css';
import '../../assets/iconfont/iconfont.js';
import '../../style/ea.less';
import '../../style/theme/dark.less';
import '../../style/element-custom.less';

function install(Vue, options = {}) {
  const _options = Object.assign({
    publicStyle: true,
  }, options);


  if (_options.publicStyle) {
    require('../../style/index.less');
  }

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

  Vue.prototype.$ea = ea;

}

export {install};

export default {
  version: Package.version,
  install,
};
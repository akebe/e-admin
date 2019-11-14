import {install} from './main';
import Admin from './components/admin';
import AdminHeader from './components/admin-header';
import AdminLogin from './components/admin-login';
import AdminLogo from './components/admin-logo';
import AdminMenu from './components/admin-menu';
import AdminTabs from './components/admin-tabs';
import AdminTabsItem from './components/admin-tabs-item';
import Error from './components/error';
import Icon from './components/icon';
import LoadingBar from './components/loading-bar';
import View from './components/view';

export default {

  LoadingBar: LoadingBar.instance,

  install(Vue, options = {}) {

    Vue.use(Admin)
      .use(AdminHeader)
      .use(AdminLogin)
      .use(AdminLogo)
      .use(AdminMenu)
      .use(AdminTabs)
      .use(AdminTabsItem)
      .use(Error)
      .use(Icon)
      .use(LoadingBar)
      .use(View);

    install(Vue, options);
  },
};
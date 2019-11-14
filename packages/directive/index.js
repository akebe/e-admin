import longpress from './longpress';

export default {
  install(Vue, names = []) {
    if (!names.length){
      Vue.directive(longpress.name, longpress);
    }
  },
};


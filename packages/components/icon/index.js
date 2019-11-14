import Icon from './Icon.vue';

Icon.install = Vue => {
  Vue.component(Icon.name, Icon);
};

export default Icon;
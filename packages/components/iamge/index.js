import Image from './src/Image.vue';
import './src/index.less';

Image.install = Vue => {
  Vue.component(Image.name, Image);
};

export default Image;
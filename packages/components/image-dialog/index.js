import ImageDialog from './src/ImageDialog.vue';
import instance from './src/index';
import './src/index.less';

ImageDialog.install = Vue => {
  Vue.component(ImageDialog.name, ImageDialog);
};

ImageDialog.instance = instance;

export default ImageDialog;
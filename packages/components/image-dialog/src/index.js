import Vue from 'vue';
import EaImageDialog from './ImageDialog.vue';

const EaImageDialogConstructor = Vue.extend(EaImageDialog);

const defaults = {
  title: '图片选择',
  accept: 'image/*',
  width: '600px',
  closeOnClickModal: false,
  types: ['web', 'device'],
  defaultType: 'device',
  name: 'file',
  action: '',
  headers: {},
  disabled: false,
  src: '',
  size: 'small',
  placeholder: 'http://asseek.com/image.jpg',
  visible: false,
  required: false,
};
let vm = null, init = false;

const callbacks = [];

let current = null;

function queueHandle() {
  if (current) {
    callbacks.splice(0, 1);
    current = null;
  }
  if (callbacks.length) {
    current = callbacks[0];
    open();
  }
}

function open() {
  if (current) {
    const {options} = current;
    const type = typeof options;
    const reset = type === 'object' && options.reset;
    for (let attr in options) {
      if (type === 'object' && typeof options[attr] !== 'undefined') {
        vm[attr] = options[attr];
      } else {
        vm[attr] = defaults[attr];
      }
    }
    if (type === 'string') {
      vm.src = options;
    }
    if (reset) {
      vm.activeType = vm.defaultType;
      vm.value = vm.src;
    }
    if (vm.src) {
      vm.value = vm.src;
    }
    vm.visible = true;
  }
}

function vmCreate() {
  if (!init) {
    init = true;
    const el = document.createElement('div');
    document.body.appendChild(el);
    new EaImageDialogConstructor({
      propsData: defaults,
      mounted() {
        vm = this;
        vm.$on('confirm', src => {
          vm.visible = false;
          if (current) {
            current.resolve(src);
            queueHandle();
          }
        });
        vm.$on('cancel', () => {
          vm.visible = false;
          queueHandle();
        });
        vm.$children[0].$on('closed', () => {
          vm.visible = false;
          queueHandle();
        });
        queueHandle();
      },
    }).$mount(el);
  }

}

function ImageDialog(options) {
  return new Promise((resolve => {
    callbacks.push({options, resolve});
    if (!init) {
      vmCreate();
    }
    if (vm && !current) {
      queueHandle();
    }
  }));
}

ImageDialog.setOptions = (options = {}) => {
  Object.assign(defaults, options);
};

export default ImageDialog;

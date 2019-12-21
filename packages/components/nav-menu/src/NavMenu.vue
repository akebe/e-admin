<script>
  import ConfigMixins from '../../../mixins/config';
  import {getElementHeight} from '../../../utils';

  export default {
    name: 'EaNavMenu',
    mixins: [ConfigMixins({
      collapse: [Boolean, String],
      theme: String,
    })],
    components: {},
    props: {
      data: {
        type: Array,
        default: () => [],
      },
      value: String,
      router: {
        type: Boolean,
        default: false,
      },
    },
    watch: {},
    data() {
      return {
        otherHeight: '',
      };
    },
    computed: {
      mValue: {
        get() {
          let path = this.value;
          if (this.router) {
            let to = this.$route;
            let matched = to.matched.find(v => v.meta.childrenAgent) || to.matched[to.matched.length - 1];
            path = matched.path;
          }
          return path;
        },
        set(v) {
          this.$emit('input', v);
        },
      },
    },
    methods: {
      resize() {
        let otherHeight = 0;
        if (this.$el.parentNode.childNodes.length > 1) {
          Array.from(this.$el.parentNode.childNodes, el => {
            if (el !== this.$el) {
              otherHeight += getElementHeight(el);
            }
          });
        }
        this.otherHeight = otherHeight + 'px';
      },
    },
    render(h) {
      function createElMenuItem(data) {
        const children = [];
        if (data.icon || data.src) {
          children.push(
            data.icon ? h('i', {class: `_icon ${data.icon}`}) : h('img', {class: '_img', attrs: {src: data.src}}),
            h('span', {slot: 'title'}, data.title),
          );
        } else {
          children.push(data.title);
        }
        return h(
          'el-menu-item',
          {props: {index: data.path, disabled: data.disabled}},
          children,
        );
      }

      function createElMenuGroup(data, vm, parentIndex) {
        let index = 0;
        const children = [];
        const opt = {
          props: {
            index: `${parentIndex || '0'}-`,
          },
        };
        if (data.icon || data.src) {
          children.push(h('template', {slot: 'title'}, [
            data.icon ? h('i', {class: `_icon ${data.icon}`}) : h('img', {class: '_img', attrs: {src: data.src}}),
            h('span', {}, data.title),
          ]));
        } else {
          children.push(h('template', {slot: 'title'}, data.title));
        }
        for (let v of data.children) {
          if (v.visible === false) continue;
          index += 1;
          if (v.children && v.children.filter(v => v.visible !== false).length) {
            children.push(createElMenu(v, vm, `${opt.props.index}${index}`));
          } else {
            children.push(createElMenuItem(v));
          }
        }
        return h(
          'el-menu-item-group',
          {},
          children,
        );
      }

      function createElMenu(data, vm, parentIndex) {
        let index = 0;
        const children = [];
        const opt = {
          props: {
            index: `${parentIndex || '0'}-`,
            disabled: data.disabled,
          },
        };
        if (!parentIndex) {
          opt.props.collapse = vm.mCollapse;
          opt.props.router = vm.router;
          opt.props.defaultActive = vm.mValue;
        } else {
          if (data.icon || data.src) {
            children.push(h('template', {slot: 'title'}, [
              data.icon ? h('i', {class: `_icon ${data.icon}`}) : h('img', {class: '_img', attrs: {src: data.src}}),
              h('span', {}, data.title),
            ]));
          } else {
            children.push(h('template', {slot: 'title'}, data.title));
          }
        }
        for (let v of data.children) {
          if (v.visible === false) continue;
          index += 1;
          if (!v.group) {
            if (v.children && v.children.filter(v => v.visible !== false).length) {
              children.push(createElMenu(v, vm, `${opt.props.index}${index}`));
            } else {
              children.push(createElMenuItem(v));
            }
          } else {
            children.push(createElMenuGroup(v, vm, `${opt.props.index}${index}`));
          }
        }
        return h(
          !parentIndex ? 'el-menu' : 'el-submenu',
          opt,
          children,
        );
      }

      const menu = createElMenu({children: this.data}, this);

      return h(
        'el-scrollbar',
        {
          class: {
            'ea-nav_menu': true,
            [`ea--${this.mTheme}`]: true,
          },
          style: `height:calc(100% - ${this.otherHeight});`,
        },
        [menu],
      );
    },
    created() {
    },
    mounted() {
      window.addEventListener('resize', this.resize);
      this.$nextTick(() => {
        this.resize();
      });
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resize);
    },
  };
</script>
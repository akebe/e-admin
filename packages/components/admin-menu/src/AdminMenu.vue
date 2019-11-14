<script>
  import ConfigMixins from '../../../mixins/config';

  export default {
    name: 'EaAdminMenu',
    mixins: [ConfigMixins({
      collapse: [Boolean, String],
      theme: String,
    })],
    components: {},
    props: {
      /**
       * [{title: '', icon: '', children: [], path: '', group: false}]
       * if group = true children is group list
       */
      data: {
        type: Array,
        default: () => [],
      },
      value: String,
      otherHeight: {
        type: String,
        default: '46px',
      },
      router: {
        type: Boolean,
        default: false,
      },
    },
    watch: {},
    data() {
      return {};
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
    methods: {},
    render(h) {
      function createElMenuItem(data) {
        const children = [];
        if (data.icon) {
          children.push(
            h('i', {class: `_icon ${data.icon}`}),
            h('span', {slot: 'title'}, data.title),
          );
        } else {
          children.push(data.title);
        }
        return h(
          'el-menu-item',
          {props: {index: data.path}},
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
        if (data.icon) {
          children.push(h('template', {slot: 'title'}, [
            h('i', {class: `_icon ${data.icon}`}),
            h('span', {}, data.title),
          ]));
        } else {
          children.push(h('template', {slot: 'title'}, data.title));
        }
        for (let v of data.children) {
          index += 1;
          if (v.children && v.children.length) {
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
          },
        };
        if (!parentIndex) {
          opt.props.collapse = vm.mCollapse;
          opt.props.router = vm.router;
          opt.props.defaultActive = vm.mValue;
        } else {
          if (data.icon) {
            children.push(h('template', {slot: 'title'}, [
              h('i', {class: `_icon ${data.icon}`}),
              h('span', {}, data.title),
            ]));
          } else {
            children.push(h('template', {slot: 'title'}, data.title));
          }
        }
        for (let v of data.children) {
          index += 1;
          if (!v.group) {
            if (v.children && v.children.length) {
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
            'ea-admin_menu': true,
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
    },
  };
</script>
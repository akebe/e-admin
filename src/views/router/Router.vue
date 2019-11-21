<style scoped>
  svg {
    width: 16px;
    height: 16px;
    vertical-align: sub;
  }

  ._tree {
    width: 250px
  }

  ._tree >>> .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    background-color: #e9e9e9
  }
</style>
<style>
</style>
<template>
  <ea-view padding="">
    <div class="flex">
      <div class="_tree bord-rgt">
        <el-tree
            :data="data"
            default-expand-all
            highlight-current
            :expand-on-click-node="false"
            :current-node-key="path"
            @node-click="nodeClick"
            ref="tree"
            node-key="path">
          <span slot-scope="scope">
            <svg>
              <use :xlink:href="scope.data.href"></use>
            </svg>
            <span> {{ scope.data.label }}</span>
          </span>
        </el-tree>
      </div>
      <div class="flex-body">
        <div class="bord-btm pad_m">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="key in keys" :key="key">{{key}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="pad_m">
          <router-view/>
        </div>
      </div>
    </div>
  </ea-view>
</template>
<script>
  const data = [
    {
      label: 'project',
      children: [
        {
          label: 'src',
          children: [
            {
              label: 'router',
              children: [
                {label: 'router-each.js'},
                {label: 'index.js'},
              ],
            },
            {
              label: 'store',
              children: [
                {label: 'index.js'},
              ],
            },
            {
              label: 'views',
              children: [
                {label: 'Index.vue'},
              ],
            },
            {label: 'App.vue'},
            {label: 'main.js'},
          ],
        },
      ],
    },
  ];

  function dataHandle(ary, path = '') {
    for (let item of ary) {
      if (item.label.indexOf('.js') > -1) {
        item.href = '#icon-file_type_js';
        item.path = path + item.label;
      } else if (item.label.indexOf('.vue') > -1) {
        item.href = '#icon-file_type_vue';
        item.path = path + item.label;
      } else {
        item.href = '#icon-folder';
        item.path = path + item.label + '/';
      }
      if (item.children) dataHandle(item.children, item.path);
    }
  }

  export default {
    name: 'Router',
    components: {},
    props: {
      path: [String, Object],
    },
    watch: {
      path(v) {
        this.$refs.tree.setCurrentKey(v);
      },
    },
    data() {
      dataHandle(data);
      return {
        data,
      };
    },
    computed: {
      keys() {
        return this.path.split('/');
      },
    },
    methods: {
      nodeClick({path}) {
        this.$router.push(`/router/${path}`);
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
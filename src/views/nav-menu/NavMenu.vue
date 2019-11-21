<template>
  <ea-view center>
    <nav-menu-md>
      <demo-block>
        <template v-slot:source>
          <div style="display: flex;width: 100%">
            <div style="width: 200px;height: 300px">
              <h5>white</h5>
              <ea-nav-menu theme="white" :data="data"></ea-nav-menu>
            </div>
            <div style="width: 200px;height: 300px;margin-left: 100px">
              <h5>dark</h5>
              <ea-nav-menu :data="data"></ea-nav-menu>
            </div>
          </div>
        </template>
        <template v-slot:highlight>
          <demo-md></demo-md>
        </template>
      </demo-block>
      <template v-slot:table>
        <document-table :data="attributes"></document-table>
      </template>
    </nav-menu-md>
  </ea-view>
</template>
<script>
  import navMenuMd from './nav-menu.md';
  import demoMd from './demo.md';
  import attributes from './attributes';

  export default {
    name: 'NavMenu',
    components: {
      navMenuMd,
      demoMd,
    },
    props: {},
    watch: {},
    data() {
      return {
        attributes,
        data: [
          {
            title: '导航一',
            icon: 'el-icon-location',
            path: '1',
            children: [
              {
                title: '分组 1',
                group: true,
                children: [
                  {
                    title: '选项 1',
                    path: '1-1',
                  },
                  {
                    title: '选项 2',
                    path: '1-2',
                    icon: 'el-icon-location',
                  },
                ],
              },
            ],
          },
          {
            title: '导航二',
            icon: 'el-icon-menu',
            path: '2',
            children: [
              {
                title: '导航二 1',
                path: '2-1',
              },
              {
                title: '导航二 2',
                path: '2-2',
                icon: 'el-icon-location',
              },
            ],
          },
          {
            title: '导航三',
            icon: 'el-icon-document',
            disabled: true,
            path: '3',
          },
          {
            title: '导航四',
            icon: 'el-icon-delete',
            path: '4',
            children: [
              {
                title: '导航四 1',
                disabled: true,
                path: '4-1',
              },
              {
                title: '导航四 2',
                path: '4-2',
                icon: 'el-icon-location',
              },
            ],
          },
          {
            title: '导航五',
            icon: 'el-icon-search',
            disabled: true,
            path: '5',
            children: [
              {
                title: '导航五 1',
                path: '5-1',
                icon: 'el-icon-location',
              },
            ],
          },
        ],
      };
    },
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    },
  };
</script>
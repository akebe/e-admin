<template>
  <ea-admin>
    <template v-slot:header>
      <ea-header
          :collapse.sync="headerCollapse"
          :notice="notice"
          :fullscreen="fullscreen"
          :nav-data="headerNavData"
          :user="user"
          @command="handleCommand">
        <div style="flex:1">
        </div>
        <div class="ea-hover">
          <a class="iconfont icon-github" target="_blank" href="https://github.com/akebe/e-admin"></a>
        </div>
      </ea-header>
    </template>
    <template v-slot:tabs>
      <ea-tabs
          :collapse.sync="tabsCollapse"
          :nav-data="tabsNavData"
      ></ea-tabs>
    </template>
    <template v-slot:side>
      <ea-logo
          name="e-admin"
          :logo="logo"
          v-if="logoVisible"
          logo-type="image"
      ></ea-logo>
      <ea-nav-menu
          router
          :data="navData"
          v-model="active"
      ></ea-nav-menu>
    </template>
  </ea-admin>
</template>
<script>
  import navData from './nav-data';
  import logo from '@/assets/logo.svg';
  import store from '@/store';

  export default {
    name: 'Index',
    components: {},
    props: {},
    watch: {},
    data() {
      return {
        user: store.user,
        unread: 10,
        collapse: false,
        active: '',
        logo,
        navData,
        tabsCollapseActive: true,
        tabsNavDataActive: true,
        notice: '',
        headerCollapseActive: false,
        fullscreen: true,
        headerNavDataActive: true,
        logoVisible: true,
      };
    },
    computed: {
      tabsCollapse: {
        get() {
          return this.tabsCollapseActive ? this.$ea.config.collapse : 'false';
        },
        set(v) {
          this.$ea.config.collapse = v;
        },
      },
      tabsNavData() {
        return this.tabsNavDataActive ? navData : [];
      },

      headerCollapse: {
        get() {
          return this.headerCollapseActive ? this.$ea.config.collapse : 'false';
        },
        set(v) {
          this.$ea.config.collapse = v;
        },
      },
      headerNavData() {
        return this.headerNavDataActive ? navData : [];
      },
    },
    methods: {
      handleCommand(command) {
        switch (command) {
          case 'me':
            this.$message.warning('未实现');
            break;
          case 'setting':
            this.$message.warning('未实现');
            break;
          case 'logout':
            store.user = {
              name: '',
              id: '',
            };
            this.$message.success('已退出');
            localStorage.setItem('document_user', JSON.stringify(store.user));
            this.$router.push('/login');
            break;
        }
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
<style scoped>
  .icon-github {
    font-size: 22px
  }
</style>
```
<template>
  <div>
    <ea-admin-header
        :nav-data="navData">
    </ea-admin-header>
    <el-switch
        v-model="navDataActive"
        active-text="菜单 breadcrumbs"
        inactive-text="路由 breadcrumbs">
    </el-switch>
  </div>
</template>
<script>
  import navData from '@/views/nav-data';
  
  export default {
    data() {
      return {
        navDataActive: true,
      },
    },
    computed: {
      navData() {
        return this.navDataActive ? navData : [];
      },
    },
  }
</script>
```
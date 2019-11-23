```
<template>
  <div>
    <ea-tabs
        :nav-data="navData">
    </ea-tabs>
    <el-switch
        v-model="navDataActive"
        active-text="关联nav-data"
        inactive-text="解绑nav-data">
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
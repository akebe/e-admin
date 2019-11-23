```
<template>
  <div>
    <ea-admin-header
        :collapse.sync="collapse">
    </ea-admin-header>
    <el-switch
        v-model="collapseActive"
        active-text="启用"
        inactive-text="关闭">
    </el-switch>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        collapseActive: true,
      },
    },
    computed: {
      collapse: {
        get() {
          return this.collapseActive ? this.$ea.config.collapse : 'false';
        },
        set(v) {
          this.$ea.config.collapse = v;
        },
      },
    },
  }
</script>
```
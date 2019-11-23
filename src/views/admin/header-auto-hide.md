```
<template>
  <el-switch
      v-model="headerAutoHide"
      active-text="启用"
      inactive-text="关闭">
  </el-switch>
</template>
<script>
  export default {
    computed: {
      collapse: {
        get() {
          return this.$ea.config.headerAutoHide;
        },
        set(v) {
          this.$ea.config.headerAutoHide = v;
        },
      },
    },
  }
</script>
```
```
<template>
  <el-switch
      v-model="collapse"
      active-text="折叠"
      inactive-text="展开">
  </el-switch>
</template>
<script>
  export default {
    computed: {
      collapse: {
        get() {
          return this.$ea.config.collapse;
        },
        set(v) {
          this.$ea.config.collapse = v;
        },
      },
    },
  }
</script>
```
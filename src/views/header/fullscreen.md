```
<template>
  <div>
    <ea-admin-header
        :fullscreen="fullscreen">
    </ea-admin-header>
    <el-switch
        v-model="fullscreen"
        active-text="启用"
        inactive-text="关闭">
    </el-switch>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fullscreen: true,
      },
    },
  }
</script>
```
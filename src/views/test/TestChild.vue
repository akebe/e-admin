<template>
  <div>
    child
    <el-input v-model="input" placeholder="placeholder"></el-input>
  </div>
</template>
<script>
  export default {
    name: 'TestChild',
    data() {
      return {
        input:''
      };
    },
  };
</script>

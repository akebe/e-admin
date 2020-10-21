<template>
  <div>
    child
    <el-input v-model="input" placeholder="placeholder"></el-input>
    <div style="height: 2000px">child 1</div>
  </div>
</template>
<script>
  export default {
    name: 'TestChild1',
    data() {
      return {
        input:''
      };
    },
  };
</script>

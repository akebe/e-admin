<template>
  <ea-view center :scroll-record-children="['TestChild', 'TestChild1']">
    test
    <div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </ea-view>
</template>
<script>
  export default {
    name: 'Test',
  };
</script>

<template>
  <ea-view center>
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

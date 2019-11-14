<template>
  <i :class="'ea-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'EaIcon',
    props: {
      name: String,
    }
  };
</script>
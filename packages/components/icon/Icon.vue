<template>
  <i :class="'ea-icon-' + name"/>
</template>

<script>
  export default {
    name: 'EaIcon',
    props: {
      name: String,
    }
  };
</script>
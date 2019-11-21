<template>
  <ea-view center>
    <install-md></install-md>
  </ea-view>
</template>
<script>
  import installMd from './install.md';

  export default {
    name: 'Install',
    components: {installMd},
    props: {},
    watch: {},
    data() {
      return {
        loading: false,
      };
    },
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    },
  };
</script>
<template>
  <ea-view center class="ea-document">
    <intro-md>
      <el-button>默认按钮</el-button>
    </intro-md>
  </ea-view>
</template>
<script>
  import introMd from './intro.md';

  export default {
    name: 'Intro',
    components: {
      introMd,
    },
    props: {},
    watch: {},
    data() {
      return {};
    },
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    },
  };
</script>
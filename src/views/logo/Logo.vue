<template>
  <ea-view center>
    <logo-md>
      <template>
        <demo-block>
          <template v-slot:source>
            <el-switch
                v-model="logo"
                active-text="启用"
                inactive-text="关闭">
            </el-switch>
          </template>
        </demo-block>
      </template>
      <template v-slot:table>
        <document-table :data="attributes"></document-table>
      </template>
    </logo-md>
  </ea-view>
</template>
<script>
  import logoMd from './logo.md';
  import attributes from './attributes';

  export default {
    name: 'Logo',
    components: {
      logoMd,
    },
    props: {},
    watch: {
      logo(v) {
        this.$parent.$parent.logoVisible = v;
      },
    },
    data() {
      return {
        logo: true,
        attributes
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
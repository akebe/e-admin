<template>
  <ea-view center>
    <affix-md>
      <template v-slot:top>
        <ea-affix :offset-top="100">
          <demo-block>
            <template v-slot:source>
              向下滚动，这个代码示例区块会被固定在距离屏幕顶部<code>100px</code>的位置
            </template>
            <template v-slot:highlight>
              <top-md/>
            </template>
          </demo-block>
        </ea-affix>
      </template>
      <template v-slot:bottom>
        <ea-affix :offset-bottom="100">
          <demo-block>
            <template v-slot:source>
              向上滚动，这个代码示例区块会被固定在距离屏幕底部<code>100px</code>的位置
            </template>
            <template v-slot:highlight>
              <bottom-md/>
            </template>
          </demo-block>
        </ea-affix>
      </template>
      <template v-slot:table>
        <document-table :data="attributes"/>
      </template>
    </affix-md>
  </ea-view>
</template>
<script>
  import affixMd from './affix.md';
  import topMd from './top.md';
  import bottomMd from './bottom.md';
  import attributes from './attributes'

  export default {
    name: 'Affix',
    components: {
      affixMd,
      topMd,
      bottomMd,
    },
    props: {},
    watch: {},
    data() {
      return {
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
<style scoped>
</style>
<style>
</style>
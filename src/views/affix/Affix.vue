<template>
  <ea-view center>
    <affix-md>
      <template v-slot:top>
        <ea-affix :offset-top="100" :affix="offsetTop" @change="v => $message.success(`ea-affix change: ${v}`)">
          <demo-block>
            <template v-slot:source>
              向下滚动，这个代码示例区块会被固定在距离屏幕顶部<code>100px</code>的位置
              <div>
                <el-button @click="offsetTop = !offsetTop">
                  {{offsetTop ? '取消固定' : '固定'}}
                </el-button>
              </div>
            </template>
            <template v-slot:highlight>
              <top-md/>
            </template>
          </demo-block>
        </ea-affix>
      </template>
      <template v-slot:bottom>
        <ea-affix :offset-bottom="100" :affix="offsetBottom">
          <demo-block>
            <template v-slot:source>
              向上滚动，这个代码示例区块会被固定在距离屏幕底部<code>100px</code>的位置
              <div>
                <el-button @click="offsetBottom = !offsetBottom">
                  {{offsetBottom ? '取消固定' : '固定'}}
                </el-button>
              </div>
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
      <template v-slot:events>
        <document-table :data="events" type="Events"/>
      </template>
    </affix-md>
  </ea-view>
</template>
<script>
  import affixMd from './affix.md';
  import topMd from './top.md';
  import bottomMd from './bottom.md';
  import attributes from './attributes';
  import events from './events';

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
        attributes,
        events,
        offsetTop: true,
        offsetBottom: true,
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
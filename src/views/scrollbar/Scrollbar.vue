<template>
  <ea-view center>
    <scrollbar-md>
      <demo-block>
        <template v-slot:source>
          <div class="flex">
            <ea-scrollbar
              ref="scrollbar"
              class="flex-body bord"
              style="height: 300px;">
              <div
                v-for="i in data.size"
                :key="i"
                ref="item"
                class="pad_m bord-btm">
                {{ i }}
              </div>
            </ea-scrollbar>
            <el-form
              ref="form"
              class="flex-body"
              :model="data"
              size="small"
              label-width="120px"
            >
              <el-form-item label="长度" prop="size">
                <el-input-number v-model="data.size"/>
              </el-form-item>
              <el-form-item label="输入列数" prop="elIndex">
                <el-input-number v-model="data.elIndex" :min="1" :max="data.size"/>
                <el-button
                  type="primary"
                  class="mar-lft"
                  @click="scrollTo($refs.item[data.elIndex -1 ])">
                  滚动
                </el-button>
                到指定dom
              </el-form-item>
              <el-form-item label="输入高度" prop="scrollTop">
                <el-input-number v-model="data.scrollTop" :min="0"/>
                <el-button
                  type="primary"
                  @click="scrollTo(data.scrollTop)"
                  class="mar-lft">
                  滚动
                </el-button>
                到指定scrollTop
              </el-form-item>
            </el-form>
          </div>
        </template>
        <template v-slot:highlight>
          <scrollbar-demo-md/>
        </template>
      </demo-block>
      <template v-slot:table>
        <document-table :data="attributes"/>
      </template>
    </scrollbar-md>
  </ea-view>
</template>
<script>
  import scrollbarMd from './scrollbar.md';
  import scrollbarDemoMd from './scrollbar-demo.md';
  import attributes from './attributes';

  export default {
    name: 'Scrollbar',
    components: {
      scrollbarMd,
      scrollbarDemoMd,
    },
    props: {},
    watch: {},
    data() {
      return {
        data: {
          size: 30,
          elIndex: 15,
          scrollTop: 0,
        },
        attributes,
      };
    },
    computed: {},
    methods: {
      scrollTo(val) {
        this.$refs.scrollbar.scrollTo(val);
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
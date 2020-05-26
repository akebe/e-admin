```html
<template>
  <div class="flex">
    <ea-scrollbar
      ref="scrollbar"
      class="flex-body bord"
      style="max-height: 300px;">
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
        <el-input-number
          v-model="data.elIndex"
          :min="1"
          :max="data.size"
        />
        <el-button
          type="primary"
          class="mar-lft"
          @click="scrollTo($refs.item[data.elIndex -1 ])">
          滚动
        </el-button>
        到指定dom
      </el-form-item>
      <el-form-item label="输入高度" prop="scrollTop">
        <el-input-number
          v-model="data.scrollTop"
          :min="0"
        />
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
<script>
  export default {
    data() {
      return {
        data: {
          size: 30,
          elIndex: 15,
          scrollTop: 0,
        },
      };
    },
    methods: {
      scrollTo(val) {
        this.$refs.scrollbar.scrollTo(val);
      },
    },
  };
</script>
```

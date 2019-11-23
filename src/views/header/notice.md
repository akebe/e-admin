```
<template>
  <div>
    <ea-admin-header
         :notice="notice">
    </ea-admin-header>
    <el-form :inline="true" size="small">
      <el-form-item label="数据类型">
        <el-select
            v-model="noticeType"
            placeholder="请选择">
          <el-option
              v-for="v in noticeTypes"
              :key="v"
              :label="v"
              :value="v">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="参数值">
        <el-switch
            v-model="noticeBoolean"
            v-if="noticeType === 'Boolean'"
            active-text="true"
            inactive-text="false">
        </el-switch>
        <el-input
            v-model="noticeString"
            v-if="noticeType === 'String'"
            placeholder="请输入内容">
        </el-input>
        <el-input-number
            v-model="noticeNumber"
            v-if="noticeType === 'Number'">
        </el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        noticeBoolean: true,
        noticeString: '',
        noticeNumber: 0,
        noticeType: 'String',
        noticeTypes: ['Boolean', 'String', 'Number'],
      },
    },
    computed: {
      notice: {
        get() {
          return this[`notice${this.noticeType}`];
        },
        set(v) {
          this[`notice${this.noticeType}`] = v;
        },
      },
    },
  }
</script>
```
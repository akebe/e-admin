```
<template>
  <ea-view :center="center">
    <div>
      <el-radio v-model="centerType" label="true" border>true</el-radio>
      <el-radio v-model="centerType" label="false" border>false</el-radio>
      <el-radio v-model="centerType" label="number" border>{{centerValue.number}}</el-radio>
      <el-radio v-model="centerType" label="string" border>{{centerValue.string}}</el-radio>
    </div>
  </ea-view>
</template>
<script>
  export default {
    computed: {
      center() {
        return this.centerValue[this.centerType];
      },
    },
    data() {
      return {
        centerType: 'true',
        centerValue: {
          'true': true,
          'false': false,
          'number': 1000,
          'string': '60em',
        },
      };
    },
  }
</script>
```
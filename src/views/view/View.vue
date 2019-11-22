<template>
  <ea-view :center="center">
    <view-md>
      <template v-slot:center>
        <demo-block>
          <template slot="source">
            <el-radio v-model="centerType" label="true" border>true</el-radio>
            <el-radio v-model="centerType" label="false" border>false</el-radio>
            <el-radio v-model="centerType" label="number" border>{{centerValue.number}}</el-radio>
            <el-radio v-model="centerType" label="string" border>{{centerValue.string}}</el-radio>
          </template>
          <template slot="highlight">
            <center-md></center-md>
          </template>
        </demo-block>
      </template>
      <template v-slot:table>
        <document-table :data="attributes"></document-table>
      </template>
    </view-md>
  </ea-view>
</template>
<script>
  import viewMd from './view.md';
  import centerMd from './center.md';
  import attributes from './attributes';

  export default {
    name: 'View',
    components: {
      viewMd,
      centerMd,
    },
    props: {},
    watch: {},
    data() {
      return {
        centerType: 'true',
        centerValue: {
          'true': true,
          'false': false,
          'number': 1000,
          'string': '60em',
        },
        attributes,
      };
    },
    computed: {
      center() {
        return this.centerValue[this.centerType];
      },
    },
    methods: {},
    created() {
    },
    mounted() {
    },
  };
</script>
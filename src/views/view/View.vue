<template>
  <ea-view :center="center">
    <view-md>
      <template v-slot:center>
        <demo-block>
          <template v-slot:source>
            <el-radio v-model="centerType" label="true" border>true</el-radio>
            <el-radio v-model="centerType" label="false" border>false</el-radio>
            <el-radio v-model="centerType" label="number" border>{{centerValue.number}}</el-radio>
            <el-radio v-model="centerType" label="string" border>{{centerValue.string}}</el-radio>
          </template>
          <template v-slot:highlight>
            <center-md/>
          </template>
        </demo-block>
      </template>
      <template v-slot:single>
        <demo-block>
          <template v-slot:source>
            <el-button type="primary" @click="openSingleView">打开SingleView </el-button>
          </template>
          <template v-slot:highlight>
            <single-view-md/>
          </template>
        </demo-block>
      </template>
      <template v-slot:multi>
        <demo-block>
          <template v-slot:source>
            <el-button type="primary" @click="openMultiView">打开MultiView </el-button>
          </template>
          <template v-slot:highlight>
            <multi-view-md/>
          </template>
        </demo-block>
      </template>
      <template v-slot:table>
        <document-table :data="attributes"/>
      </template>
    </view-md>
  </ea-view>
</template>
<script>
  import viewMd from './view.md';
  import centerMd from './center.md';
  import singleViewMd from './single-view.md';
  import multiViewMd from './multi-view.md';
  import attributes from './attributes';

  export default {
    name: 'View',
    components: {
      viewMd,
      singleViewMd,
      multiViewMd,
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
        id: 100,
      };
    },
    computed: {
      center() {
        return this.centerValue[this.centerType];
      },
    },
    methods: {
      openSingleView() {
        this.$router.push(`/view/single/${this.id}`);
        this.id += 1;
      },
      openMultiView(){
        this.$router.push(`/view/multi/${this.id}`);
        this.id += 1;
      }
    },
    created() {
    },
    mounted() {
    },
  };
</script>
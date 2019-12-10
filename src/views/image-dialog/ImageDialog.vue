<template>
  <ea-view center>
    <image-dialog-md>
      <demo-block>
        <template v-slot:source>
          <ea-image
              :src="src"
              size="large"
              hover
              icon="el-icon-plus"
              @click="dialog()"
          />
          <div>
            <el-button @click="dialogVisible = true">通过组件调用选择器</el-button>
            <el-button @click="dialog()">通过方法调用选择器</el-button>
          </div>
        </template>
        <template v-slot:highlight>
          <default-md/>
        </template>
      </demo-block>
      <template v-slot:table>
        <document-table :data="attributes"></document-table>
      </template>
    </image-dialog-md>
    <ea-image-dialog
        action="https://jsonplaceholder.typicode.com/posts/"
        :visible.sync="dialogVisible"
        :on-success="onSuccess"
        @confirm="onConfirm"
    ></ea-image-dialog>
  </ea-view>
</template>
<script>
  import imageDialogMd from './image-dialog.md';
  import defaultMd from './default.md';
  import attributes from './attributes.js';

  export default {
    name: 'ImageDialog',
    components: {
      imageDialogMd,
      defaultMd,
    },
    props: {},
    watch: {},
    data() {
      return {
        attributes,
        dialogVisible: false,
        src: '',
      };
    },
    methods: {
      onSuccess({file}, done) {
        done(URL.createObjectURL(file.raw));
      },
      onConfirm(src) {
        this.src = src;
        this.dialogVisible = false;
      },
      dialog() {
        this.$imageDialog({
          src: this.src,
          action: 'https://jsonplaceholder.typicode.com/posts/',
          required: true,
          onSuccess: this.onSuccess,
        }).then(src => {
          this.src = src;
        });
      },
    },
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
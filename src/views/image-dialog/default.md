```
<template>
  <div>
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
    <ea-image-dialog
        action="https://jsonplaceholder.typicode.com/posts/"
        :visible.sync="dialogVisible"
        :on-success="onSuccess"
        @confirm="onConfirm"
    ></ea-image-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
  };
</script>
```
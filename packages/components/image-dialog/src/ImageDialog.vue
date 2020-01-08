<template>
  <el-dialog
      :title="title"
      :width="width"
      class="ea-image-dialog"
      :close-on-click-modal="closeOnClickModal"
      :visible.sync="visible"
      v-on="$listeners"
      v-bind="$attrs">
    <div
        :class="dragClass"
        @drop.prevent="onDrop"
        @dragover.prevent="onDragover"
        @dragleave.prevent="dragover = false">
      <div class="_image">
        <ea-image
            border
            ref="image"
            size="large"
            :mask="isLoad"
            :src="value"
            fit="contain"
            @load="isLoad = true"
            :disabled="disabled"
            :preview-src-list="isLoad ? [this.value] : []"
            icon="el-icon-picture-outline">
          <template v-slot:mask>
            <a class="el-icon-picture-outline" title="查看大图" @click="preview"/>
            <a class="el-icon-delete" title="清空" @click="value = ''"/>
          </template>
        </ea-image>
      </div>
      <el-tabs v-model="activeType" @tab-click="handleClick" tab-position="left">
        <el-tab-pane :disabled="!types.includes('device')" label="从本地上传" name="device">
          <el-upload
              ref="upload"
              :name="name"
              :headers="headers"
              :action="action"
              :accept="accept"
              :on-progress="handleProgress"
              :on-success="handleSuccess"
              :show-file-list="false">
            <el-button icon="el-icon-folder-opened" slot="trigger" :size="size" type="success">选择文件</el-button>
            <template v-slot:tip>
              <slot name="device-tip">
                <div class="el-upload__tip">只能上传图片文件，且不超过1500kb</div>
              </slot>
            </template>
          </el-upload>
        </el-tab-pane>
        <el-tab-pane :disabled="!types.includes('web')" label="使用网络图片" name="web">
          <el-input
              size="small"
              :placeholder="placeholder"
              clearable
              v-model="value">
          </el-input>
          <slot name="web-tip">
            <div class="el-upload__tip">使用网络图片地址</div>
          </slot>
        </el-tab-pane>
      </el-tabs>
      <div class="_progress">
        <el-progress
            v-show="percent > 0"
            :percentage="percent"
            :status="percent === 100 ? 'success' : ''"
            text-inside
            :stroke-width="16"
        />
      </div>
      <div class="el-upload__tip">可以将图片拖到此处上传</div>
    </div>
    <div slot="footer">
      <el-button :size="size" @click="cancel">取 消</el-button>
      <el-button type="primary" :size="size" icon="el-icon-picture-outline" @click="confirm">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import EaImage from '../../image/index.js';

  export default {
    name: 'EaImageDialog',
    components: {
      EaImage,
    },
    props: {
      accept: {
        type: String,
        default: 'image/*',
      },
      title: {
        type: String,
        default: '图片选择',
      },
      width: {
        type: String,
        default: '600px',
      },
      closeOnClickModal: {
        type: Boolean,
        default: false,
      },
      visible: {
        type: Boolean,
        default: false,
      },
      types: {
        type: Array,
        default: () => ['web', 'device'],
      },
      defaultType: {
        type: String,
        default: 'device',
      },
      name: {
        type: String,
        default: 'file',
      },
      action: {
        type: String,
        default: '',
      },
      headers: {
        type: Object,
        default: () => ({}),
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      src: String,
      size: {
        type: String,
        default: 'small',
      },
      placeholder: {
        type: String,
        default: 'http://asseek.com/image.jpg',
      },
      onSuccess: Function,
      required: Boolean,
    },
    watch: {
      value() {
        this.isLoad = false;
      },
      src(src) {
        this.value = src;
      },
    },
    data() {
      return {
        activeType: this.types.includes(this.defaultType) ? this.defaultType : this.types[0],
        dragover: false,
        uploader: {
          default: '',
        },
        value: this.src,
        isLoad: false,
        percent: 0,
      };
    },
    computed: {
      dragClass() {
        return {
          _drag: true,
          '_dragover': this.dragover,
        };
      },
    },
    methods: {
      onDragover() {
        if (!this.disabled) {
          this.dragover = true;
        }
      },
      onDrop(e) {
        if (this.disabled) return;
        this.dragover = false;
        const files = e.dataTransfer.files;
        if (files.length === 1) {
          this.$refs.upload.$children[0].uploadFiles(files);
        } else {
          this.$message.warning('只能选择一张图片');
        }
      },
      handleClick() {

      },
      handleProgress(event) {
        this.percent = +event.percent.toFixed(2);
        if (this.percent === 100) {
          setTimeout(() => {
            this.percent = 0;
          }, 1000);
        }
      },
      handleSuccess(response, file, fileList) {
        this.onSuccess && this.onSuccess({response, file, fileList}, src => {
          this.value = src;
        });
      },
      preview() {
        this.$refs.image.clickHandler();
      },
      confirm() {
        if (!this.required || this.isLoad) {
          this.$emit('confirm', this.value);
        } else {
          this.$message.warning('请选择正确图片！');
        }

      },
      cancel() {
        this.$emit('cancel', this.value);
        this.$emit('update:visible', false);
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
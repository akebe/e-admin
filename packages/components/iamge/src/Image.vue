<template>
  <div :class="classes" :style="styles" @click="onClick">
    <img class="_img"
         v-show="src && !loading && !mError"
         :src="src"
         :style="imgStyles"
         @load="onLoad"
         @click="clickHandler"
         @error="onError"/>
    <span class="_span" v-if="icon || loading || mError">
      <i v-if="icon && !loading && !mError" :class="icon"></i>
      <slot name="loading" v-if="loading"><i class="el-icon-loading"></i></slot>
      <slot name="error" v-if="mError"><i class="el-icon-warning-outline"></i></slot>
    </span>
    <div class="_mask" v-if="mask">
      <slot name="mask"></slot>
    </div>
    <template v-if="preview">
      <el-image-viewer
          :z-index="zIndex"
          :initial-index="imageIndex"
          v-show="showViewer"
          :on-close="closeViewer"
          :url-list="previewSrcList"/>
    </template>
  </div>
</template>
<script>
  let prevOverflow = '';
  export default {
    name: 'EaImage',
    components: {},
    props: {
      border: [Boolean, String],
      disabled: Boolean,
      hover: Boolean,
      error: Boolean,
      mask: Boolean,
      size: {
        type: [String, Number],
        default: 'medium',
      },
      src: String,
      icon: String,
      width: [String, Number],
      height: [String, Number],
      previewSrcList: {
        type: Array,
        default: () => [],
      },
      zIndex: {
        type: Number,
        default: 2000,
      },
    },
    watch: {
      src(v) {
        if (v) {
          this.loading = true;
          this.mError = false;
        }
      },
    },
    data() {
      return {
        mError: false,
        loading: !!this.src,
        sizes: ['mini', 'small', 'medium', 'large'],
        showViewer: false,
      };
    },
    computed: {
      classes() {
        const classes = {
          'ea-image': true,
          '_hover': this.hover,
          '_disabled': this.disabled,
          '_error': this.isError,
        };
        if (this.sizes.includes(this.size)) {
          classes[`_size-${this.size}`] = true;
        }
        return classes;
      },
      styles() {
        let {size, width, height, border} = this;
        const styles = {};
        if (!border && this.hover) {
          border = true;
        }
        if (border) {
          styles.border = typeof border === 'string' ? border : '1px solid #d7dae2';
        }
        if (size && !this.sizes.includes(size)) {
          size = typeof size === 'number' ? `${size}px` : size;
          styles.width = size;
          styles.height = size;
          styles.lineHeight = size;
        }
        if (width) {
          styles.width = typeof width === 'number' ? `${width}px` : width;
        }
        if (height) {
          height = typeof height === 'number' ? `${height}px` : height;
          styles.height = height;
          styles.lineHeight = height;
        }
        return styles;
      },
      imgStyles() {
        const {width, height, lineHeight} = this.styles;
        return {
          width,
          height,
          lineHeight,
        };
      },
      isError() {
        return this.error || this.mError;
      },
      preview() {
        const {previewSrcList} = this;
        return Array.isArray(previewSrcList) && previewSrcList.length > 0;
      },
      imageIndex() {
        const index = this.previewSrcList.indexOf(this.src);
        return index > -1 ? index : 0;
      },
    },
    methods: {
      onClick(event) {
        this.$emit('click', event);
      },
      clickHandler() {
        if (this.preview) {
          prevOverflow = document.body.style.overflow;
          document.body.style.overflow = 'hidden';
          this.showViewer = true;
        }
      },
      closeViewer() {
        document.body.style.overflow = prevOverflow;
        this.showViewer = false;
      },
      onLoad(event) {
        this.loading = false;
        this.$emit('load', event);
      },
      onError(event) {
        this.mError = true;
        this.loading = false;
        this.$emit('error', event);
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
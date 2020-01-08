<template>
  <div :class="classes" :style="styles" @click="onClick">
    <img class="_img"
         v-show="src && !loading && !isError"
         :src="src"
         :style="{'object-fit': this.fit}"
         @load="onLoad"
         @click="clickHandler"
         @error="onError"/>
    <span class="_span" v-if="icon && !isLoad || loading || isError">
      <i v-if="icon && !isLoad && !loading && !isError" :class="icon"/>
      <slot name="loading" v-if="loading">
        <i class="el-icon-loading"/>
      </slot>
      <slot name="error" v-if="isError">
        <i class="el-icon-warning-outline"/>
      </slot>
    </span>
    <div class="_mask" v-if="mask">
      <slot name="mask"/>
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
      fit: {
        type: String,
        default: 'cover',
      },
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
      shape: {
        type: String,
        default: 'square',
        validator(val) {
          return ['circle', 'square', ''].includes(val);
        },
      },
    },
    watch: {
      src(v) {
        if (v) {
          this.loading = true;
          this.isError = false;
        }
        this.isLoad = false;
      },
    },
    data() {
      return {
        isError: false,
        isLoad: false,
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
          '_error': this.isError || this.error,
        };
        if (!this.width && !this.height && this.sizes.includes(this.size)) {
          classes[`_size-${this.size}`] = true;
        }
        if (this.shape) {
          classes[`_shape-${this.shape}`] = true;
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
        this.isLoad = true;
        this.$emit('load', event);
      },
      onError(event) {
        this.isError = !!this.src;
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
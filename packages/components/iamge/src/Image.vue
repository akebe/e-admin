<template>
  <div :class="classes" :style="styles" @click="onClick">
    <img class="_img"
         v-show="src && !loading && !mError"
         :src="src"
         :style="imgStyles"
         @load="onLoad"
         @error="onError"/>
    <span v-if="icon || loading || mError">
      <i v-if="icon && !loading && !mError" :class="icon"></i>
      <slot name="loading" v-if="loading"><i class="el-icon-loading"></i></slot>
      <slot name="error" v-if="mError"><i class="el-icon-warning-outline"></i></slot>
    </span>
    <div class="_mask" v-if="mask">
      <slot name="mask"></slot>
    </div>
  </div>
</template>
<script>
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
      imgSrc() {
        return this.src || this.defaultSrc;
      },
      isError() {
        return this.error || this.mError;
      },
    },
    methods: {
      onClick(event) {
        this.$emit('click', event);
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
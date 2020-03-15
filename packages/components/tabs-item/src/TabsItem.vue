<template>
  <el-popover
    width="220"
    trigger="hover"
    :open-delay="800"
    :close-delay="0"
    :content="title"
    :disabled="!popover"
  >
    <div
      slot="reference"
      :draggable="drag"
      :class="{'ea-tabs-item': true, 'is-active': active}"
      @click="$emit('click', $event)"
      @dragenter="dragenter"
      @dragover="dragenter"
      @dragleave="dragleave"
      @dragend="$emit('dragend', $event)"
      @drop="drop = false"
    >
      <span class="_title">
        <i v-if="icon" :class="`_icon ${icon}`"/>
        <img v-else-if="src" :src="src" class="_icon" draggable="false"/>
        {{ title }}
      </span>
      <span
        v-if="closable"
        class="el-icon-close"
        @click.stop="$emit('close', $event)"
      />
    </div>
  </el-popover>
</template>
<script>
  export default {
    name: 'EaTabsItem',
    components: {},
    props: {
      icon: String,
      src: String,
      title: String,
      path: String,
      closable: Boolean,
      active: Boolean,
      scroll: Boolean,
      popover: Boolean,
      drag: Boolean,
    },
    data() {
      return {
        drop: false,
      };
    },
    methods: {
      dragleave(e) {
        if (this.drag) {
          this.drop = false;
          this.$emit('dragleave', e);
        }
      },
      dragenter(e) {
        if (this.drag) {
          e.preventDefault();
          this.drop = true;
          this.$emit('dragenter', e);
        }
      },
    },
    mounted() {
      if (this.scroll && this.$parent.childrenMounted) {
        this.$parent.childrenMounted(this);
      }
    },
    destroyed() {
      if (this.scroll && this.$parent.childrenDestroyed) {
        this.$parent.childrenDestroyed(this);
      }
    },
  };
</script>
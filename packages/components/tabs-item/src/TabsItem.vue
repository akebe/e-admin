<template>
  <el-popover
    width="220"
    trigger="hover"
    :open-delay="800"
    :close-delay="0"
    :content="title"
    :disabled="!popover"
  >
    <div slot="reference" :class="{'ea-tabs-item': true, 'is-active': active}" @click="$emit('click', $event)">
      <span class="_title">
        <i v-if="icon" :class="`_icon ${icon}`"/>
        <img v-else-if="src" :src="src" class="_icon"/>
        {{ title }}
      </span>
      <span v-if="closable" class="el-icon-close" @click.stop="$emit('close', $event)"/>
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
    },
    watch: {},
    data() {
      return {};
    },
    computed: {},
    methods: {},
    created() {
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
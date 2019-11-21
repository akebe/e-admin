<template>
  <div :class="{'ea-tabs-item': true, 'is-active': active}" @click="$emit('click', $event)">
    <span>
       <i v-if="icon" :class="`_icon ${icon}`"></i>
      <img v-else-if="src" :src="src" class="_icon">
        {{ title }}
    </span>
    <span v-if="closable" class="el-icon-close" @click.stop="$emit('close', $event)"></span>
  </div>
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
      if (this.scroll && this.$parent.childrenMounted){
        this.$parent.childrenMounted(this)
      }
    },
    destroyed(){
      if (this.scroll && this.$parent.childrenDestroyed){
        this.$parent.childrenDestroyed(this)
      }
    }
  };
</script>
<template>
  <div :class="classes">
    <div class="_logo" v-if="logo">
      <i v-if="logoType === 'icon'" :class="logo"/>
      <img v-else-if="logoType === 'image'" :src="logo"/>
    </div>
    <div
        class="_name"
        v-show="nameVisible"
        :style="`text-align: ${logo ? 'left' : 'center'}`">
      {{ name }}
    </div>
  </div>
</template>
<script>
  import ConfigMixins from '../../../mixins/config';
  import Utils from '../../../utils/index';

  export default {
    name: 'EaLogo',
    mixins: [ConfigMixins({
      collapse: [Boolean, String],
      theme: String,
    })],
    components: {},
    props: {
      name: String,
      logo: {
        type: String,
        default: '',
      },
      logoType: {
        type: String,
        default: 'icon',
        validator: v => ['icon', 'image'].includes(v),
      },
    },
    watch: {},
    data() {
      return {};
    },
    computed: {
      nameVisible() {
        return !this.mCollapse || !this.logo && Utils.strLen(this.name) < 7;
      },
      classes() {
        return {
          'ea-logo': true,
          [`ea--${this.mTheme}`]: true,
          '_only-logo': !this.name,
        };
      },
    },
    methods: {},
    created() {

    },
    mounted() {
    },
  };
</script>
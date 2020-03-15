<template>
  <div :class="classes">
    <div v-if="logo" class="_logo">
      <i v-if="logoType === 'icon'" :class="logo"/>
      <img v-else-if="logoType === 'image'" :src="logo"/>
    </div>
    <div
      v-show="nameVisible"
      class="_name"
      :style="`text-align: ${logo ? 'left' : 'center'}`"
    >
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
  };
</script>
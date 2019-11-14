<template>
  <div :class="{'ea-admin_logo': true,[`ea--${mTheme}`]: true}">
    <div class="_logo" v-if="logo">
      <i v-if="logoType === 'icon'" :class="logo"></i>
      <img v-else-if="logoType === 'image'" :src="logo">
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
    name: 'EaAdminLogo',
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
        validator: v => ['image', 'icon'].includes(v),
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
    },
    methods: {},
    created() {

    },
    mounted() {
    },
  };
</script>
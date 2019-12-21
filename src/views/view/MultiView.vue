<template>
  <ea-view :center="600" params-key="id">
    <template v-slot:default="{keys, active}">
      <multi-view-page
          v-for="id in keys"
          :id="id"
          :key="id"
          v-show="id === active"
          v-bind="$attrs"
      />
    </template>
  </ea-view>
</template>
<script>
  import MultiViewPage from './MultiViewPage.vue';

  export default {
    name: 'MultiView',
    components: {MultiViewPage},
  };
</script>

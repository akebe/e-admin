<template>
  <ea-view
      :center="400"
      class="ea-error"
  >
    <svg>
      <use :xlink:href="`#ea-icon-${code}`"/>
    </svg>
    <p>{{mMessage}}</p>
  </ea-view>
</template>
<script>
  const DefaultCodeMessage = {
    '403': '您无权访问该页面',
    '404': '您访问的页面不存在',
  };
  export default {
    name: 'Error',
    props: {
      code: String,
      message: String,
    },
    computed: {
      mMessage() {
        return this.message || DefaultCodeMessage[this.code] || '未知错误';
      },
    },
  };
</script>
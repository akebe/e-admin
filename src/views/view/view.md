#EaView 页面组件
建议在所有一级路由页面使用`ea-view`

###页面居中
配置`center`可以让页面居中，支持 `Boolean / Number[px] / String` 默认宽度`1000px`

<slot name="center"></slot>

###记录滚动条
`ea-view`默认启用`scroll-record`配置项记录滚动条位置，`tabs`切换会自动滚动到上次位置。
此功能通过[ vue-router的beforeEach ](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)实现

###backtop 回到顶部
默认启用`backtop`，向下滚动可以看到右下方的按钮。
没有提供配置项，提供插槽`backtop`，如需自定义可以在插槽内插入[el-backtop](https://element.eleme.cn/#/zh-CN/component/backtop)

###提示
**因为 [ keep-alive:include 只有名称匹配的组件会被缓存](https://cn.vuejs.org/v2/api/#keep-alive)，不管是否使用`ea-view`，组件`name`必须与`vue-router`设定的`name`一致，否则会导致`ea-tabs->keep-alive`缓存，及`scroll-record`滚动条记录失效**

`router.js`
```javascript
const View = () =>
  import ( /* webpackChunkName: "ea-view" */ '@/views/view/View.vue');

new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/view',
          name: 'View',      // 这个name
          component: View,
        },
      ],
    },
  ],
});
```
`View.vue`
```
<template>
  <ea-view center>
    <view-md></view-md>
  </ea-view>
</template>
<script>
  import viewMd from './view.md';

  export default {
    name: 'View',         // 这个name
    components: {
      viewMd,
    },
```

<slot name="table"></slot>
#EaNavMenu 导航菜单
为网站提供导航功能的菜单。

<slot></slot>

###数据
通过`data`配置导航菜单，`side > ea-nav-menu`这个导航菜单数据建议独立维护，[EaTabs](#/ea-tabs)、[EaHeader](#/ea-header) 通常也需要用到
```
[
  {
    title: '',          // 标题
    path: '',           // el-nav-menu的index 即路由跳转path
    icon: '',           // 图标    
    src: '',            // 图片格式图标
    group: false,       // 是否是分组菜单      
    disabled: false,    // 是否禁用 
    visible: true,      // 是否显示 设为false隐藏 
    children: [         // 子菜单， group 为 true 的情况下此项被解析为分组菜单
      ...
    ],
    onOpen(tab, first) {},   // 监听标签打开 作为参数传给ea-tabs生效
    onClose(tab) {},         // 监听标签关闭 作为参数传给ea-tabs生效
  },
]
```

###router
默认通过`value/v-model`来设置当前激活菜单，如果设置`router = true`则使用`vue-router`模式，启用该模式会在激活导航时以`path`进行路由跳转
路由切换会自动根据`path`改变激活导航，如果希望未被`data`配置的子路由激活，可以在对应`route`配置`mete.childrenAgent = true`，进行代理

<slot name="table"></slot>

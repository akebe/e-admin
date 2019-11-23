#EaHeader 头部组件
内置常用中后台页头功能

<slot></slot>

###collapse
展示`collapse`按钮，控制左侧边栏是否折叠，如配置请确保全局使用同一变量

<slot name="collapse"></slot>

###nav-data
页面导航菜单配置文件，`breadcrumbs`默认按路由`matched`展示，传入此参数可以按照设定的关系展示面包屑

<slot name="navData"></slot>

###notice
展示`notice`按钮，点击后触发`command('notice')`

<slot name="notice"></slot>

###fullscreen
展示全屏缩放功能按钮

<slot name="fullscreen"></slot>

###user
当前登录人数据对象
```
{
  name: '未知', 
  avatar: ''
}
```

###dropdown-menu
下拉菜单
接受一个数组参数，支持对象如下
```
{
  value: 'me',       // 菜单点击后作为command参数被传出
  label: '我的信息', // 菜单显示标题
  divided: false,    // 是否显示下划线
};
```
默认配置
```
[
  {value: 'me', label: '我的信息', divided: false},
  {value: 'setting', label: '设置', divided: false},
  {value: 'logout', label: '退出', divided: true},
]
```

<slot name="table"></slot>

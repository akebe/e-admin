export default [
  {
    prop: 'collapse',
    desc: 'side是否折叠，Boolean控制折叠状态，如不需显示传入字符串"false"',
    type: 'Boolean / String',
    enum: 'true / false / "false"',
    default: 'false',
    config: true,
  },
  {
    prop: 'notice',
    desc: '消息按钮，false 不显示 true 显示小圆点 其他内容作为el-badge内容展示',
    type: 'String / Number / Boolean',
    enum: '-',
    default: '-',
  },
  {prop: 'notice-content', desc: 'notice提示文本', type: 'Sting', enum: '-', default: '消息'},
  {prop: 'fullscreen', desc: '是否展示全屏/缩放按钮', type: 'Boolean', enum: '-', default: 'true'},
  {prop: 'user', desc: '当前登录人对象，数据格式见文档', type: 'Object', enum: '-', default: '{name: ""}'},
  {prop: 'dropdown-menu', desc: '下拉菜单内容', type: 'Array', enum: '-', default: '见上文'},
  {
    prop: 'nav-data',
    desc: '页面导航菜单配置文件，breadcrumbs默认按路由matched展示，传入此参数可以按照设定的关系展示面包屑，当前示例页面没有传参，可与文档header对比',
    type: 'Array',
    enum: '-',
    default: '见上文',
  },
];
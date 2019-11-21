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
    prop: 'home',
    desc: '首页标签',
    type: 'Object',
    enum: '-',
    default: '{"path": "/", "title": "首页", "name": "Index", "icon": "ea-icon-home"}',
    config: true
  },
  {
    prop: 'nav-data',
    desc: '页面导航菜单配置文件，用来匹配tabs展示数据',
    type: 'Array',
    enum: '-',
    default: '[]',
  },
  {
    prop: 'validator',
    desc: 'tabs验证，没有被done的路由不会添加到tabs',
    type: 'Function(tab, done)',
    enum: '-',
    default: '-',
  },
];
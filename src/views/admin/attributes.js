export default [
  {prop: 'collapse', desc: 'side是否折叠', type: 'Boolean', enum: '-', default: 'false', config: true},
  {prop: 'theme', desc: '皮肤类型', type: 'String', enum: 'white / dark', default: 'dark', config: true},
  {
    prop: 'home',
    desc: '首页标签',
    type: 'Object',
    enum: '-',
    default: '{"path": "/", "title": "首页", "name": "Index", "icon": "ea-icon-home"}',
    config: true
  },
  {prop: 'header-auto-hide', desc: '头部是否自动隐藏', type: 'Boolean', enum: '-', default: 'true', config: true},
  {
    prop: 'side-max-width',
    desc: 'side展开后宽度',
    type: 'Number / String',
    enum: '-',
    default: '200px',
    config: true,
  },
  {
    prop: 'side-min-width',
    desc: 'side缩进后宽度',
    type: 'Number / String',
    enum: '-',
    default: '64px',
    config: true,
  },
];
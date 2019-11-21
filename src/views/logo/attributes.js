export default [
  {
    prop: 'collapse',
    desc: '菜单是否折叠',
    type: 'Boolean',
    enum: 'true / false',
    default: 'false',
    config: true,
  },
  {
    prop: 'theme',
    desc: '皮肤类型',
    type: 'String',
    enum: 'white / dark',
    default: 'dark',
    config: true,
  },
  {
    prop: 'name',
    desc: '标题',
    type: 'String',
    enum: '-',
    default: '-',
  },
  {
    prop: 'logo',
    desc: '图标class或图片路径',
    type: 'String',
    enum: '-',
    default: '-',
  },
  {
    prop: 'logo-type',
    desc: '设定logo类型',
    type: 'String',
    enum: 'icon / image',
    default: 'icon',
  },
];
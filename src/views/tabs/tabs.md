#EaTabs 标签栏组件
插入此组件默认情况下会通过`keep-alive`缓存历史`vue-router`记录

<slot></slot>

###collapse
展示`collapse`按钮，控制左侧边栏是否折叠，如配置请确保全局使用同一变量

<slot name="collapse"></slot>

###tabs标签展示内容设置
`tabs`的展示内容可以通过`route.meta.tabs`来设置，支持以下内容
```
{
  path: '/ea-tabs',
  name: 'EaTabs',               // 3.没有meta.title的情况下匹配这个标题
  component: EaTabs,
  meta: {
    tabs: {                    // 设定为tabs: false这个路由不缓存，不显示标签  
      title: '左侧菜单',        // 1.显示的标题
      icon: 'ea-icon-tabs',    // 显示图标
      src: '/img/tabs.svg',    // 以图片展示图标
      onOpen(tab, first) {},   // 监听标签打开 [可以动态改变tab.title || tab.icon]
      onClose(tab) {},         // 监听标签关闭
    },
    title: '左侧菜单',          // 2.没有tabs的情况下匹配这个标题
  },
},
```

如果不想每个路由都配置，可以通过`nav-data`传入页面导航菜单配置文件，路由`path`需与`nav-data`的`path`匹配，匹配展示优先顺序如下  
 `route.meta.tabs` > `nav-data` > `route.meta` > `route`

<slot name="navData"></slot>

###首页标签设置
可以通过`home`设置首页标签。
默认使用`$ea.config.home`全局配置
```
home: {
  path: '/',
  title: '首页',
  name: 'Index',
  icon: 'ea-icon-home',
},
```

###标签关闭事件
关闭标签页面会撤出`keep-alive`导致丢失缓存，可以通过监听`tabs-close-before`进行标签关闭前逻辑处理
```
mounted() {
  let path = this.$route.path;
  this.tabsCloseBefore = tab => {
    if (tab.path === path) {
      // 可以通过 return false; 同步阻止关闭
      // return false;

      // 可选 在监听这个页面关闭并需要验证的时候跳转到这个页面
      if (this.$route.path !== path) {
        this.$router.push(path);
      }

      // 通常返回一个 Promise 并 reject 来阻止关闭
      return this.$confirm('确定要关闭这个页面吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      });
    }
  };

  this.$ea.$on('tabs-close-before', this.tabsCloseBefore);
},
beforeDestroy() {
  this.$ea.$off('tabs-close-before', this.tabsCloseBefore);
},
```
可以监听`tabs-close-after`来处理标签关闭后的逻辑
```
this.$ea.$on('tabs-close-after', tab => {
  /* code */
});
```
###手动关闭标签
在全局提供了一个标签关闭方法 `this.$ea.tabsClose(path)`;
接受的参数是路由路径 `$route.path`,如果不传参默认关闭当前打开的标签页。
请注意全局`$ea.tabsClose(path)`与实例`$refs.tabs.tabsClose(tabs)`不是同一个方法，后者接受的参数是已打开`tabs`的缓存数组，如果默认配置没变，该缓存能在`this.$ea.config.page.tabs`得到。

<slot name="table"></slot>
#EaAdmin 后台主框架
渐进式架构，可选通过提供插槽插入对应组件完成后台搭建
###配置
可按插槽名插入对应组件完成后台搭建，完整配置如下
```html
<ea-admin>
  <template v-slot:header>
    <ea-header
        collapse="false"
        :notice="0"
        :user="user"
        :nav-data="navData"
    ></ea-header>
  </template>
  <template v-slot:tabs>
    <ea-tabs
        :nav-data="navData"
    ></ea-tabs>
  </template>
  <template v-slot:side>
    <ea-logo
        name="e-admin"
        :logo="logo"
        logo-type="image"
    ></ea-logo>
    <ea-nav-menu
        router
        :data="navData"
        v-model="active"
    ></ea-nav-menu>
  </template>
</ea-admin>
```
默认插槽默认配置了对`tabs`的`include`  
```
<keep-alive :include="include">
  <router-view/>
</keep-alive>
```
如需自定义请配置`include`为`this.$ea.config.page.tabs.map(v => v.name)`  
###Side折叠
通过`collapse`控制左侧边栏是否折叠  

<slot name="collapse"></slot>

###头部自动隐藏
为了能展示更多内容，当检测到鼠标向下滚动时`slot->header`会自动隐藏，这项配置默认启用，可通过`header-auto-hide`关闭  

<slot name="headerAutoHide"></slot>

<slot name="table"></slot>

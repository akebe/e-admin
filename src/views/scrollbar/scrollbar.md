#EaScrollbar 滚动容器组件

众所周知`element-ui` 有个隐藏组件`el-scrollbar`，不知是我使用姿势不对还是别的原因，它总是会出现默认的横向滚动条
```css
.el-scrollbar__wrap {
  overflow-x: hidden;
}
```
虽然参考了网上的代码使用这段样式来屏蔽它，但是遇到了滚动条高度计算出错的问题，于是考虑添加这个独立的滚动容器组件，代码简单可控

使用方式

```
<ea-scrollbar style="height: 300px;">
  <!-- your html -->
</ea-scrollbar>
```
<slot></slot>

### Utils.scrollTo 平滑滚动
```
import {Utils} from 'e-admin';

Utils.scrollTo(0)

Utils.scrollTo(this.$refs.item[10], {el: this.$refs.scrollbar, offset: 100})
```

第一个参数可以是数字，也可以是目标`dom` ，默认滚动的是`document.documentElement`，通过第二个参数`options.el`设置指定滚动容器

`EaScrollbar`内置了`scrollTo`方法，也是通过此函数实现
```
this.$refs.scrollbar.scrollTo(0) // 可以传入字符串`bottom` 滚动到底部
```

<slot name="table"></slot>
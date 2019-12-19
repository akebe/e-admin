#EaImage 图片 

增强版图片标签，提供加载错误提示，支持图标显示

引入
```
import Vue from 'vue';
import { EaImage } from 'e-admin';

Vue.use(EaImage);
```
基础用法
```
<ea-image
    src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
    size="large"
    :preview-src-list="['https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg']"
    hover
/>
```
可通过`previewSrcList` 开启预览大图的功能，这个功能需要手动安装需要`ElImageViewer`
在`main.js`全局安装这个组件
```
import Vue from 'vue';
import ElImageViewer from 'element-ui/packages/image/src/image-viewer';

Vue.component(ElImageViewer.name, ElImageViewer);
```
<slot></slot>

###配置项效果

<slot name="attr"></slot>

###边框样式

<slot name="border"></slot>

###尺寸大小
通过`size`控制图片大小，内置了`mini`,`small`,`medium`,`large`几个大小，可以通过传入`Number`数字自定义大小  
默认是宽高一致，也能通过`width`,`height`进行自定义

<slot name="size"></slot>

###形状
通过`shape` 设置图片的形状，可选 `square` / `circle` / `''`。

<slot name="shape"></slot>

###遮罩
通过`mask`启用遮罩，通常通过在插槽内插入操作图标，用来对图片进行额外操作

<slot name="mask"></slot>

<slot name="table"></slot>
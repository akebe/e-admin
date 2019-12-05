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
    hover
/>
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

###遮罩
通过`mask`启用遮罩，通常通过在插槽内插入操作图标，用来对图片进行额外操作

<slot name="mask"></slot>

<slot name="table"></slot>
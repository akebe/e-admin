#EaImageDialog 图片选择器 

用于处理图片添加选择功能

###引入
```
import Vue from 'vue';
import { EaImage, EaImageDialog } from 'e-admin';

Vue.use(EaImage).use(EaImageDialog);
```
###基础用法
通过组件调用
```
<ea-image-dialog
    action="https://jsonplaceholder.typicode.com/posts/"
    :visible.sync="dialogVisible"
    :on-success="onSuccess"
></ea-image-dialog>
```
`on-success`的第一个参数封装了`el-upload`的三个回调参数`{response, file, fileList}`你需要在`on-success`的第二个参数回传图片`url`
```
onSuccess({response, file}, done) {
  
  // 例子中没有配置后台采用此方式显示图片
  done(URL.createObjectURL(file.raw));
  
  // 实际使用中请根据后台返回数据回调图片src地址
  if (!response.code) {
    done(response.data.src);
  }
 
},
```
###全局方法
如果你完整引入`e-admin`，它会添加`Vue.prototype.$imageDialog`和`Ea.imageDialog`方法
你可以简单的在实例中通过
```
this.$imageDialog({
  action: 'https://jsonplaceholder.typicode.com/posts/',
}).then(src => {

});
```
或者
```
import Ea from 'e-admin';

Ea.imageDialog({
  action: 'https://jsonplaceholder.typicode.com/posts/',
}).then(src => {

});
```
来直接使用组件

你还可以通过此方法下面暴露出来的`setOptions(options)`来设置默认参数
```
Ea.imageDialog.setOptions({action: 'https://jsonplaceholder.typicode.com/posts/'})
```
这样调用起来就更加简洁了
```
Ea.imageDialog().then(src => {

});
```
<slot></slot>

<slot name="table"></slot>
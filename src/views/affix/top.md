```
<ea-affix :offset-top="100" @change="v => $message.success(`ea-affix change: ${v}`)">
  <demo-block>
    <template v-slot:source>
      向下滚动，这个代码示例区块会被固定在距离屏幕顶部<code>100px</code>的位置
    </template>
    <template v-slot:highlight>
      <top-md/>
    </template>
  </demo-block>
</ea-affix>
```
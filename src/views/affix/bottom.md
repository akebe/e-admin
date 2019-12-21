```
<ea-affix :offset-bottom="100">
  <demo-block>
    <template v-slot:source>
      向上滚动，这个代码示例区块会被固定在距离屏幕底部<code>100px</code>的位置
    </template>
    <template v-slot:highlight>
      <bottom-md/>
    </template>
  </demo-block>
</ea-affix>
```
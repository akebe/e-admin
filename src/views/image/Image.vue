<template>
  <ea-view center>
    <image-md class="image-demo">
      <ea-image
          src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
          size="large"
          :preview-src-list="['https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg']"
          hover
      />
      <template v-slot:attr>
        <demo-block>
          <template v-slot:source>
            图片效果
            <div>
              <ea-image src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"/>
              <ea-image src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                        border/>
              <ea-image src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                        hover/>
              <ea-image src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                        hover disabled/>
              <ea-image src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                        hover error/>
            </div>
            图标效果
            <div>
              <ea-image icon="el-icon-picture-outline"/>
              <ea-image icon="el-icon-picture-outline" border/>
              <ea-image icon="el-icon-picture-outline" hover/>
              <ea-image icon="el-icon-picture-outline" hover disabled/>
              <ea-image icon="el-icon-picture-outline" hover error/>
              <ea-image icon="el-icon-loading" hover/>
            </div>
          </template>
          <template v-slot:highlight>
            <attr-md/>
          </template>
        </demo-block>
      </template>
      <template v-slot:border>
        <demo-block>
          <template v-slot:source>
            默认边框样式是<code>1px solid #d7dae2</code>
            <div>
              <ea-image icon="el-icon-picture-outline" border/>
            </div>
            可以在<code>border</code>传入字符串自定义边框样式，例如：<code>1px dashed #777</code>
            <br>自定义边框的颜色依旧会被内置状态强制影响
            <div>
              <ea-image icon="el-icon-picture-outline" border="1px dashed #777"/>
              <ea-image icon="el-icon-picture-outline" border="1px dashed #777" hover/>
              <ea-image icon="el-icon-picture-outline" border="1px dashed #777" hover error/>
            </div>
          </template>
          <template v-slot:highlight>
            <border-md/>
          </template>
        </demo-block>
      </template>
      <template v-slot:size>
        <demo-block>
          <template v-slot:source>
            <div>
              <ea-image
                  src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                  border
                  size="mini"/>
              <ea-image
                  src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                  border
                  size="small"/>
              <ea-image
                  src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                  border
                  size="medium"/>
              <ea-image
                  src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                  border
                  size="large"/>
              <ea-image
                  src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                  border
                  :size="150"/>
              <ea-image
                  src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
                  width="250px"
                  border
                  height="150px"/>
            </div>
          </template>
          <template v-slot:highlight>
            <size-md/>
          </template>
        </demo-block>
      </template>
      <template v-slot:shape>
        <demo-block>
          <code>square</code>默认带有小圆角样式，如果不想要这个效果，可以传入空字符串
          <template v-slot:source>
            <ea-image
                border
                shape=""
                size="large"
                src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
            />
            <ea-image
                border
                shape="square"
                size="large"
                src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
            />
            <ea-image
                border
                shape="circle"
                size="large"
                src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg"
            />
          </template>
          <template v-slot:highlight>
            <shape-md/>
          </template>
        </demo-block>
      </template>
      <template v-slot:mask>
        <demo-block>
          <template v-slot:source>
            <ea-image
                mask
                size="large"
                src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg">
              <template v-slot:mask>
                <a class="el-icon-edit" style="font-size:20px;color:#fff"></a>
                <a class="el-icon-delete" style="font-size:20px;color:#fff;margin-left: 20px"></a>
              </template>
            </ea-image>
            <ea-image
                hover
                mask
                size="large"
                src="https://github.githubassets.com/images/modules/site/sponsors/logo-mona.svg">
              <template v-slot:mask>
                <a class="el-icon-edit" style="font-size:20px;color:#fff"></a>
                <a class="el-icon-delete" style="font-size:20px;color:#fff;margin-left: 20px"></a>
              </template>
            </ea-image>
          </template>
          <template v-slot:highlight>
            <mask-md/>
          </template>
        </demo-block>
      </template>
      <template v-slot:table>
        <document-table :data="attributes"/>
      </template>
    </image-md>
  </ea-view>
</template>
<script>
  import imageMd from './image.md';
  import attrMd from './attr.md';
  import borderMd from './border.md';
  import sizeMd from './size.md';
  import maskMd from './mask.md';
  import shapeMd from './shape.md';
  import attributes from './attributes.js';

  export default {
    name: 'Image',
    components: {
      imageMd,
      attrMd,
      borderMd,
      sizeMd,
      maskMd,
      shapeMd,
    },
    props: {},
    watch: {},
    data() {
      return {
        attributes,
      };
    },
    computed: {},
    methods: {},
    created() {
    },
    mounted() {
    },
  };
</script>
<style scoped>
  .image-demo >>> .ea-image {
    margin-right: 3px;
  }
</style>
<style>
</style>
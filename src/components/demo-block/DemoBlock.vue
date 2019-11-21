<template>
  <div
      class="demo-block"
      :class="[blockClass, { 'hover': hovering }]"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div
        class="demo-block-control"
        ref="control"
        :class="{ 'is-fixed': fixedControl }"
        @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
      <!--<el-tooltip effect="dark" :content="langConfig['tooltip-text']" placement="right">
        <transition name="text-slide">
          <el-button
              v-show="hovering || isExpanded"
              size="small"
              type="text"
              class="control-button"
              @click.stop="goCodepen">
            {{ langConfig['button-text'] }}
          </el-button>
        </transition>
      </el-tooltip>-->
    </div>
  </div>
</template>
<script>
  import compoLang from '@/i18n/components.json';
  import {stripScript, stripStyle, stripTemplate} from '@/utils/index';

  const version = '0.0.2';
  import './index.less';

  export default {
    name: 'DemoBlock',
    data() {
      return {
        codepen: {
          script: '',
          html: '',
          style: '',
        },
        hovering: false,
        isExpanded: false,
        fixedControl: false,
        scrollParent: null,
      };
    },
    methods: {
      goCodepen() {
        // since 2.6.2 use code rather than jsfiddle https://blog.codepen.io/documentation/api/prefill/
        const {script, html, style} = this.codepen;
        const resourcesTpl = '<scr' + 'ipt src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>' +
          '\n<scr' + `ipt src="//unpkg.com/element-ui@${ version }/lib/index.js"></scr` + 'ipt>';
        let jsTpl = (script || '').replace(/export default/, 'var Main =').trim();
        let htmlTpl = `${resourcesTpl}\n<div id="app">\n${html.trim()}\n</div>`;
        let cssTpl = `@import url("//unpkg.com/element-ui@${ version }/lib/theme-chalk/index.css");\n${(style || '').trim()}\n`;
        jsTpl = jsTpl
          ? jsTpl + '\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount(\'#app\')'
          : 'new Vue().$mount(\'#app\')';
        const data = {
          js: jsTpl,
          css: cssTpl,
          html: htmlTpl,
        };
        const form = document.getElementById('fiddle-form') || document.createElement('form');
        while (form.firstChild) {
          form.removeChild(form.firstChild);
        }
        form.method = 'POST';
        form.action = 'https://codepen.io/pen/define/';
        form.target = '_blank';
        form.style.display = 'none';
        const input = document.createElement('input');
        input.setAttribute('name', 'data');
        input.setAttribute('type', 'hidden');
        input.setAttribute('value', JSON.stringify(data));
        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
      },
      scrollHandler() {
       /* const {top, bottom, left} = this.$refs.meta.getBoundingClientRect();
        this.fixedControl = bottom > document.documentElement.clientHeight &&
          top + 44 <= document.documentElement.clientHeight;
        this.$refs.control.style.left = this.fixedControl ? `${ left }px` : '0';*/
      },
      removeScrollHandler() {
        this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler);
      },
    },
    computed: {
      lang() {
        return 'zh-CN';
      },
      langConfig() {
        return compoLang.filter(config => config.lang === this.lang)[0]['demo-block'];
      },
      blockClass() {
        return `demo-${ this.lang } demo-${ this.$router.currentRoute.path.split('/').pop() }`;
      },
      iconClass() {
        return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom';
      },
      controlText() {
        return this.isExpanded ? this.langConfig['hide-text'] : this.langConfig['show-text'];
      },
      codeArea() {
        return this.$el.getElementsByClassName('meta')[0];
      },
      codeAreaHeight() {
        if (this.$el.getElementsByClassName('description').length > 0) {
          return this.$el.getElementsByClassName('description')[0].clientHeight +
            this.$el.getElementsByClassName('highlight')[0].clientHeight + 20;
        }
        return this.$el.getElementsByClassName('highlight')[0].clientHeight;
      },
    },
    watch: {
      isExpanded(val) {
        this.codeArea.style.height = val ? `${ this.codeAreaHeight + 1 }px` : '0';
        if (!val) {
          this.fixedControl = false;
          this.$refs.control.style.left = '0';
          this.removeScrollHandler();
          return;
        }
        setTimeout(() => {
          this.scrollParent = document.querySelector('.page-component__scroll > .el-scrollbar__wrap');
          this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler);
          this.scrollHandler();
        }, 200);
      },
    },
    created() {
      const highlight = this.$slots.highlight;
      if (highlight && highlight[0]) {
        let code = '';
        let cur = highlight[0];
        if (cur.tag === 'pre' && (cur.children && cur.children[0])) {
          cur = cur.children[0];
          if (cur.tag === 'code') {
            code = cur.children[0].text;
          }
        }
        if (code) {
          this.codepen.html = stripTemplate(code);
          this.codepen.script = stripScript(code);
          this.codepen.style = stripStyle(code);
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        let highlight = this.$el.getElementsByClassName('highlight')[0];
        if (this.$el.getElementsByClassName('description').length === 0) {
          highlight.style.width = '100%';
          highlight.borderRight = 'none';
        }
      });
    },
    beforeDestroy() {
      this.removeScrollHandler();
    },
  };
</script>
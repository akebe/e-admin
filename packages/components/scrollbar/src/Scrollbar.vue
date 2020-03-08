<template>
  <div class="ea-scrollbar" ref="scrollbar">
    <div class="ea-scrollbar__content" ref="content">
      <slot/>
    </div>
    <div
      v-show="barVisible"
      :class="`ea-scrollbar__bar ${barActive ? 'active' : ''}`"
      :style="barStyle"
      ref="bar"
    />
  </div>
</template>
<script>
  import './index.less';
  import scrollTo from '../../../utils/scroll-to.js';

  export default {
    name: 'EaScrollbar',
    props: {
      scrollbarMinHeight: {
        type: Number,
        default: 40,
      },
    },
    data() {
      return {
        scrollHeight: 0,
        scrollTop: 0,
        clientHeight: 0,
        barActive: false,
        focus: false,
      };
    },
    computed: {
      barVisible() {
        if (this.scrollHeight > this.clientHeight) {
          return this.barActive || this.focus;
        }
        return false;
      },
      barHeight() {
        const {clientHeight, scrollHeight} = this;
        return clientHeight * clientHeight / scrollHeight;
      },
      barStyle() {
        const {barHeight, clientHeight, scrollHeight, scrollTop, scrollbarMinHeight} = this;
        let y = 0, height = barHeight < scrollbarMinHeight ? scrollbarMinHeight : barHeight;
        if (scrollTop) {
          //滚动条高度占比
          let scrollTopScale = scrollTop / (scrollHeight - clientHeight);
          //换算成bar的高度
          let barScrollTop = (clientHeight - height - 2) * scrollTopScale;
          //折算成比例
          y = barScrollTop / height * 100;
        }
        return {
          height: `${height}px`,
          transform: `translateY(${y}%)`,
        };
      },
      isScrollBottom() {
        return !(this.scrollHeight - this.scrollTop - this.clientHeight);
      },
    },
    methods: {
      scrollTo(scrollTop = 0) {
        const {content} = this.$refs;
        if (scrollTop === 'bottom') {
          scrollTop = content.scrollHeight - content.clientHeight;
        }
        scrollTo(scrollTop, {el: content});
      },
      updateScrollbarArea() {
        const {content} = this.$refs;
        if (content) {
          this.scrollHeight = content.scrollHeight;
          this.scrollTop = content.scrollTop;
          this.clientHeight = content.clientHeight;
        }
      },
      addEventListener() {
        const {content, bar, scrollbar} = this.$refs;

        let clientY, scrollTop, barScale;

        const barMousedown = e => {
          if (e.target === bar) {
            e.preventDefault();
            clientY = e.clientY - bar.offsetTop;
            scrollTop = content.scrollTop;
            barScale = content.clientHeight / this.barHeight;
            document.addEventListener('mousemove', documentMouseMove);
            document.addEventListener('mouseup', documentMouseUp);
            this.barActive = true;
          }
        };

        const contentScroll = () => {
          this.scrollTop = content.scrollTop;
        };

        const documentMouseMove = e => {
          e.preventDefault();
          const y = (e.clientY - clientY) / this.barHeight;
          let _scrollTop = scrollTop + (this.barHeight * y * barScale);
          _scrollTop = _scrollTop < 0 ? 0 : _scrollTop > content.scrollHeight ? content.scrollHeight : _scrollTop;
          content.scrollTop = _scrollTop;
          this.scrollTop = _scrollTop;
        };

        const documentMouseUp = () => {
          document.removeEventListener('mousemove', documentMouseMove);
          document.removeEventListener('mouseup', documentMouseUp);
          this.barActive = false;
        };

        const scrollbarMouseenter = () => {
          this.focus = true;
        };

        const scrollbarMouseout = event => {
          if (this.focus) {
            let e = event.toElement || event.relatedTarget;
            while (e && e.parentNode && e.parentNode !== window) {
              if (e.parentNode === scrollbar || e === scrollbar) {
                if (e.preventDefault) e.preventDefault();
                return false;
              }
              e = e.parentNode;
            }
            this.focus = false;
          }
        };

        bar.addEventListener('mousedown', barMousedown);
        content.addEventListener('scroll', contentScroll);
        scrollbar.addEventListener('mouseenter', scrollbarMouseenter);
        scrollbar.addEventListener('mouseout', scrollbarMouseout);

        this.barMousedown = barMousedown;
        this.contentScroll = contentScroll;
        this.scrollbarMouseenter = scrollbarMouseenter;
        this.scrollbarMouseout = scrollbarMouseout;
      },
      removeEventListener() {
        const {content, bar, scrollbar} = this.$refs;

        bar.removeEventListener('mousedown', this.barMousedown);
        content.removeEventListener('scroll', this.contentScroll);
        scrollbar.removeEventListener('mouseenter', this.scrollbarMouseenter);
        scrollbar.removeEventListener('mouseout', this.scrollbarMouseout);

      },
    },
    mounted() {
      this.$nextTick(() => {
        this.updateScrollbarArea();
        this.addEventListener();
      });
    },
    updated() {
      this.$nextTick(() => {
        this.updateScrollbarArea();
      });
    },
    beforeDestroy() {
      this.removeEventListener();
    },
  };
</script>
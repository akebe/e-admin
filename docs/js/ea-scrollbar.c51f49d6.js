(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ea-scrollbar"],{"0891":function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ea-view",{attrs:{center:""}},[a("scrollbar-md",{scopedSlots:t._u([{key:"table",fn:function(){return[a("document-table",{attrs:{data:t.attributes}})]},proxy:!0}])},[a("demo-block",{scopedSlots:t._u([{key:"source",fn:function(){return[a("div",{staticClass:"flex"},[a("ea-scrollbar",{ref:"scrollbar",staticClass:"flex-body bord",staticStyle:{"max-height":"300px"}},t._l(t.data.size,(function(s){return a("div",{key:s,ref:"item",refInFor:!0,staticClass:"pad_m bord-btm"},[t._v(" "+t._s(s)+" ")])})),0),a("el-form",{ref:"form",staticClass:"flex-body",attrs:{model:t.data,size:"small","label-width":"120px"}},[a("el-form-item",{attrs:{label:"长度",prop:"size"}},[a("el-input-number",{model:{value:t.data.size,callback:function(s){t.$set(t.data,"size",s)},expression:"data.size"}})],1),a("el-form-item",{attrs:{label:"输入列数",prop:"elIndex"}},[a("el-input-number",{attrs:{min:1,max:t.data.size},model:{value:t.data.elIndex,callback:function(s){t.$set(t.data,"elIndex",s)},expression:"data.elIndex"}}),a("el-button",{staticClass:"mar-lft",attrs:{type:"primary"},on:{click:function(s){return t.scrollTo(t.$refs.item[t.data.elIndex-1])}}},[t._v(" 滚动 ")]),t._v(" 到指定dom ")],1),a("el-form-item",{attrs:{label:"输入高度",prop:"scrollTop"}},[a("el-input-number",{attrs:{min:0},model:{value:t.data.scrollTop,callback:function(s){t.$set(t.data,"scrollTop",s)},expression:"data.scrollTop"}}),a("el-button",{staticClass:"mar-lft",attrs:{type:"primary"},on:{click:function(s){return t.scrollTo(t.data.scrollTop)}}},[t._v(" 滚动 ")]),t._v(" 到指定scrollTop ")],1)],1)],1)]},proxy:!0},{key:"highlight",fn:function(){return[a("scrollbar-demo-md")]},proxy:!0}])})],1)],1)},o=[];a.d(s,"a",(function(){return n})),a.d(s,"b",(function(){return o}))},"2e1a":function(t,s,a){"use strict";a.r(s);var n=a("0891"),o=a("ec62");for(var e in o)"default"!==e&&function(t){a.d(s,t,(function(){return o[t]}))}(e);var r=a("4e82"),p=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);s["default"]=p.exports},"5ead":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"markdown"},[a("pre",[a("code",{staticClass:"html"},[a("span",{staticClass:"token operator"},[t._v("<")]),t._v("template"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n  "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("div "),a("span",{staticClass:"token keyword"},[t._v("class")]),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"flex"')]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n    "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("ea"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("scrollbar\n      ref"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"scrollbar"')]),t._v("\n      "),a("span",{staticClass:"token keyword"},[t._v("class")]),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"flex-body bord"')]),t._v("\n      style"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"max-height: 300px;"')]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n      "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("div\n        v"),a("span",{staticClass:"token operator"},[t._v("-")]),a("span",{staticClass:"token keyword"},[t._v("for")]),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"i in data.size"')]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("key"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"i"')]),t._v("\n        ref"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"item"')]),t._v("\n        "),a("span",{staticClass:"token keyword"},[t._v("class")]),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"pad_m bord-btm"')]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[t._v("{")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v(" i "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n      "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("div"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n    "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("ea"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("scrollbar"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n    "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("form\n      ref"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"form"')]),t._v("\n      "),a("span",{staticClass:"token keyword"},[t._v("class")]),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"flex-body"')]),t._v("\n      "),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("model"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"data"')]),t._v("\n      size"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"small"')]),t._v("\n      label"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("width"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"120px"')]),t._v("\n    "),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n      "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("form"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("item label"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"长度"')]),t._v(" prop"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"size"')]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n        "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("input"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("number v"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("model"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"data.size"')]),a("span",{staticClass:"token operator"},[t._v("/")]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n      "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("form"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("item"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n      "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("form"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("item label"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"输入列数"')]),t._v(" prop"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"elIndex"')]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n        "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("input"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("number\n          v"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("model"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"data.elIndex"')]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("min"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"1"')]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("max"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"data.size"')]),t._v("\n        "),a("span",{staticClass:"token operator"},[t._v("/")]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n        "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("button\n          type"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"primary"')]),t._v("\n          "),a("span",{staticClass:"token keyword"},[t._v("class")]),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"mar-lft"')]),t._v("\n          @click"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"scrollTo($refs.item[data.elIndex -1 ])"')]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n          滚动\n        "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("button"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n        到指定dom\n      "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("form"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("item"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n      "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("form"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("item label"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"输入高度"')]),t._v(" prop"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"scrollTop"')]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n        "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("input"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("number\n          v"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("model"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"data.scrollTop"')]),t._v("\n          "),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v("min"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"0"')]),t._v("\n        "),a("span",{staticClass:"token operator"},[t._v("/")]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n        "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("button\n          type"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"primary"')]),t._v("\n          @click"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"scrollTo(data.scrollTop)"')]),t._v("\n          "),a("span",{staticClass:"token keyword"},[t._v("class")]),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"mar-lft"')]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n          滚动\n        "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("button"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n        到指定scrollTop\n      "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("form"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("item"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n    "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("form"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n  "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("div"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n"),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("template"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n"),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("script"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n  "),a("span",{staticClass:"token keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("default")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),a("span",{staticClass:"token function"},[t._v("data")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n        data"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n          size"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("30")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n          elIndex"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("15")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n          scrollTop"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("0")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n        "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n      "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    methods"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      "),a("span",{staticClass:"token function"},[t._v("scrollTo")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token parameter"},[t._v("val")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n        "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$refs"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("scrollbar"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("scrollTo")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("val"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n      "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n  "),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("script"),a("span",{staticClass:"token operator"},[t._v(">")])])])])}],e=a("4e82"),r={},p=Object(e["a"])(r,n,o,!1,null,null,null);s["default"]=p.exports},"96ac":function(t,s,a){var n,o,e;(function(a,r){o=[s],n=r,e="function"===typeof n?n.apply(s,o):n,void 0===e||(t.exports=e)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=[{prop:"scrollbar-min-height",desc:"滚动滑条的最低高度",type:"Number",enum:"-",default:"40"}];t.default=s}))},ec62:function(t,s,a){"use strict";a.r(s);var n=a("f3a3"),o=a.n(n);for(var e in n)"default"!==e&&function(t){a.d(s,t,(function(){return n[t]}))}(e);s["default"]=o.a},f3a3:function(t,s,a){var n,o,e;(function(r,p){o=[s,a("fe72"),a("5ead"),a("96ac")],n=p,e="function"===typeof n?n.apply(s,o):n,void 0===e||(t.exports=e)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(t,s,n,o){"use strict";var e=a("676a");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s=e(s),n=e(n),o=e(o);var r={name:"Scrollbar",components:{scrollbarMd:s.default,scrollbarDemoMd:n.default},props:{},watch:{},data:function(){return{data:{size:30,elIndex:15,scrollTop:0},attributes:o.default}},computed:{},methods:{scrollTo:function(t){this.$refs.scrollbar.scrollTo(t)}},created:function(){},mounted:function(){}};t.default=r}))},fe72:function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"markdown"},[a("h1",[t._v("EaScrollbar 滚动容器组件")]),t._m(0),t._m(1),a("p",[t._v("虽然参考了网上的代码使用这段样式来屏蔽它，但是遇到了滚动条高度计算出错的问题，于是考虑添加这个独立的滚动容器组件，代码简单可控")]),a("p",[t._v("使用方式")]),t._m(2),a("p",[t._t("default")],2),a("h3",[t._v("Utils.scrollTo 平滑滚动")]),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._t("table")],2)])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("众所周知"),a("code",[t._v("element-ui")]),t._v(" 有个隐藏组件"),a("code",[t._v("el-scrollbar")]),t._v("，不知是我使用姿势不对还是别的原因，它总是会出现默认的横向滚动条")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"css"},[a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("el"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("scrollbar__wrap "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  overflow"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("x"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" hidden"),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",[a("span",{staticClass:"token operator"},[t._v("<")]),t._v("ea"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("scrollbar style"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token string"},[t._v('"height: 300px;"')]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n  "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("!")]),a("span",{staticClass:"token operator"},[t._v("--")]),t._v(" your html "),a("span",{staticClass:"token operator"},[t._v("--")]),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n"),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("ea"),a("span",{staticClass:"token operator"},[t._v("-")]),t._v("scrollbar"),a("span",{staticClass:"token operator"},[t._v(">")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("Utils"),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'e-admin'")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\nUtils"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("scrollTo")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token number"},[t._v("0")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\nUtils"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("scrollTo")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$refs"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("item"),a("span",{staticClass:"token punctuation"},[t._v("[")]),a("span",{staticClass:"token number"},[t._v("10")]),a("span",{staticClass:"token punctuation"},[t._v("]")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("el"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$refs"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("scrollbar"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" offset"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token number"},[t._v("100")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("第一个参数可以是数字，也可以是目标"),a("code",[t._v("dom")]),t._v(" ，默认滚动的是"),a("code",[t._v("document.documentElement")]),t._v("，通过第二个参数"),a("code",[t._v("options.el")]),t._v("设置指定滚动容器")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("EaScrollbar")]),t._v("内置了"),a("code",[t._v("scrollTo")]),t._v("方法，也是通过此函数实现")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",[a("span",{staticClass:"token keyword"},[t._v("this")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("$refs"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("scrollbar"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("scrollTo")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token number"},[t._v("0")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token comment"},[t._v("// 可以传入字符串`bottom` 滚动到底部")])])])}],e=a("4e82"),r={},p=Object(e["a"])(r,n,o,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=ea-scrollbar.c51f49d6.js.map
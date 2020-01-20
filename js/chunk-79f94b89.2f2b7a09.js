(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79f94b89"],{"3ef5":function(t,e,c){},de05:function(t,e,c){"use strict";var s=c("3ef5"),n=c.n(s);n.a},f24c:function(t,e,c){"use strict";c.r(e);var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"demo-icon"},[c("h2",{staticClass:"page-title"},[t._v("Icon 字体图标")]),t._m(0),c("div",{staticClass:"white-block"},[c("h4",[t._v("所有图标")]),t._l(t.list,(function(e,s){return c("div",{key:s,staticClass:"icon-item"},[c("shy-icon",{attrs:{size:"28px",color:"#222",name:e}}),c("p",[t._v(t._s(e))]),c("div",{staticClass:"copy-cover",on:{click:function(c){return t.copyText(e)}}},[t._v("点击复制")])],1)}))],2),c("div",{staticClass:"white-block"},[c("h4",[t._v("设置字号、颜色")]),t._m(1),c("a",{staticClass:"code-toggle",on:{click:function(e){return t.toggleCode(e)}}},[t._v("</> 代码演示")]),c("pre",{staticClass:"code"},[t._v(t._s(t.codeList[0]))])]),c("h2",{staticClass:"preview-title"},[t._v("Props")]),t._m(2),c("h2",{staticClass:"preview-title"},[t._v("Events")]),t._m(3)])},n=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"white-block"},[c("h4",[t._v("使用介绍")]),c("p",{staticClass:"tips"},[c("strong",[t._v("说明：")]),c("br"),c("br"),t._v(" 1. shy-ui只提供一些常见的基本的图标，当全局引入shy-ui库后，你可以直接使用这些字体图标，而无需再引入任何文件。"),c("br"),c("br"),t._v(" 2. 当前字体图标，是通过symbol引用的方式加载进来的；为避免和你的项目本身引用的其他字体图标产生不必要的冲突，请不要使用symbol方式引入你的其他字体图标文件； ")])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("p",{staticClass:"tips"},[c("strong",[t._v("说明：")]),t._v("属性值size、color； ")])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"white-block"},[c("table",{staticClass:"api-table",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[c("thead",[c("tr",[c("th",[t._v("参数名")]),c("th",[t._v("说明")]),c("th",[t._v("类型")]),c("th",[t._v("默认值")]),c("th",[t._v("是否必填")])])]),c("tbody",[c("tr",[c("td",[t._v("name")]),c("td",[t._v("icon图标的名称。")]),c("td",[t._v("String")]),c("td",[t._v("-")]),c("td",[t._v("是")])]),c("tr",[c("td",[t._v("color")]),c("td",[t._v("icon图标的颜色。")]),c("td",[t._v("String")]),c("td",[t._v("#1B0000")]),c("td",[t._v("否")])]),c("tr",[c("td",[t._v("size")]),c("td",[t._v("icon图标的字号。")]),c("td",[t._v("String")]),c("td",[t._v("16px")]),c("td",[t._v("否")])])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"white-block"},[c("table",{staticClass:"api-table",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[c("thead",[c("tr",[c("th",[t._v("事件名")]),c("th",[t._v("说明")]),c("th",[t._v("回调参数")])])]),c("tbody",[c("tr",[c("td",[t._v("click")]),c("td",[t._v("click事件传递。可接收的回调参数：event事件")]),c("td",[t._v("event")])])])])])}],i={data:function(){return{list:["iconback","iconenter","icondown","iconplus","iconsuccess","iconclose","iconsearch","iconthumb-up","iconcircle-nochoose","iconcircle-choosed","iconrect-nochoose","iconrect-choosed","iconshare","iconuser","iconmsg","iconsession"],codeList:['<shy-icon color="#ff0000" name="iconclose"></shy-icon>\n\n<shy-icon size="20px" name="iconsuccess"></shy-icon>']}},methods:{copyText:function(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.style.display="none",document.body.removeChild(e),this.$toast({content:"复制成功"})},toggleCode:function(t){var e=t.currentTarget;"none"!=e.nextElementSibling.style.display?e.nextElementSibling.style.display="none":e.nextElementSibling.style.display="block"}}},o=i,l=(c("de05"),c("2877")),a=Object(l["a"])(o,s,n,!1,null,"2bac1f2a",null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-79f94b89.2f2b7a09.js.map
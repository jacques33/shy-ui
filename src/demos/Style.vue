<template>
  <div class="start">
    <h2 class="page-title">内置样式</h2>
    <div class="white-block">
      <h4>介绍</h4>
      <p class="tips">shy-ui中默认包含了一些常用样式，可以直接通过 className 的方式使用。</p>
    </div>
    <div class="white-block">
      <h4>颜色与背景色</h4>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>
    <div class="white-block">
      <h4>文字超出省略</h4>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[1]}}</pre>
    </div>
    <div class="white-block">
      <h4>Loading动画图标</h4>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[2]}}</pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      codeList: [
        "// 颜色class\n" +
          '<p class="color-main">这行文字的色值是 "#991200"</p>\n' +
          '<p class="color-earth-yellow">这行文字的色值是 "#C3AB83"</p>\n' +
          '<p class="color-yellow">这行文字的色值是 "#edc600"</p>\n' +
          '<p class="color-black">这行文字的色值是 "#1b0000"</p>\n' +
          '<p class="color-gray">这行文字的色值是 "#888"</p>\n' +
          '<p class="color-light-gray">这行文字的色值是 "#bdbdbd"</p>\n\n' +
          "// 背景色class\n" +
          '<div class="bg-color1">这行文字的背景色值是 "#f2f2f2"</div>\n' +
          '<div class="bg-color2">这行文字的背景色值是 "#f7f7f7"</div>\n' +
          '<div class="bg-color3">这行文字的背景色值是 "#F8ECEC"</div>\n' +
          '<div class="bg-color4">这行文字的背景色值是 "#f6eee8"</div>',

          "//单行省略\n" +
          '<p class="shy-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</p>\n\n' +
           "//两行省略\n" +
          '<p class="shy-ellipsis2">这是一段最多显示两行的文字，多余的内容会被省略，所以我多打一些字，以便它能显示超出两行的效果。</p>',

          "//默认宽高20px\n" +
          '<i class="shy-loading"></i>加载中…\n\n' +
           "//自定义修改样式；但是颜色无法修改；\n" +
          '<i class="shy-loading" style="width:25px;height:25px;"></i> 加载中…'
      ]
    };
  },
  methods:{
    // 打开、关闭 代码演示
    toggleCode(e) {
      let dom = e.currentTarget;
      if (dom.nextElementSibling.style.display != "none") {
        dom.nextElementSibling.style.display = "none";
      } else {
        dom.nextElementSibling.style.display = "block";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.start {
}
</style>
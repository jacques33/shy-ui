<template>
  <div class="start">
    <h2 class="page-title">快速上手</h2>
    <div class="white-block">
      <h4>安装</h4>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>
    <div class="white-block">
      <h4>全局引入</h4>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[1]}}</pre>
    </div>
    <div class="white-block">
      <h4>Rem适配</h4>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <p class="tips">
        <strong>说明：</strong>
        <br />shy-ui-m中的样式使用px作为单位，如果需要使用rem单位，可以使用
        <a href="https://github.com/cuth/postcss-px2rem">postcss-px2rem</a>插件，将单位转换为rem；
        <br /><br />
      </p>
      <h4>Post Css配置</h4>
      <pre class="code">{{codeList[2]}}</pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      codeList: [
        "npm install shy-ui-m",
        "import Vue from 'vue'\nimport Shy from 'shy-ui-m'\n// 引入css文件\nimport 'shy-ui-m/lib/shy-ui.css'\n\nVue.use(Shy)\n\n// 将部分组件注册为全局方法\nVue.prototype.$toast = Shy.ShyToast;\nVue.prototype.$dialog = Shy.ShyDialog;",
        "// 安装插件\n"+
        "npm install postcss-px2rem -D \n\n"+
        "// vue.config.js 增加postcss配置\n" +
          "css: {\n" +
          "\tloaderOptions: {\n" +
          "\t\tpostcss: {\n" +
          "\t\t\tplugins: [\n" +
          '\t\t\t\trequire("postcss-px2rem")({\n' +
          "\t\t\t\t\tremUnit: 50\n" +
          "\t\t\t\t})\n" +
          "\t\t\t]\n" +
          "\t\t}\n" +
          "\t}\n" +
          "}"
      ]
    };
  },
  methods: {
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
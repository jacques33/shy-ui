<template>
  <div class="demo-switch">
    <h2 class="page-title">Pull Refresh 下拉刷新</h2>
    <div class="white-block">
      <h4>基础演示</h4>
      <p class="tips">
        <strong>说明：</strong>
        <br />将需要下拉刷新的模块内容，都包裹在shy-pull-refrsh的默认slot中；
        <br />下拉刷新时会触发
        <i class="label-text">refresh</i> 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将
        <i class="label-text">v-model</i>绑定的值设置为
        <i class="color-main">false</i>，表示加载完成；
        <br />一个页面中不应该多于一个下拉刷新组件；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>

    <h2 class="preview-title">Props</h2>
    <div class="white-block">
      <table class="api-table" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>参数名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>是否必填</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>通过v-model的方式传入值，加载状态中手动修改值为false，结束下拉状态</td>
            <td>Boolean</td>
            <td>-</td>
            <td>是</td>
          </tr>
          <tr>
            <td>pullText</td>
            <td>下拉文案</td>
            <td>String</td>
            <td>下拉刷新</td>
            <td>否</td>
          </tr>
          <tr>
            <td>releaseText</td>
            <td>释放提示文案</td>
            <td>String</td>
            <td>释放刷新</td>
            <td>否</td>
          </tr>
          <tr>
            <td>loadingText</td>
            <td>loading文案</td>
            <td>String</td>
            <td>加载中…</td>
            <td>否</td>
          </tr>
          <tr>
            <td>loadingTextHeight</td>
            <td>loading文案区域高度</td>
            <td>String</td>
            <td>50px</td>
            <td>否</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      codeList: [
        "// html部分\n" +
          '<shy-pull-refresh v-model="isPull" loadingTextHeight="40px" @refresh="pullRefresh">\n' +
          '\t<h2 class="preview-title">基础演示</h2>\n' +
          '\t<div class="preview-unit">\n' +
          '\t\t<ul class="refreshContainer">\n' +
          '\t\t\t<li v-for="(item,i) in list" :key="i">{{item}}</li>\n' +
          "\t\t</ul>\n" +
          "\t</div>\n" +
          "</shy-pull-refresh>\n\n" +
          "// js部分\n" +
          "export default {\n" +
          "\tdata() {\n" +
          "\t\treturn {\n" +
          "\t\t\tisPull: false,\n" +
          "\t\t\tlist: [1,2,3,4,5,6,7,8,9]\n" +
          "\t\t};\n" +
          "\t},\n" +
          "\tmethods: {\n" +
          "\t\t// 下拉刷新回调事件\n" +
          "\t\tpullRefresh() {\n" +
          "\t\t\tlet that = this;\n" +
          "\t\t\tsetTimeout(() => {\n" +
          "\t\t\t\t// 数据更新示例\n" +
          "\t\t\t\tlet random1 = Math.floor(Math.random()*100);\n" +
          "\t\t\t\tlet random2 = Math.floor(Math.random()*100);\n" +
          "\t\t\t\tthis.list.unshift(random1,random2);\n\n" +
          "\t\t\t\t// 数据更新完毕，手动隐藏加载区域\n" +
          "\t\t\t\tthat.isPull = false;\n\n" +
          '\t\t\t\tthis.$toast("加载完成")\n' +
          "\t\t\t}, 1000);\n" +
          "\t\t}\n" +
          "\t}\n" +
          "};"
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
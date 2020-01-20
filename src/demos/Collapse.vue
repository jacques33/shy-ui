<template>
  <div class="demo-switch">
    <h2 class="page-title">Collapse 折叠面板</h2>
    <div class="white-block">
      <h4>基础演示</h4>
      <p class="tips">
        <strong>说明：</strong>
        <br />title属性和slot<i class="color-light-gray">（name='title'）</i>应该二选一，以确保title区域有内容；
        <br />isUnfold属性默认是false，不展开状态；
        <br />展开内容区，为default插槽，插入内容可以不指定slot属性名；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>

    <div class="white-block">
      <h4>自定义title</h4>
      <p class="tips">
        <strong>说明：</strong>自定义title区域内容，应指定slot属性为title；插槽内样式需要自定义；
      </p>
      <pre class="code">{{codeList[1]}}</pre>
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
            <td>title</td>
            <td>标题。</td>
            <td>String</td>
            <td>-</td>
            <td>否</td>
          </tr>
          <tr>
            <td>isUnfold</td>
            <td>是否展开内容区</td>
            <td>Boolean</td>
            <td>false</td>
            <td>否</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="preview-title">Slots</h2>
    <div class="white-block">
      <table class="api-table" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>插槽名</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>内容区域插槽</td>
          </tr>
          <tr>
            <td>title</td>
            <td>自定义标题区域插槽</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="preview-title">Events</h2>
    <div class="white-block">
      <table class="api-table" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>change</td>
            <td>面板状态变化事件，函数参数回传当前collapse是否展开的Boolean值</td>
            <td>status</td>
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
        '<shy-collapse title="默认不展开">\n' +
          '\t<p style="padding:20px 15px;">这里是内容区，使用默认slot插入内容，内容区的样式需要自定义</p>\n' +
          "</shy-collapse>\n\n" +
          '<shy-collapse title="设置为展开状态" v-bind:isUnfold="true">\n' +
          '\t<p style="padding:25px 15px;text-align:center;font-size:30px;">我展开了</p>\n' +
          "</shy-collapse>",

        "<shy-collapse>\n" +
          '\t<div slot="title">\n' +
          '\t\t<span class="iconfont">&#xe629;</span>\n' +
          "\t\t菜单\n" +
          "\t</div>\n" +
          '\t<ul slot="default">\n' +
          "\t\t<li>语文</li>\n" +
          "\t\t<li>数学</li>\n" +
          "\t\t<li>英语</li>\n" +
          "\t</ul>\n" +
          "</shy-collapse>",

        '<shy-cell title="URL跳转" content="url属性" url="https://www.baidu.com"></shy-cell>\n' +
          '<shy-cell title="路由跳转" content="to属性" to="/mobile/start"></shy-cell>'
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
<template>
  <div class="demo-switch">
    <h2 class="page-title">Cell 单元格</h2>
    <div class="white-block">
      <h4>基础演示</h4>
      <p class="tips">
        <strong>说明：title属性必填；默认右侧箭头会显示；</strong>
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>

    <div class="white-block">
      <h4>文字超出省略</h4>
      <p class="tips">
        <strong>说明：</strong><br>
        如果title和content都有值，则各占50%宽度，超出会省略。<br>
        描述信息一行显示，超出会省略
      </p>
    </div>

    <div class="white-block">
      <h4>更换图标</h4>
      <p class="tips">
        <strong>说明：</strong><br>
        <b>1，</b>可以通过属性值rightIcon传入UI库icon组件的name，将右侧箭头，替换成其他图标；<br>
        <b>2，</b>亦可通过具名slot，插入自定义的字体图标，替换当前的图标；<br>
        <b>3，</b>自定义插槽字体图标，请带上指定的class名称，详见代码演示；<br>
        <b>4，</b>插入的字体图标，会有默认样式；若想自定义，可直接在插槽内容的字体图标元素上设置style属性，以修改默认样式，详见代码演示；<br>
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[1]}}</pre>
    </div>

    <div class="white-block">
      <h4>导航单元格</h4>
      <p class="tips">
        <strong>说明：</strong><br>
        <b>1，</b>属性to；用作单页面项目内的路由跳转，接收的传入值为$router.push()所需的值；<br>
        <b>2，</b>属性url；用作url形式的链接跳转<br>
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[2]}}</pre>
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
          <td>标题</td>
          <td>String</td>
          <td>-</td>
          <td>是</td>
        </tr>
        <tr>
          <td>content</td>
          <td>内容</td>
          <td>String</td>
          <td>-</td>
          <td>否</td>
        </tr>
        <tr>
          <td>desc</td>
          <td>描述信息。有描述信息时，会双行显示</td>
          <td>String</td>
          <td>-</td>
          <td>否</td>
        </tr>
        <tr>
          <td>islink</td>
          <td>是否显示右箭头</td>
          <td>Boolean</td>
          <td>true</td>
          <td>否</td>
        </tr>
        <tr>
          <td>rightIcon</td>
          <td>右侧图标。仅支持当前UI库的icon组件</td>
          <td>String</td>
          <td>iconenter</td>
          <td>否</td>
        </tr>
        <tr>
          <td>to</td>
          <td>页面内路由跳转</td>
          <td>String</td>
          <td>-</td>
          <td>否</td>
        </tr>
        <tr>
            <td>url</td>
            <td>url方式跳转</td>
            <td>String</td>
            <td>-</td>
            <td>否</td>
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
          <td>click</td>
          <td>点击事件。函数参数返回event事件对象</td>
          <td>event</td>
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
        '<shy-cell title="仅标题" content=""></shy-cell>\n'+
      '<shy-cell title="标题" content="内容"></shy-cell>\n'+
      '<shy-cell title="标题" content="不显示右箭头" v-bind:islink="false"></shy-cell>\n'+
      '<shy-cell title="双行列表" desc="描述信息"></shy-cell>',

      '<shy-cell title="更换右侧图标" content="使用UI库的icon组件" rightIcon="iconsuccess"></shy-cell>\n\n'+
      '<shy-cell title="更换右侧图标" content="自定义右侧字体图标">\n'+
        '\t<template v-slot:right-icon>\n'+
          '\t\t<!-- 插入的图标，请带上class名称 cell-right-icon -->\n'+
          '\t\t<span class="iconfont cell-right-icon">&#xe676;</span>\n'+
        '\t</template>\n'+
      '</shy-cell>\n\n'+
      '<shy-cell title="标题" content="自定义左侧图标">\n'+
        '\t<template v-slot:left-icon>\n'+
          '\t\t<!-- 插入的图标，请带上class名称 cell-left-icon -->\n'+
          '\t\t<span class="iconfont cell-left-icon" style="color:red;">&#xe676;</span>\n'+
        '\t</template>\n'+
      '</shy-cell>',

      '<shy-cell title="URL跳转" content="url属性" url="https://www.baidu.com"></shy-cell>\n'+
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
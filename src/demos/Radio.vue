<template>
  <div class="demo-switch">
    <h2 class="page-title">Radio 单选框</h2>
    <div class="white-block">
      <h4>基础演示</h4>
      <p class="tips">
        <strong>说明：items属性必填；v-model绑定的值，必须符合要求的格式；选中icon的图标，可自定义颜色</strong>
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
          <td>items</td>
          <td>选项列表。数据格式：[ {name: 1,value: 'v1'}, {name: 2,value: 'v2'} ]</td>
          <td>Array</td>
          <td>-</td>
          <td>是</td>
        </tr>
        <tr>
          <td>value</td>
          <td>当前选中值。建议参考上方代码演示，通过v-model的方式传递和接收值；必须包含name属性；如初始无选中值，value只需为 { name: null }</td>
          <td>Object</td>
          <td>-</td>
          <td>否</td>
        </tr>
        <tr>
          <td>color</td>
          <td>图标颜色。</td>
          <td>String</td>
          <td>#991200</td>
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
          <td>input</td>
          <td>选项值变化。函数返回当前选中的对象；建议如代码演示所示，通过v-model绑定value值，就无需关注input事件。</td>
          <td>item</td>
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
        '// html部分 \n'+
        '<shy-radio v-bind:items="items" v-model="radioValue"></shy-radio>\n'+
      '<p>当前选中的项是：{{radioValue.value}}</p>\n\n'+
      '// js部分 \n'+
      'data() {\n'+
    '\treturn {\n'+
      '\t\t// radio选项列表。Array\n'+
      '\t\titems:[\n'+
        '\t\t\t{name: 1, value:"鱼"},\n'+
        '\t\t\t{name: 2, value:"熊掌"},\n'+
        '\t\t\t{name: 3, value:"我都要"},\n'+
      '\t\t],\n'+
      '\t\t// radio当前选中值。Object，name项必须有，value项可省略\n'+
      '\t\tradioValue: {name: 1, value:"鱼"},\n'+
    '\t};\n'+
  '}'
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
<template>
  <div class="demo-switch">
    <h2 class="page-title">Checkbox 复选框</h2>
    <div class="white-block">
      <h4>基础演示</h4>
      <p class="tips">
        <strong>说明：</strong>items属性必填；通过v-model绑定value，传入和接收值；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>

     <div class="white-block">
      <h4>自定义icon颜色</h4>
      <p class="tips">
        <strong>说明：</strong>color属性；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[1]}}</pre>
    </div>

     <div class="white-block">
      <h4>最大可选数</h4>
      <p class="tips">
        <strong>说明：</strong>max属性；接收Number或String类型的数字
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
          <td>items</td>
          <td>选项列表。数据格式：[ {name: 1,value: 'v1'}, {name: 2,value: 'v2'} ]</td>
          <td>Array</td>
          <td>-</td>
          <td>是</td>
        </tr>
        <tr>
          <td>value</td>
          <td>当前选中项的name值数组。建议参考上方代码演示，通过v-model的方式传递和接收值；如初始无选中值，value只需为 []</td>
          <td>Array</td>
          <td>[]</td>
          <td>否</td>
        </tr>
        <tr>
          <td>color</td>
          <td>图标颜色。</td>
          <td>String</td>
          <td>#991200</td>
          <td>否</td>
        </tr>
        <tr>
          <td>max</td>
          <td>最大可选项。0 为无限制</td>
          <td>Number</td>
          <td>0</td>
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
        '<shy-checkbox v-bind:items="items1" v-model="checkboxValues1"></shy-checkbox>\n\n'+
      '// js部分 \n'+
      'data() {\n'+
    '\treturn {\n'+
      '\t\titems1: [\n'+
        '\t\t\t{name: "male", value:"男"},\n'+
        '\t\t\t{name: "female", value:"女"},\n'+
      '\t\t],\n\n'+
      '\t\tcheckboxValue1: ["male"],\n'+
    '\t};\n'+
  '}',
         '// html部分 \n'+
        '<shy-checkbox v-bind:items="items3" color="#07c160" v-model="checkboxValues3"></shy-checkbox>\n\n'+
      '// js部分 \n'+
      'data() {\n'+
    '\treturn {\n'+
      '\t\titems3: [\n'+
        '\t\t\t{name: "display", value:"显示"},\n'+
      '\t\t],\n\n'+
      '\t\tcheckboxValue3: ["display"],\n'+
    '\t};\n'+
  '}',
         '// html部分 \n'+
        '<shy-checkbox v-bind:items="items2" v-model="checkboxValues2" v-bind:max="2"></shy-checkbox>\n\n'+
      '// js部分 \n'+
      'data() {\n'+
    '\treturn {\n'+
      '\t\titems2: [\n'+
        '\t\t\t{name: 1, value:"Queen"},\n'+
        '\t\t\t{name: 2, value:"Beatles"},\n'+
        '\t\t\t{name: 3, value:"Led Zeppelin"},\n'+
        '\t\t\t{name: 4, value:"Guns N\' Roses"},\n'+
      '\t\t],\n\n'+
      '\t\tcheckboxValue2: [],\n'+
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
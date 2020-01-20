<template>
  <div class="demo-switch">
    <h2 class="page-title">Switch 开关</h2>
    <div class="white-block">
      <h4>基础演示</h4>
      <p class="tips">
        <strong>说明：</strong>
        <br>开关提供三种尺寸，属性值<i class="label-text">size</i>：<i>small、medium、large</i>；默认medium。
        <br>通过v-model绑定值，开关状态切换会直接修改当前值；
        <br>通过监听change事件，获取按钮切换事件回调
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>

    <div class="white-block">
      <h4>禁用状态</h4>
      <p class="tips">
        <strong>说明：</strong>属性值<i class="label-text">isDisabled</i>；可选参数：true、false
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[1]}}</pre>
    </div>

    <div class="white-block">
      <h4>异步控制</h4>
      <p class="tips">
        <strong>说明：</strong><i class="label-text">preventDefault</i>设置为true，阻止自动切换状态；然后通过监听click事件，手动修改状态值；
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
          <td>value</td>
          <td>switch开关状态。可通过v-model绑定的方式传入值，即可实现双向绑定；</td>
          <td>Boolean</td>
          <td>true</td>
          <td>否</td>
        </tr>
        <tr>
          <td>size</td>
          <td>switch开关尺寸。可选值：small、medium、large</td>
          <td>String</td>
          <td>medium</td>
          <td>否</td>
        </tr>
        <tr>
          <td>isDisabled</td>
          <td>按钮是否禁用。可选值：true false</td>
          <td>Boolean</td>
          <td>false</td>
          <td>否</td>
        </tr>
        <tr>
          <td>preventDefault</td>
          <td>阻止自动切换事件。方便手动异步控制开关状态</td>
          <td>Boolean</td>
          <td>false</td>
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
          <td>change</td>
          <td>开关状态变化回调事件。函数参数返回更新的状态值，true/false</td>
          <td>status</td>
        </tr>
        <tr>
          <td>click</td>
          <td>开关点击事件。</td>
          <td>-</td>
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
        '<shy-switch v-model="switchStatus1" size="small"></shy-switch>\n\n'+
      '<shy-switch v-model="switchStatus2" size="medium"></shy-switch>\n\n'+
      '<shy-switch v-model="switchStatus3" size="large"></shy-switch>',

        '<shy-switch v-model="switchStatus1" v-bind:isDisabled="true"></shy-switch>',

        '<shy-switch v-bind:preventDefault="true" v-model="switchStatus6" v-on:click="asyncControl"></shy-switch>\n\n'+
        '// 异步控制\n'+
    'asyncControl(){\n'+
      '\tthis.$dialog({\n'+
        '\t\ttype: "confirm",\n'+
        '\t\ttitle: "确定切换开关吗？",\n'+
        '\t\tcallback: (action)=>{\n'+
          '\t\t\tif(action === "confirm"){\n'+
            '\t\t\t\tthis.switchStatus6 = !this.switchStatus6;\n'+
          '\t\t\t}\n'+
        '\t\t}\n'+
      '\t})\n'+
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
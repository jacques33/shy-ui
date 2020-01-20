<template>
  <div class="demo-button">
    <h2 class="page-title">Button 按钮</h2>
    <div class="white-block">
      <h4>按钮状态</h4>
      <p class="tips">
        <strong>说明：</strong>一般状态、loading状态、disabled状态、直角按钮
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>

    <div class="white-block">
      <h4>按钮大小</h4>
      <p class="tips">
        <strong>说明：</strong>属性值size；可选参数：small、medium、large
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[1]}}</pre>
    </div>

    <div class="white-block">
      <h4>按钮外观类型</h4>
      <p class="tips">
        <strong>说明：</strong>属性值type；可选参数：solid、line
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[2]}}</pre>
    </div>

    <div class="white-block">
      <h4>自定义颜色</h4>
      <p class="tips">
        <strong>说明：</strong>属性值color；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[4]}}</pre>
    </div>

    <div class="white-block">
      <h4>自定义图标</h4>
      <p class="tips">
        <strong>说明：</strong>自定义图标；可使用UI库带的icon组件，也可以使用你自己项目的iconfont插入；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">代码演示</a>
      <pre class="code">{{codeList[5]}}</pre>
    </div>

    <div class="white-block">
      <h4>导航按钮</h4>
      <p class="tips">
        <strong>说明：</strong>
        <br />属性值to；传入应用内$router.push()需要的跳转路径；
        <br />属性值url；传入外链url路径；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[3]}}</pre>
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
            <td>text</td>
            <td>按钮文本内容</td>
            <td>String</td>
            <td>-</td>
            <td>是</td>
          </tr>
          <tr>
            <td>size</td>
            <td>按钮尺寸。可选值：small medium large</td>
            <td>String</td>
            <td>large</td>
            <td>否</td>
          </tr>
          <tr>
            <td>color</td>
            <td>按钮颜色</td>
            <td>String</td>
            <td>#991200</td>
            <td>否</td>
          </tr>
          <tr>
            <td>shapes</td>
            <td>按钮外观样式。可选值：solid：背景色填充型，line：白色背景线框类型</td>
            <td>String</td>
            <td>solid</td>
            <td>否</td>
          </tr>
          <tr>
            <td>radius</td>
            <td>按钮是否圆角。可选值：true false</td>
            <td>Boolean</td>
            <td>true</td>
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
            <td>isLoading</td>
            <td>按钮是否显示loading状态图标。可选值：true false</td>
            <td>Boolean</td>
            <td>false</td>
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
            <td>按钮点击事件。函数参数返回event事件对象</td>
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
        '<shy-button text="页面主操作按钮 Normal"></shy-button>\n\n' +
          '<shy-button text="按钮loading状态" v-bind:isLoading="isLoading"></shy-button>\n\n' +
          '<shy-button text="页面主操作 Disable" v-bind:isDisabled="isDisabled"></shy-button>\n\n' +
          '<shy-button text="直角按钮" v-bind:radius="false"></shy-button>',

        '<shy-button text="大按钮" size="large"></shy-button>\n\n' +
          '<shy-button text="中等按钮" size="medium"></shy-button>\n\n' +
          '<shy-button text="小按钮" size="small"></shy-button>',

        '<shy-button text="背景色无边框型" shapes="solid"></shy-button>\n\n' +
          '<shy-button text="无背景色，线条边框" shapes="line"></shy-button>',

        '<shy-button text="点击跳转到首页" to="/start"></shy-button>\n\n' +
          '<shy-button text="点击跳转到baidu.com" url="https://www.baidu.com"></shy-button>',

        '<shy-button text="中等按钮" size="medium" color="#0000ff"></shy-button>',

        '<shy-button text="中等按钮" size="medium">\n\t<shy-icon color="#ffffff" name="iconsuccess"></shy-icon>\n</shy-button>\n\n' +
          "// 下面示例图标并不存在，只是作为代码演示\n" +
          '<shy-button text="中等按钮" size="medium">\n\t<span class="iconfont">&#xe60f;</span>\n</shy-button>'
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
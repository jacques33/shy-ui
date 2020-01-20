<template>
  <div class="demo-switch">
    <h2 class="page-title">Toast 提示框</h2>
    <div class="white-block">
      <h4>引入</h4>
      <p class="tips">
        <strong>全局引入shy-ui-m后，将Toast注册为全局Vue的方法，以便在各个组件中方便的使用toast消息提示框</strong>
        <br />
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>

    <div class="white-block">
      <h4>文字提示</h4>
      <p class="tips">
        <strong>说明：</strong>属性值type = 'text'；如果只是弹出文字信息，toast方法亦支持直接传入字符串，而不需要完整的对象传入。请参考代码演示。
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[1]}}</pre>
    </div>

    <div class="white-block">
      <h4>图标提示</h4>
      <p class="tips">
        <strong>说明：</strong>属性值type: 'success'、'error'、'loading','custom'
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[2]}}</pre>
    </div>

    <div class="white-block">
      <h4>自定义图标提示</h4>
      <p class="tips">
        <strong>说明：</strong>属性值type = 'custom'；属性值customIcon：传入自定义图标的dom，图标元素需带上class名'shy-toast-custom'，否则需要自定义style属性；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[3]}}</pre>
    </div>

    <div class="white-block">
      <h4>自定义时长</h4>
      <p class="tips">
        <strong>说明：</strong>属性值time；单位为ms毫米，默认值3000，请传入数字类型；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[4]}}</pre>
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
            <td>content</td>
            <td>文字内容</td>
            <td>String</td>
            <td>true</td>
            <td>是</td>
          </tr>
          <tr>
            <td>type</td>
            <td>提示类型。可选值：'text','success','error','loading','custom'</td>
            <td>String</td>
            <td>text</td>
            <td>否</td>
          </tr>
          <tr>
            <td>custom</td>
            <td>自定义图标dom。插入的图标元素，需带上class名'shy-toast-custom'，否则需要自定义style属性；</td>
            <td>String</td>
            <td>-</td>
            <td>否</td>
          </tr>
          <tr>
            <td>time</td>
            <td>显示时长。接收毫秒ms为单位的数字类型</td>
            <td>Number</td>
            <td>3000</td>
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
        "// main.js \n\n" +
          "import Vue from 'vue'\n" +
          "import { Shy } from 'shy-ui'\n\n" +
          "Vue.use(Shy)\n" +
          "Vue.prototype.$toast = Shy.Toast",

        '//对象方式传值\nthis.$toast({content:"普通文字提示"});\n\n//直接传入字符串\nthis.$toast("文字超过10个汉字长度，会折行显示");',
        'this.$toast({content: "成功提示",type: "success"});\n\nthis.$toast({content: "失败提示",type: "error"});\n\nthis.$toast({content: "失败提示",type: "loading"});',
        'this.$toast({\n\tcontent: "自定义图标",\n\ttype: "custom",\n\tcustomIcon: \'<span class="iconfont shy-toast-custom">&#xe64a;</span>\'\n});',
        'this.$toast({content: "1s后消失",time: 1000});'
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
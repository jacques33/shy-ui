<template>
  <div class="demo-switch">
    <h2 class="page-title">Dialog 弹出框</h2>
    <div class="white-block">
      <h4>引入</h4>
      <p class="tips">
        <strong>全局引入shy-ui-m后，将Dialog注册为全局Vue的方法，以便在各个组件中方便的使用Dialog弹出框</strong>
        <br />
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[0]}}</pre>
    </div>

    <div class="white-block">
      <h4>alert类型</h4>
      <p class="tips">
        <strong>说明：</strong>如果只是弹出alert类型的带content信息的弹出框，dialog方法亦支持直接传入字符串，而不需要完整的对象传入。请参考代码演示。
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[1]}}</pre>
    </div>

    <div class="white-block">
      <h4>confirm类型</h4>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[2]}}</pre>
    </div>

    <div class="white-block">
      <h4>自定义。文字、颜色及其他</h4>
      <p class="tips">
        <strong>说明：</strong>自定义参数名称，请参考页面底部Options表格；
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[3]}}</pre>
    </div>

    <div class="white-block">
      <h4>回调事件</h4>
      <p class="tips">
        <strong>说明：</strong>结合右侧展示的交互状态，阅读此段代码
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[4]}}</pre>
    </div>

    <div class="white-block">
      <h4>手动移除弹框</h4>
      <p class="tips">
        <strong>说明：</strong><br>
        dialog方法调用后，会返回$dialog实例对象，通过此对象的close方法，手动关闭弹窗；<br>
        使用场景举例：弹窗显示时，用户点击物理返回键回退页面，此时可通过当前方法，手动关闭弹窗。<br>
        右侧示例界面，当路由发生变化时，会关闭当前弹窗。
      </p>
      <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
      <pre class="code">{{codeList[5]}}</pre>
    </div>

    <h2 class="preview-title">Options</h2>
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
          <td>标题内容。文本内容支持&lt;br&gt;标签换行</td>
          <td>String</td>
          <td>-</td>
          <td>否</td>
        </tr>
        <tr>
          <td>content</td>
          <td>文字内容。文本内容支持&lt;br&gt;标签换行</td>
          <td>String</td>
          <td>-</td>
          <td>否</td>
        </tr>
        <tr>
          <td>type</td>
          <td>提示类型。可选值：'alert','confirm'</td>
          <td>String</td>
          <td>alert</td>
          <td>否</td>
        </tr>
        <tr>
          <td>confirmButtonText</td>
          <td>自定义“确定”按钮文字</td>
          <td>String</td>
          <td>确定</td>
          <td>否</td>
        </tr>
        <tr>
          <td>cancelButtonText</td>
          <td>自定义“取消”按钮文字</td>
          <td>String</td>
          <td>取消</td>
          <td>否</td>
        </tr>
         <tr>
          <td>confirmButtonColor</td>
          <td>自定义“确定”按钮文字颜色</td>
          <td>String</td>
          <td>#991200</td>
          <td>否</td>
        </tr>
        <tr>
          <td>cancelButtonColor</td>
          <td>自定义“取消”按钮文字颜色</td>
          <td>String</td>
          <td>#888</td>
          <td>否</td>
        </tr>
        <tr>
          <td>overlay</td>
          <td>是否显示黑色遮罩层。当选择'不显示遮罩层'时，组件只是将遮罩层的背景色变成完全透明，并不是真正意义上的无遮罩层。</td>
          <td>Boolean</td>
          <td>true</td>
          <td>否</td>
        </tr>
        <tr>
          <td>closeOnClickOverlay</td>
          <td>点击遮罩层，是否关闭弹窗</td>
          <td>Boolean</td>
          <td>false</td>
          <td>否</td>
        </tr>
        <tr>
          <td>confirmCallback</td>
          <td>点击‘确定’按钮回调事件</td>
          <td>Function</td>
          <td>-</td>
          <td>否</td>
        </tr>
        <tr>
          <td>cancelCallback</td>
          <td>点击‘取消’按钮回调事件</td>
          <td>Function</td>
          <td>-</td>
          <td>否</td>
        </tr>
        <tr>
          <td>beforeClose</td>
          <td>异步关闭，关闭前的回调函数。接收两个参数，<span class="color-main font-bold">action</span>：关闭事件的源动作；可能值为cancel，confirm，overlay，分别对应‘取消按钮导致的关闭’、‘确定按钮导致的关闭’、‘点击遮罩层导致的关闭’。<span class="color-main font-bold">done</span>: 手动关闭函数。手动调用done()后关闭弹窗</td>
          <td>Function</td>
          <td>-</td>
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
          "import Shy from 'shy-ui'\n\n" +
          "Vue.use(Shy)\n" +
          "Vue.prototype.$dialog = Shy.ShyDialog",

        'this.$dialog({title:"仅有标题的alert弹出框"});\n\nthis.$dialog("仅显示content内容的alert弹出框，可以直接传字符串的哟");\n\nthis.$dialog({title:"标题",content:"这里是内容区，超出一行的部分会折行居中显示。"});',
        'this.$dialog({title:"仅有标题的alert弹出框",type:"confirm"};\n\nthis.$dialog({content:"仅显示内容的confirm弹出框",type:"confirm"});\n\nthis.$dialog({title:"标题",content:"这里是内容区，超出一行的部分会折行居中显示。",type:"confirm"});',
        "this.$dialog({title:'自定义',content:'你喜欢这个自定义文字功能吗？',type:'alert',confirmButtonText:'超喜欢'});\n\nthis.$dialog({title:'自定义',content:'你喜欢这个红配绿吗？',type:'confirm',cancelButtonText:'喜欢',confirmButtonText:'还是喜欢',confirmButtonColor:'#1c8c00',cancelButtonColor:'#de0000'});\n\nthis.$dialog({title:'没有遮罩真的很难看的',overlay: false,confirmButtonText:'赞同'});\n\nthis.$dialog({title:'点击黑色遮罩，会关闭弹窗',closeOnClickOverlay:true, confirmButtonText:'哇，好棒'});",
        "\/\/ 按钮回调事件\nthis.$dialog({\n\ttitle:'你可以传入事件函数，这样点击按钮之后就会被回调了',\n\ttype:'confirm',\n\tcancelButtonText:'戳我啥没有',\n\tconfirmButtonText:'戳我有惊喜',\n\tcallback: (action) => {\n\t\tif(action === 'confirm'){\n\t\t\tthis.$toast('其实根本没有惊喜啦~')\n\t\t}else if(action === 'cancel'){\n\t\t\tthis.$toast({content:'万万没想到',type:'success'})\n\t\t}\n\t}\n});\n\n \/\/异步关闭。函数会接收两个参数，action:引发关闭事件的动作名（cancel,confirm,overlay）,done: 手动执行关闭弹出框事件\nthis.$dialog({\n\ttitle:'点击黑色遮罩，会关闭弹窗',\n\ttype:'confirm',\n\tconfirmButtonText:'点我2s后才关闭',\n\tcancelButtonText:'点我立即关闭',\n\tbeforeClose: (action,done)=>{\n\t\tif(action === 'confirm'){\n\t\t\tsetTimeout(() => {\n\t\t\t\t done() \n\t\t\t}, 2000); \n\t\t}else{\n\t\t\t done() \n\t\t}\n\t}\n});",
        '\/\/ 定义一个变量，接收dialog方法执行结果\nlet dialog = this.$dialog({title:"仅有标题的alert弹出框"});\n\n\/\/ 手动关闭弹框\ndialog.close()'
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
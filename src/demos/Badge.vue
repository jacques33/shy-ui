<template>
  <div class="demo-switch">
    <h2 class="page-title">Badge 徽章</h2>
    <div class="white-block">
      <h4>基础演示</h4>
      <p class="tips">
        <strong>说明：</strong>
        <br />text属性不传值时，就是小红点；
        <br />text属性可以传入任意字符串或数字，当传入数字并大于999时，会显示 '999+'；
        <br />bgColor属性可以更换徽章背景色；
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
            <td>text</td>
            <td>文本。不传值时，显示小红点</td>
            <td>String</td>
            <td>-</td>
            <td>否</td>
          </tr>
          <tr>
            <td>bgColor</td>
            <td>徽章背景色；</td>
            <td>String</td>
            <td>false</td>
            <td>#f43530</td>
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
        '<shy-badge></shy-badge>\n' +
      '<shy-badge text="8"></shy-badge>\n' +
      '<shy-badge text="888"></shy-badge>\n' +
      '<shy-badge text="8888"></shy-badge>\n' +
      '<shy-badge text="New"></shy-badge>\n' +
      '<shy-badge text="8" bgColor="#3090f4"></shy-badge>'
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
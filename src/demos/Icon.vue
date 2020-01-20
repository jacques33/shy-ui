<template>
  <div class="demo-icon">
    <h2 class="page-title">Icon 字体图标</h2>
    <div class="white-block">
      <h4>使用介绍</h4>
      <p class="tips">
        <strong>说明：</strong><br><br>
        1. shy-ui只提供一些常见的基本的图标，当全局引入shy-ui库后，你可以直接使用这些字体图标，而无需再引入任何文件。<br><br>
        2. 当前字体图标，是通过symbol引用的方式加载进来的；为避免和你的项目本身引用的其他字体图标产生不必要的冲突，请不要使用symbol方式引入你的其他字体图标文件；
      </p>
    </div>

    <div class="white-block">
      <h4>所有图标</h4>
      <div class="icon-item" v-for="(icon,i) in list" :key="i">
      <shy-icon size="28px" color="#222" v-bind:name="icon"></shy-icon>
      <p>{{icon}}</p>
      <div class="copy-cover" @click="copyText(icon)">点击复制</div>
    </div>
    </div>

    <div class="white-block">
      <h4>设置字号、颜色</h4>
      <p class="tips">
        <strong>说明：</strong>属性值size、color；
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
            <td>name</td>
            <td>icon图标的名称。</td>
            <td>String</td>
            <td>-</td>
            <td>是</td>
          </tr>
          <tr>
            <td>color</td>
            <td>icon图标的颜色。</td>
            <td>String</td>
            <td>#1B0000</td>
            <td>否</td>
          </tr>
          <tr>
            <td>size</td>
            <td>icon图标的字号。</td>
            <td>String</td>
            <td>16px</td>
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
            <td>click事件传递。可接收的回调参数：event事件</td>
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
      list: [
        "iconback",
        "iconenter",
        "icondown",
        "iconplus",
        "iconsuccess",
        "iconclose",
        "iconsearch",
        "iconthumb-up",
        "iconcircle-nochoose",
        "iconcircle-choosed",
        "iconrect-nochoose",
        "iconrect-choosed",
        "iconshare",
        "iconuser",
        "iconmsg",
        "iconsession",
      ],
      codeList: [
        '<shy-icon color="#ff0000" name="iconclose"></shy-icon>\n\n'+
        '<shy-icon size="20px" name="iconsuccess"></shy-icon>'
      ]
    };
  },
  methods: {
    // 复制icon
    copyText(name) {
      let oInput = document.createElement("input");
      oInput.value = name;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand("Copy");
      oInput.style.display = "none";
      document.body.removeChild(oInput);
      this.$toast({ content: "复制成功" });
    },
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
<style lang="scss" scoped>
.demo-icon{
  .icon-item {
    position: relative;
    width: 140px;
    height: 140px;
    box-sizing: border-box;
    padding: 0 10px;
    border: 1px solid #ddd;
    margin-left: -1px;
    margin-bottom: -1px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    &:hover .copy-cover {
      visibility: visible;
    }

    p {
      display: block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
      margin-top: 10px;
    }
    .copy-cover {
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      font-size: 18px;
      line-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
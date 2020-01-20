<template>
  <div class="change-log">
    <h2 class="page-title">更新日志</h2>
    <div class="white-block" v-for="(log,i) in logs" :key="i">
      <h4>
        {{log.version}}
        <small class="log-date">{{log.date}}</small>
      </h4>
      <h5 v-if="log.features && log.features.length>0">Feature</h5>
      <ul v-if="log.features">
        <li v-for="(feature,idx) in log.features" :key="idx">{{feature}}</li>
      </ul>
      <h5 v-if="log.bugs && log.bugs.length>0">Bug</h5>
      <ul v-if="log.bugs">
        <li v-for="(bug,idx) in log.bugs" :key="idx">{{bug}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      logs: [
        {
          version: '0.3.4',
          date: '2019-12-11',
          features: [
            "Loading：完善文档说明",
          ]
        },
        {
          version: '0.3.3',
          date: '2019-12-10',
          features: [
            "Loading：新增加载动画",
          ],
          bugs: [
            "Dialog：dialog手机示例页面报错",
          ]
        },
        {
          version: '0.3.2',
          date: '2019-12-06',
          features: [
            "Dialog：新增手动关闭弹窗的方法",
            "演示界面顶部导航条样式调整",
          ]
        },
        {
          version: '0.3.1',
          date: '2019-12-03',
          features: [
            "Switch：新增异步控制开关状态的功能",
            "Cell：链接类型的cell，增加active样式",
          ],
          bugs: [
            "移动端演示页面，ios滑动不流畅的问题",
            "Dialog：示例代码错误修复"
          ]
        },
        {
          version: '0.3.0',
          date: '2019-11-29',
          features: [
            "新增pull refresh组件；",
            "Icon：新增部分icon图标；",
            "快速上手新增px转换rem尺寸说明",
            "新增手机扫码预览功能",
          ],
        },
        {
          version: '0.2.9',
          date: '2019-11-27',
          features: [
            "Button：导航属性修改；新增url属性；新增active样式；移动端示例页面完善；",
            "Badge：新增badge组件",
            "新增'更新日志'页面",
          ],
          bugs: [
            "Cell：补充Props表遗漏字段说明；部分样式调整及行高bug修复；",
          ]
        },
        {
          version: '0.2.8',
          date: '2019-11-25',
          features: [
            "新增collapse组件；",
            "调整demo首页组件顺序",
            "loading动画重新实现；内置样式新增loading；",
          ],
          bugs: []
        }
      ]
    }
  },
  methods:{
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
}
</script>
<style lang="scss" scoped>
.change-log{
  h4{
    font-size: 24px;
    font-weight: 500;
  }
  .log-date{
    font-size: 12px;
    font-weight: 500;
    color: #888;
    margin-left: 10px;
    background-color: #f7f7f7;
  }
  h5{
    font-size: 16px;
    font-weight: 500;
    color: #920000;
    margin: 30px 0 10px;
  }
  ul,li{
    list-style: disc inside;
    color: #888;
    font-weight: 400;
    line-height: 26px;
  }
}
</style>

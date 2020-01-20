<template>
  <div class="demo-button">
    <h2 class="preview-title">文字提示</h2>
    <div class="preview-unit">
      <shy-button text="文字提示" size="medium" color="#07c160" @click="textClick(1)"></shy-button>
      <shy-button text="长文字提示" size="medium" color="#07c160" @click="textClick(2)"></shy-button>
    </div>

    <h2 class="preview-title">图标提示</h2>
    <div class="preview-unit">
      <shy-button text="成功提示" size="medium" color="#07c160" @click="textClick(3)"></shy-button>
      <shy-button text="失败提示" size="medium" color="#ff0000" @click="textClick(4)"></shy-button>
      <shy-button text="loading提示" size="medium" color="#f5a719" @click="textClick(7)"></shy-button>
    </div>

    <h2 class="preview-title">自定义图标</h2>
    <div class="preview-unit">
      <shy-button text="自定义图标" size="medium" color="#f5a719" @click="textClick(8)"></shy-button>
    </div>

    <h2 class="preview-title">自定义显示时长</h2>
    <div class="preview-unit">
      <shy-button text="1s后消失" size="medium" color="#07c160" @click="textClick(5)"></shy-button>
      <shy-button text="5s后消失" size="medium" color="#07c160" @click="textClick(6)"></shy-button>
    </div>
    
  </div>
</template>
<script>

export default {
  components: {
  },
  methods: {
    // 切换开关状态，可获取传入参数：开关状态，true/false
    textClick(code) {
      console.log(code);
      switch (code) {
        case 1:
          this.$toast("普通文字提示");
          break;
        case 2:
          this.$toast("文字超过10个汉字长度，会折行显示");
          break;
        case 3:
          this.$toast({
            content: "成功提示",
            type: "success"
          });
          break;
        case 4:
          this.$toast({
            content: "失败提示",
            type: "error"
          });
          break;
        case 5:
          this.$toast({
            content: "1s后消失",
            time: 1000
          });
          break;
        case 6:
          this.$toast({
            content: "5s后消失",
            time: 5000
          });
          break;
        case 7:
          this.$toast({
            content: "加载中…",
            type: "loading",
          });
          break;
        case 8:
          this.$toast({
            content: "自定义图标自定义图标",
            type: "custom",
            customIcon: '<span class="iconfont shy-toast-custom">&#xe64a;</span>',
          });
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.demo-button {
  padding: 0 20px;

  .shy-button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .status-text {
    font-size: 14px;
    line-height: 50px;
    margin: 0 10px;
    color: #991200;
  }
}
</style>
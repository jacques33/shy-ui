<template>
  <div class="demo-button">
    <h2 class="preview-title">按钮状态</h2>
    <div class="preview-unit">
      <shy-button text="页面主操作按钮 Normal"></shy-button>
      <shy-button text="按钮loading状态" v-bind:isLoading="isLoading"></shy-button>
      <shy-button text="页面主操作 Disable" v-bind:isDisabled="isDisabled"></shy-button>
       <shy-button text="直角按钮" v-bind:radius="false"></shy-button>
    </div>

    <h2 class="preview-title">按钮大小</h2>
    <div class="preview-unit">
      <shy-button text="大按钮" size="large"></shy-button><br>
      <shy-button text="中等按钮" size="medium"></shy-button><br>
      <shy-button text="小按钮" size="small"></shy-button>
    </div>

    <h2 class="preview-title">按钮类型</h2>
    <div class="preview-unit">
      <shy-button text="背景色无边框型" shapes="solid"></shy-button>
      <shy-button text="无背景色，线条边框" shapes="line"></shy-button>
      <shy-button text="无背景色，线条边框，disabled" v-bind:isDisabled="true" shapes="line"></shy-button>
    </div>

    <h2 class="preview-title">自定义图标按钮</h2>
    <div class="preview-unit">
      <shy-button text="中等按钮" size="medium">
        <shy-icon color="#ffffff" name="iconsuccess"></shy-icon>
      </shy-button>
    </div>
    <h2 class="preview-title">自定义颜色按钮</h2>
    <div class="preview-unit">
      <shy-button text="中等按钮" size="medium" color="#0000ff"></shy-button>
    </div>

    <h2 class="preview-title">导航按钮</h2>
    <div class="preview-unit">
      <shy-button text="点击跳转到列表页" to="/mobile"></shy-button>
      <shy-button text="点击跳转到baidu.com" url="//baidu.com"></shy-button>
    </div>
  </div>
</template>
<script>
// import ShyButton from "@/components/button/Index.vue";

export default {
  components: {
  },
  data() {
    return {
      isLoading: true,
      isDisabled: true,
     
    };
  },
 
  methods: {
    // 切换loading状态，可获取参数：点击事件信息
    toggleLoading(e) {
      this.isLoading = !this.isLoading;
      // window.console.log(e)
    },
    // 切换Disabled状态，可获取参数：点击事件信息
    toggleDisabled(e) {
      this.isDisabled = !this.isDisabled;
      // window.console.log(e)
    }
  }
};
</script>
<style lang="scss" scoped>
.demo-button {
  padding: 0 20px;

  .shy-button{
    margin-bottom: 20px;
  }
  .preview-unit .tips{
    margin-bottom: 20px;
  }
}
</style>
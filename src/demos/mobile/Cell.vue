<template>
  <div class="demo-switch">
    <h2 class="preview-title">基础演示</h2>
    <div class="preview-unit">
      <shy-cell title="仅标题" content=""></shy-cell>
      <shy-cell title="标题" content="内容"></shy-cell>
      <shy-cell title="标题" content="不显示右箭头" v-bind:islink="false"></shy-cell>
      <shy-cell title="双行列表" desc="描述信息"></shy-cell>
    </div>

    <h2 class="preview-title">文字超出省略</h2>
    <div class="preview-unit">
      <shy-cell title="仅标题。超出会省略的超出会省略的超出会省略的" content=""></shy-cell>
      <shy-cell title="标题。超出一半就会省略的" content="内容"></shy-cell>
      <shy-cell title="标题" content="内容。超出一半就会省略的"></shy-cell>
      <shy-cell title="双行列表" desc="描述信息。超出会省略的超出会省略的超出会省略的超出会省略的"></shy-cell>
    </div>

    <h2 class="preview-title">更换图标</h2>
    <div class="preview-unit">
      <shy-cell title="更换右侧图标" content="使用UI库的icon组件" rightIcon="iconsuccess"></shy-cell>
      <shy-cell title="更换右侧图标" content="自定义右侧字体图标">
        <template v-slot:right-icon>
          <!-- 插入的图标，请带上class名称 cell-right-icon -->
          <span class="iconfont cell-right-icon">&#xe676;</span>
        </template>
      </shy-cell>
      <shy-cell title="标题" content="自定义左侧图标">
        <template v-slot:left-icon>
          <!-- 插入的图标，请带上class名称 cell-left-icon -->
          <span class="iconfont cell-left-icon" style="color:red;">&#xe676;</span>
        </template>
      </shy-cell>
    </div>

    <h2 class="preview-title">导航单元格</h2>
    <div class="preview-unit">
      <shy-cell title="URL跳转" content="url属性" url="https://www.baidu.com"></shy-cell>
      <shy-cell title="路由跳转" content="to属性" to="/mobile/start"></shy-cell>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      switchStatus1: true,
      switchStatus2: true,
      switchStatus3: true,
      switchStatus4: true,
      switchStatus5: false,
    };
  },
  methods: {
    // 切换开关状态，可获取传入参数：开关状态，true/false
    change(status){
      if(status){
        this.$toast({content: '打开了',type:'text'});
      }else{
        this.$toast({content: '关闭了',type:'text'});
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.demo-switch {
  padding: 0;

  .preview-title,.tips{
    padding: 0 15px;
  }
  .status-text{
    font-size: 14px;
    line-height: 50px;
    margin: 0 10px;
    color: #991200
  }
  .shy-switch{
    margin: 0 10px;
  }
}
</style>
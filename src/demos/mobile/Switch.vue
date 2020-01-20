<template>
  <div class="demo-switch">
    <h2 class="preview-title">基础演示</h2>
    <div class="preview-unit">
      <shy-switch v-model="switchStatus1" size="small"></shy-switch>
      <shy-switch v-model="switchStatus2" size="medium" ></shy-switch>
      <shy-switch v-model="switchStatus3" size="large"></shy-switch>
      <p class="tips">
        <strong>说明：</strong>开关提供三种尺寸，属性值size：small、medium、large；默认medium。<br>通过v-model绑定值，开关状态切换会直接修改当前值；通过监听change事件，获取按钮切换事件回调
      </p>
    </div>

    <h2 class="preview-title">禁用状态</h2>
    <div class="preview-unit">
      <shy-switch v-model="switchStatus5" v-bind:isDisabled="true"></shy-switch>
      <br><br>
      <shy-switch v-model="switchStatus4" v-bind:isDisabled="true"></shy-switch>
    </div>

    <h2 class="preview-title">异步控制</h2>
    <div class="preview-unit">
      <shy-switch v-bind:preventDefault="true" v-model="switchStatus6" v-on:click="asyncControl"></shy-switch>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      switchStatus1: true,
      switchStatus2: true,
      switchStatus3: true,
      switchStatus4: true,
      switchStatus5: false,
      switchStatus6: true,
    };
  },
  methods: {
    // 异步控制
    asyncControl(){
      this.$dialog({
        type: 'confirm',
        title: '确定切换开关吗？',
        callback: (action)=>{
          if(action === 'confirm'){
            this.switchStatus6 = !this.switchStatus6;
          }
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.demo-switch {
  padding: 0 20px;

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
<template>
  <div class="demo-badge">
    <h2 class="preview-title">基础演示</h2>
    <div class="preview-unit">
      <shy-badge></shy-badge>
      <shy-badge text="8"></shy-badge>
      <shy-badge text="888"></shy-badge>
      <shy-badge text="8888"></shy-badge>
      <shy-badge text="New"></shy-badge>
      <shy-badge text="8" bgColor="#3090f4"></shy-badge>
      <br>
      <br>
    </div>

    <h2 class="preview-title">在cell组件使用</h2>
    <div class="preview-unit">
      <shy-cell title="小红点">
        <template slot="right-icon">
          <shy-badge></shy-badge>
        </template>
      </shy-cell>
      <shy-cell title="数字">
        <template slot="right-icon">
          <shy-badge text="1000"></shy-badge>
        </template>
      </shy-cell>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.demo-badge {
  padding: 0 15px;

  .preview-unit:first-of-type .shy-badge{
    margin-right: 25px;
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
  ul{
    padding:10px 0;
    
    li{
      padding: 0 15px;
      line-height: 30px;
      font-size: 15px;
      color: #0065ca;
      cursor: pointer;

      &:hover{
        background-color: #fff7ff;
      }
    }
  }
}
</style>
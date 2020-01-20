<template>
  <div class="demo-collapse">
    <h2 class="preview-title">基础演示</h2>
    <div class="preview-unit">
      <shy-collapse title="默认不展开">
        <p style="padding:20px 15px;">这里是内容区，使用默认slot插入内容，内容区的样式需要自定义</p>
      </shy-collapse>
      <shy-collapse title="设置为展开状态" :isUnfold="true">
        <p style="padding:25px 15px;text-align:center;font-size:30px;">我展开了</p>
      </shy-collapse>
    </div>

    <h2 class="preview-title">自定义标题</h2>
    <div class="preview-unit">
      <shy-collapse>
        <div slot="title">
          <span class="iconfont">&#xe629;</span>
          菜单
        </div>
        <ul slot="default">
          <li>语文</li>
          <li>数学</li>
          <li>英语</li>
        </ul>
      </shy-collapse>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.demo-collapse {
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
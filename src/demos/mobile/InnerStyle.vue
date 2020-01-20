<template>
  <div class="inner-style">
    <h2 class="preview-title">文字颜色</h2>
    <div class="preview-unit">
      <p class="color-main">这行文字的色值是 "#991200"</p>
      <p class="color-earth-yellow">这行文字的色值是 "#C3AB83"</p>
      <p class="color-yellow">这行文字的色值是 "#edc600"</p>
      <p class="color-black">这行文字的色值是 "#1b0000"</p>
      <p class="color-gray">这行文字的色值是 "#888"</p>
      <p class="color-light-gray">这行文字的色值是 "#bdbdbd"</p>
    </div>
    <h2 class="preview-title">背景颜色</h2>
    <div class="preview-unit">
      <div class="bg-block bg-color1">这行文字的背景色值是 "#f2f2f2"</div>
      <div class="bg-block bg-color2">这行文字的背景色值是 "#f7f7f7"</div>
      <div class="bg-block bg-color3">这行文字的背景色值是 "#F8ECEC"</div>
      <div class="bg-block bg-color4">这行文字的背景色值是 "#f6eee8"</div>
    </div>
    <h2 class="preview-title">文字超出省略</h2>
    <div class="preview-unit">
      <p class="shy-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</p>
      <p class="shy-ellipsis2">这是一段最多显示两行的文字，多余的内容会被省略，所以我多打一些字，以便它能显示超出两行的效果。</p>
    </div>  

    <h2 class="preview-title">Loading动画</h2>
    <div class="preview-unit">
      <p class="shy-ellipsis">
        <i class="shy-loading"></i>加载中…
      </p>
      <p class="background-loading">
        <i class="shy-loading" style="width:25px;height:25px;"></i> 加载中…
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.inner-style {
  padding: 0 20px 40px;

  p[class^="color-"] {
    line-height: 35px;
    font-weight: 500;
    font-size: 18px;
  }
  p[class^="shy-"] {
    line-height: 20px;
    margin-bottom: 15px;
    font-size: 15px;
  }
  .bg-block {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: #222;
    text-align: center;
    margin: 10px 0;
  }
  .background-loading{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: rgba(0,0,0,.6);
    color: #fff;
  }
}
</style>
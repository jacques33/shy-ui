<template>
  <div class="icon-content">
    <h2 class="preview-title">所有图标</h2>
    <div class="icon-item" v-for="(icon,i) in list" :key="i">
      <shy-icon size="28px" color="#222" v-bind:name="icon"></shy-icon>
    </div>
    <h2 class="preview-title">设置颜色</h2>
    <div class="preview-unit">
      <shy-icon color="#ffb9b9" name="iconsuccess" size="28px"></shy-icon>
      <shy-icon color="#ff5555" name="iconsuccess" size="28px"></shy-icon>
      <shy-icon color="#c50000" name="iconsuccess" size="28px"></shy-icon>
      <p class="tips">
        <strong>说明：</strong>通过color属性，设置图标颜色
      </p>
    </div>
    <h2 class="preview-title">设置字号</h2>
    <div class="preview-unit">
      <shy-icon size="16px" name="iconsuccess"></shy-icon>
      <shy-icon size="22px" name="iconsuccess"></shy-icon>
      <shy-icon size="30px" name="iconsuccess"></shy-icon>
      <p class="tips">
        <strong>说明：</strong>通过size属性，设置图标字号
      </p>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
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
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.icon-content {
  padding: 0 20px;

  .icon-item {
    position: relative;
    width: 25%;
    padding: 6% 0;
    box-sizing: border-box;
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
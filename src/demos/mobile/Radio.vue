<template>
  <div class="demo-radio">
    <h2 class="preview-title">基础演示</h2>
    <div class="preview-unit">
      <label class="label">你想要什么？</label>
      <shy-radio v-bind:items="items" v-model="radioValue"></shy-radio>
      <p>当前选中的项是：{{radioValue.value}}</p>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      // radio选项列表。Array
      items:[
        {name: 1, value:"鱼"},
        {name: 2, value:"熊掌"},
        {name: 3, value:"我都要"},
      ],
      // radio当前选中值。Object，name项必须有，value项可省略
      radioValue: {name: 1, value:"鱼"},
    };
  }
};
</script>
<style lang="scss" scoped>
.demo-radio {
  padding: 0;

  .preview-title{
    padding: 0 15px;
  }
  .preview-unit p{
    padding: 15px;
    font-size: 12px;
  }
}
</style>
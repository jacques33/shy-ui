<template>
  <div class="demo-checkbox">
    <h2 class="preview-title">基础演示</h2>
    <div class="preview-unit">
      <label class="label">你喜欢什么性别的人？</label>
      <shy-checkbox v-bind:items="items1" v-model="checkboxValues1"></shy-checkbox>
    </div>

    <h2 class="preview-title">自定义icon颜色</h2>
    <div class="preview-unit">
      <label class="label">是否显示在线状态？</label>
      <shy-checkbox v-bind:items="items3" color="#07c160" v-model="checkboxValues3"></shy-checkbox>
    </div>

    <h2 class="preview-title">设置最大可选数</h2>
    <div class="preview-unit">
      <label class="label">你喜欢下列哪些乐队？(最多选择2个)</label>
      <shy-checkbox v-bind:items="items2" v-model="checkboxValues2" :max="2"></shy-checkbox>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      // checkbox选项列表。Array
      items1:[
        {name: "male", value:"男"},
        {name: "female", value:"女"},
      ],
      items2:[
        {name: 1, value:"Queen"},
        {name: 2, value:"Beatles"},
        {name: 3, value:"Led Zeppelin"},
        {name: 4, value:"Guns N' Roses"},
      ],
      items3:[
        {name: 'display', value:"显示"},
      ],
      // checkbox当前选中值的name属性数组。Array
      checkboxValues1: ['male'],
      checkboxValues2: [],
      checkboxValues3: ['display'],

    };
  }
};
</script>
<style lang="scss" scoped>
.demo-checkbox {
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
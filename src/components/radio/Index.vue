<template>
  <div class="shy-radio">
    <div class="radio-item" v-for="(item,i) in items" :key="i" @click="changeValue(item)">
      <span class="cell-title shy-ellipsis">{{item.value}}</span>
      <shy-icon v-bind:class="{'checked':currentValue.name === item.name}" name="iconsuccess" :color="color" size="14px"></shy-icon>
    </div>
  </div>
</template>
<script>

export default {
  name: "shy-radio",
  props: {
    // 单选组件 可选项列表
    // 数据格式 [ {name: "1",value: '男'}, {name: "2",value: '女'} ]
    items: {
      type: Array,
      required: true
    },
    // 当前选中项
    value: {
      type: Object,
      required: true,
    },
    // icon颜色
    color: {
       type: String,
      required: false,
      default: "#991200"
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    // 点击事件
    changeValue(item) {
      this.currentValue = item;
      this.$emit("input", item);
    }
  },
  watch:{
    value(n){
      this.currentValue = n;
    }
  }
};
</script>
<style lang="scss">
.shy-radio {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: #fff;

  .radio-item{
    height: 50px;
    padding: 16px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
  }
  .cell-title{
    flex:1;
    line-height: 18px;
    font-size: 16px;
    text-align: left;
    font-weight: 500;
    color: #1b0000;
  }
  .shy-icon{
    flex: 0 0 24px;
    font-size: 14px;
    text-align: right;
    color: #991200;
    opacity: 0;
    transition: all .2s;
  }
  .checked{
    opacity: 1;
  }
}
</style>
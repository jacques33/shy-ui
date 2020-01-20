<template>
  <div class="shy-checkbox">
    <div class="radio-item" v-for="(item,i) in items" :key="i" @click="changeValue(item)">
      <span class="cell-title shy-ellipsis">{{item.value}}</span>
      <shy-icon name="iconcircle-nochoose" color="#eee" size="23px"></shy-icon>
      <shy-icon class="checked" v-bind:class="{'checked-show':currentValue.indexOf(item.name)>-1}" name="iconcircle-choosed" :color="color" size="23px"></shy-icon>
    </div>
  </div>
</template>
<script>

export default {
  name: "shy-checkbox",
  props: {
    // 单选组件 可选项列表
    // 数据格式 [ {name: "male",value: '男'}, {name: "female",value: '女'} ]
    items: {
      type: Array,
      required: true
    },
    // 当前选中项的name值数组
    value: {
      type: Array,
      required: false,
      default: []
    },
     // icon颜色
    color: {
      type: String,
      required: false,
      default: "#991200"
    },
    // 最大可选数
    max: {
      type: [Number,String],
      required: false,
      default: 0
    }
  },
  data() {
    return {
      currentValue: this.value,
      maxChoosed: parseInt(this.max)
    };
  },
  methods: {
    // 点击事件
    changeValue(item) {
      let idx = this.currentValue.indexOf(item.name);
      if(idx > -1){
        this.currentValue.splice(idx,1);
      }else{
        // 如果有最大可选数
        if(this.maxChoosed !== 0 && this.currentValue.length >= this.maxChoosed){
          return
        }else{
          this.currentValue.push(item.name)
        }
      }
      // 事件传递
      this.$emit("input", this.currentValue);
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
.shy-checkbox {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: #fff;

  .radio-item{
    position: relative;
    height: 50px;
    padding: 13px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
  }
  .cell-title{
    flex:1;
    line-height: 24px;
    font-size: 16px;
    text-align: left;
    font-weight: 500;
    color: #1b0000;
  }
  .shy-icon{
    flex: 0 0 24px;
    text-align: right;
    color: #991200;
  }
  .checked{
    position: absolute;
    right: 0;
    top: 13px;
    opacity: 0;
    transition: all .2s;
    z-index: 2;
  }
  .checked-show{
    opacity: 1;
  }
}
</style>
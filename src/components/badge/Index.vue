<template>
  <span class="shy-badge" v-bind:class="{'shy-badge-text': text}" v-bind:style="{'background-color': bgColor}">{{textFormat}}</span>
</template>
<script>
export default {
  name: "shy-badge",
  props: {
    /**
     * 文本内容
     * 是否必填：否
     * */
    text: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * 背景颜色
     * 是否必填：否
     * */
    bgColor: {
      type: String,
      required: false,
      default: '#f43530'
    }
  },
  computed: {
    textFormat(){
      // 如果超过999，则显示 '999+'
      if(this.text && parseInt(this.text) > 999){
        return '999+'
      }
      return this.text
    }
  }
};
</script>
<style lang="scss">
.shy-badge {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 18px;
}
.shy-badge-text{
  width: auto;
  height: 18px;
  padding: 0 6px;
  border-radius: 9px;
}

</style>
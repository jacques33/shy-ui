<template>
  <div class="shy-cell" @click="cellClick($event)" v-bind:class="{'shy-cell-link': url || to}">
    <div class="cell-body">
      <p class="cell-first-line">
        <span class="cell-title shy-ellipsis">
           <!-- 左侧图标插槽。插槽内容需要带上class名：cell-left-icon -->
          <slot name="left-icon"></slot>
          {{title}}
        </span>
        <span v-if="content" class="cell-content shy-ellipsis">{{content}}</span>
        <!-- 右侧图标插槽。插槽内容需要带上class名：cell-right-icon -->
        <shy-icon v-if="islink && !this.$slots['right-icon']" :name="rightIcon" color="#bdbdbd" size="14px"></shy-icon>
        <slot name="right-icon"></slot>
      </p>
      <p v-if="desc" class="cell-info shy-ellipsis">{{desc}}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: "shy-cell",
  props: {
    /** 标题 */
    title: {
      type: String,
      required: true
    },
    /** 内容 */
    content: {
      type: String,
      required: false
    },
    /** 描述信息 */
    desc: {
      type: String,
      required: false
    },
    /** 是否显示右箭头 */
    islink: {
      type: Boolean,
      required: false,
      default: true
    },
    /** 页面内路由跳转 */
    to: {
      type: String,
      required: false
    },
    /** url跳转 */
    url: {
      type: String,
      required: false
    },
    /** 右侧图标;仅支持当前UI库的icon组件 */
    rightIcon: {
      type: String,
      required: false,
      default: 'iconenter'
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    // 点击事件传递
    cellClick(e) {
      if(this.to){
        this.$router.push(this.to);
      }
      if(this.url){
        window.location.href = this.url;
      }
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss">
.shy-cell {
  width: 100%;
  min-height: 50px;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: #fff;

  .cell-body{
    padding: 12px 0;
    border-bottom: 1px solid #f2f2f2;
  }
  .cell-first-line{
    line-height: 25px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }
  .cell-title{
    flex:1;
    text-align: left;
    font-weight: 500;
    color: #1b0000;
  }
  .cell-content{
    flex:1;
    text-align: right;
    color: #888;
  }
  .shy-icon,.cell-right-icon{
    flex: 0 0 24px;
    font-size: 14px;
    text-align: right;
    color: #bdbdbd;
  }
  .cell-left-icon{
    font-size: 14px;
    margin-right: 5px;
    color: #bdbdbd;
  }
  .cell-info{
    text-align: left;
    font-size: 12px;
    color: #888;
    margin: 4px 0;
    line-height: 12px;
  }
}
.shy-cell-link:active{
  background-color: #f2f2f2;
}
</style>
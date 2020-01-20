<template>
  <div class="shy-collapse">
    <div class="collapse-body">
      <div class="collapse-body-cell" @click="changeStatus">
        <div class="collapse-title" v-bind:class="{'shy-collapse-open': collapse}">
          <slot name="title" v-if="this.$slots['title']"></slot>
          <p v-else class="shy-ellipsis">{{title}}</p> 
        </div>
        <shy-icon
          v-bind:class="{'shy-icon-rotate': collapse}"
          name="icondown"
          color="#bdbdbd"
          size="14px"
        ></shy-icon>
      </div>
      <!-- 内容区 -->
      <div class="collapse-body-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shy-collapse",
  props: {
    /** 标题 */
    title: {
      type: String,
      required: false,
      default:''
    },
    /** 是否展开 */
    isUnfold: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      collapse: this.isUnfold
    };
  },
  mounted(){
    if(this.isUnfold){
      this.transitionFunc(true);
    }
  },
  methods: {
    // 点击事件传递
    changeStatus(e) {
      this.collapse = !this.collapse;
      this.transitionFunc(this.collapse);
      
      this.$emit('change',this.collapse)
    },
    // 隐藏区 动画
    transitionFunc(status) {
      let element = this.$el.querySelector('.collapse-body-content');
      if(!status){
         element.style.height = 0;
         return
      }
      let height = window.getComputedStyle(element).height;
      element.style.height = "auto";
      let targetHeight = window.getComputedStyle(element).height;
      element.style.height = height;
      element.offsetWidth;
      element.style.height = targetHeight;
    }
  }
};
</script>
<style lang="scss">
.shy-collapse {
  position: relative;
  width: 100%;
  min-height: 50px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  overflow: hidden;

  .collapse-body-cell {
    position: relative;
    padding: 0 15px;
  }
  .collapse-title {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0);
    transition: all .3s;
  }
  .shy-ellipsis{
    width: 90%;
    text-align: left;
    color: #1b0000;
    font-weight: 500;
  }
  .shy-icon {
    position: absolute;
    right: 15px;
    top: 16px;
    font-size: 14px;
    text-align: right;
    color: #bdbdbd;
    // transform-origin: center center;
    transform: rotate(0deg);
    transition: transform 0.3s;
  }
  .shy-icon-rotate {
    transform: rotate(-180deg);
  }
  .collapse-body-content {
    font-size: 14px;
    color: #888;
    height: 0;
    transition: height 0.3s ease-in-out;
    will-change: height;
    overflow: hidden;
    box-sizing: border-box;
  }
  .shy-collapse-open{
    border-color: #f2f2f2;
  }
}
</style>
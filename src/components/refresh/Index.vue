<template>
  <div class="shy-pull-refresh">
    <!-- 文字提示区域 -->
    <div class="loading-area" v-bind:style="{'line-height': loadingTextHeight}">
      <p v-if="currStatus === 2">{{releaseText}}</p>
      <p v-else-if="currStatus === 3">
        <i class="shy-loading"></i>
        {{loadingText}}
      </p>
      <p v-else>{{pullText}}</p>
    </div>
    <!-- 主体内容区域 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "shy-pull-refresh",
  props: {
    /** 是否显示下拉状态 */
    value: {
      type: Boolean,
      required: false,
      default: false
    },
    /** 下拉文案 */
    pullText: {
      type: String,
      required: false,
      default: "下拉刷新"
    },
    /** 释放提示文案 */
    releaseText: {
      type: String,
      required: false,
      default: "释放刷新"
    },
    /** loading文案 */
    loadingText: {
      type: String,
      required: false,
      default: "加载中…"
    },
    /** loading文案区域高度 */
    loadingTextHeight: {
      type: String,
      required: false,
      default: "50px"
    }
  },
  data() {
    return {
      currStatus: 0 //0:静止状态，1：下拉文字状态，2：释放文字状态，3：loading状态
    };
  },
  mounted() {
    let content = this.$el.querySelector(".content");
    let startPos = 0;
    let pullHeight = 0;

    let that = this;
    // 触摸开始事件
    content.addEventListener(
      "touchstart",
      function(e) {
        startPos = e.touches[0].pageY;
      },
      false
    );
    // 触摸滑动事件
    content.addEventListener(
      "touchmove",
      function(e) {
        pullHeight = e.touches[0].pageY - startPos;
        // 通过一个抛物线函数，处理拖拽的速率变化
        let countValue = Math.sqrt(pullHeight / 50) * 50;
        if (pullHeight > 0 && countValue < 150) {
          // 更新值
          if (!that.value) {
            that.$emit("input", true);
          }
          
          // 拉动到一定距离，切换为 提示释放状态
          if (pullHeight >= 50) {
            that.currStatus = 2;
          }else{
            // 距离小于定值，切换为下拉状态
            that.currStatus = 1;
          }
          // 更新位置
          content.style.transform = "translateY(" + countValue + "px)";
        }
      },
      false
    );
    // 触摸结束事件
    content.addEventListener(
      "touchend",
      function(e) {
        // 切换为加载状态
        if (that.currStatus == 2) {
          content.style.transform = `translateY(${that.loadingTextHeight})`;
          that.currStatus = 3;
          that.$emit("refresh");
        }else{
          content.style.transform = `translateY(0px)`;
          that.currStatus = 0;
        }
      },
      false
    );
  },
  methods: {},
  watch: {
    value(n) {
      if (!n) {
        this.$el.querySelector(".content").style.transform = "translateY(0px)";
        setTimeout(() => {
          this.currStatus = 0;
        }, 400);
      }
    }
  }
};
</script>
<style lang="scss">
.shy-pull-refresh {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  user-select: none;

  .loading-area {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;

    p {
      color: #888;
      font-size: 15px;
      text-align: center;
    }
  }
  .content {
    position: relative;
    transition: transform 0.3s ease;
    transform: translateY(0px);
    background-color: #fff;
  }
}
</style>
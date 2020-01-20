<template>
  <button
    class="shy-button"
    v-bind:class="{
     'btn-sm': size==='small',
     'btn-md': size==='medium',
     'btn-line': shapes==='line',
     'btn-right-angle': !radius,
     'btn-loading': isLoading,
   }"
    v-bind:style="{'background-color': color}"
    v-bind:disabled="isDisabled"
    v-on:click="btnCLick($event)"
  >
    <i v-if="isLoading" class="shy-loading"></i>
    <!-- 说明：此处slot，是为了支持iconfont图标内容，如："<span class="iconfont">&#xe618;</span>" -->
    <slot></slot>
    {{text}}
  </button>
</template>
<script>
export default {
  name: "shy-button",
  props: {
    /**
     * 按钮文本内容
     * 是否必填：是
     * */
    text: {
      type: String,
      required: true
    },
    /**
     * 按钮尺寸
     * 是否必填：否
     * 可选值：small  medium  large
     * 默认：large
     * */
    size: {
      type: String,
      required: false,
      default: "large" // small/medium/large
    },
    /**
     * 按钮颜色
     * 是否必填：否
     * */
    color: {
      type: String,
      required: false
    },
    /**
     * 按钮外观样式
     * 是否必填：否
     * 可选值：solid：背景色填充型，line：白色背景线框类型
     * 默认：solid
     * */

    shapes: {
      type: String,
      required: false,
      default: "solid"
    },
    /**
     * 按钮是否圆角
     * 是否必填：否
     * 可选值：true false
     * 默认：true
     * */

    radius: {
      type: Boolean,
      required: false,
      default: true // ture/false
    },
    /**
     * 按钮是否可点击
     * 是否必填：否
     * 可选值：true false
     * 默认：false => 可点击
     * */

    isDisabled: {
      type: Boolean,
      required: false,
      default: false // ture/false
    },
    /**
     * 按钮是否显示加载状态
     * 是否必填：否
     * 可选值：true false
     * 默认：false
     * */

    isLoading: {
      type: Boolean,
      required: false,
      default: false // ture/false
    },
    /**
     * 组件内跳转页面
     * 是否必填：否
     * 参数说明：传入$router.push()需要的完整路径
     * */
    to: {
      type: String,
      required: false
    },
    /**
     * url跳转页面
     * 是否必填：否
     * 参数说明：传入url路径
     * */
    url: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
  methods: {
    // 点击事件
    btnCLick(e) {
      // 如果是loading状态
      if (this.isLoading) return;
      // 如果是导航按钮
      if (this.to) {
        this.$router.push(this.to);
        return;
      }
      // 如果是url按钮
      if (this.url) {
        window.location.href = this.url;
        return;
      }

      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss">
.shy-button {
  width: 100%;
  height: 47px;
  background-color: #991200;
  box-shadow: none;
  outline: none;
  border: 0;
  color: #fff;
  border-radius: 47px;
  font-size: 17px;
  font-weight: 500;
  line-height: 47px;
  vertical-align: middle;
  user-select: none;

  :active,:focus {
    outline: none;
  }

  span {
    color: #fff;
  }
  img {
    width: 17px;
    margin: 0 5px;
    display: inline-block;
    vertical-align: text-top;
  }
}
.shy-button[disabled] {
  opacity: 0.6;
}
.btn-sm {
  width: auto;
  height: 27px;
  box-sizing: border-box;
  padding: 6px 15px;
  border-radius: 27px;
  font-size: 14px;
  line-height: 14px;
  img {
    width: 14px;
  }
}
.btn-md {
  width: 140px;
  height: 32px;
  border-radius: 32px;
  font-size: 16px;
  line-height: 32px;
  img {
    width: 16px;
  }
}
.btn-line {
  background-color: #fff;
  color: #991200;
  border: 1px solid #991200;

  &:active{
    opacity: .7;
  }
}
.btn-loading {
  color: rgba(255, 255, 255, 0.6);
}
.btn-right-angle {
  border-radius: 0;
}

.shy-button:not(.btn-line):active{
  box-shadow: inset 0 12px 16px rgba(0,0,0,.15);
}
</style>
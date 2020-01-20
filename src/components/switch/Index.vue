<template>
  <div class="shy-switch">
    <input
      class="shy-switch-input"
      type="checkbox"
      v-model="currentValue"
      @click="switchClick($event)"
      v-bind:disabled="isDisabled"
      v-bind:class="'shy-switch-'+size"
    />
    <div v-if="preventDefault" class="prevent-hover" @click="preventClick"></div>
  </div>
</template>
<script>
export default {
  name: "shy-switch",
  props: {
    /**
     * 按钮状态
     * 是否必填：否
     * 可选值：true false
     * 默认：true => 开
     * */
    value: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * 按钮大小
     * 是否必填：否
     * 可选值：small、medium、large
     * 默认：medium
     * */
    size: {
      type: String,
      required: false,
      default: "medium"
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
      default: false
    },
    /**
     * 阻止自动切换事件
     * 是否必填：否
     * 可选值：true false
     * 默认：false 
     * */
    preventDefault: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    switchClick(e) {
      this.$emit("click");
    },

    // 组织默认事件的点击事件 
    preventClick(){
      this.$emit("click");
    },
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    },
    value(val) {
      this.currentValue = val;
    }
  }
};
</script>
<style lang="scss">
.shy-switch {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;

  .shy-switch-input {
    position: relative;
    width: 50px;
    height: 30px;
    border: 1px solid #dfdfdf;
    outline: 0;
    border-radius: 15px;
    box-sizing: border-box;
    background-color: #dfdfdf;
    transition: background-color 0.1s, border 0.1s;
    appearance: none;
    &:disabled {
      opacity: 0.6;
    }
    &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 48px;
      height: 28px;
      border-radius: 14px;
      background-color: #fdfdfd;
      transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1),
        -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    }
    &::after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 28px;
      height: 28px;
      border-radius: 14px;
      background-color: #ffffff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35),
        -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    }
    &:checked {
      background-color: #09bb07;
    }
    &:checked::before {
      transform: scale(0);
    }
    &:checked::after {
      transform: translateX(20px);
    }
  }

  // small 开关
  .shy-switch-small {
    width: 44px;
    height: 24px;
    border-radius: 12px;

    &::before {
      width: 42px;
      height: 22px;
      border-radius: 11px;
    }
    &::after {
      width: 22px;
      height: 22px;
      border-radius: 11px;
    }
    &:checked::after {
      transform: translateX(20px);
    }
  }
  // small 开关
  .shy-switch-large {
    width: 62px;
    height: 34px;
    border-radius: 17px;

    &::before {
      width: 60px;
      height: 32px;
      border-radius: 16px;
    }
    &::after {
      width: 32px;
      height: 32px;
      border-radius: 16px;
    }
    &:checked::after {
      transform: translateX(28px);
    }
  }

  .prevent-hover{
    position: absolute;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
}
</style>
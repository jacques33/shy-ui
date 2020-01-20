<template>
  <div
    class="shy-dialog"
    v-if="visible"
    @click.self="clickOverlay"
    v-bind:style="{'background-color': overlay?'rgba(0,0,0,0.6)':'rgba(0,0,0,0)'}"
  >
    <div class="dialog-content">
      <div class="dialog-body">
        <h3 v-if="title" v-html="title"></h3>
        <p v-if="content" v-html="content"></p>
      </div>
      <div class="dialog-foot">
        <button
          class="btn-cancel"
          v-if="type === 'confirm'"
          v-bind:style="{'color': cancelButtonColor}"
          @click="btnClick('cancel')"
        >{{cancelButtonText}}</button>
        <button
          class="btn-submit"
          v-bind:style="{'color': confirmButtonColor}"
          @click="btnClick('confirm')"
        >{{confirmButtonText}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import ShyIcon from "@/components/icon/Index.vue";

export default {
  name: "shy-toast",
  components: {
    ShyIcon
  },
  data() {
    return {
      title: "标题",
      content: "这里放content的内容这里放content的内容这里放content的内容",
      type: "alert", //'alert','confirm'
      confirmButtonText: "确定", // 确定按钮文案
      confirmButtonColor: "#991200", // 确定按钮颜色
      cancelButtonText: "取消", // 取消按钮文案
      cancelButtonColor: "#888", // 取消按钮颜色
      overlay: true, // 是否显示遮罩层
      closeOnClickOverlay: false, // 点击遮罩层，是否关闭弹窗
      callback: () => {}, // 按钮点击回调
      beforeClose: null, // 异步关闭，关闭前的回调函数，调用 done() 后关闭弹窗
      visible: false,

      blockBtn: false //异步回调过程中，锁定按钮点击
    };
  },
  methods: {
    // 按钮点击事件
    btnClick(action) {
      if (this.blockBtn) return;
      this.callback(action);
      this.closeDialog(action);
    },
    // 点击遮罩层，关闭弹窗
    clickOverlay() {
      if (this.blockBtn) return;
      if (this.closeOnClickOverlay) {
        this.closeDialog("overlay");
      }
    },
    // 关闭弹窗
    closeDialog(action) {
      if (this.blockBtn) return;
      // 如果存在异步关闭回调函数
      if (this.beforeClose) {
        this.blockBtn = true;
        this.beforeClose(action, () => {
          this.visible = false;
          document.body.className = "";
          this.blockBtn = false;
        });
      } else {
        this.visible = false;
        document.body.className = "";
      }
    }
  }
};
</script>
<style lang="scss">
.shy-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;

  .dialog-content {
    width: 80%;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid #f2f2f2;
  }
  .dialog-body {
    box-sizing: border-box;
    padding: 25px 25px 15px;
  }
  h3 {
    margin-bottom: 15px;
    color: #1b0000;
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
    text-align: center;
  }
  p {
    color: #888;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }
  .dialog-foot {
    width: 100%;
    height: 50px;
    border-top: 1px solid #f2f2f2;
    box-sizing: border-box;
    display: flex;
  }
  button {
    flex-grow: 1;
    background-color: #fff;
    border: none;
    box-shadow: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    color: #991200;

    :active,
    :focus {
      border: none;
      box-shadow: none;
      outline: none;
    }
  }
  .btn-cancel {
    border-right: 1px solid #f2f2f2;
    color: #888;
  }
}
</style>
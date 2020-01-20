import Vue from 'vue'
import Dialog from './Index.vue'

const DialogBox = Vue.extend(Dialog)
const defalutOptions = {
  title: "",
  content: "",
  type: "alert", //'alert','confirm'
  confirmButtonText: "确定", // 确定按钮文案
  confirmButtonColor: "#991200", // 确定按钮颜色
  cancelButtonText: "取消", // 取消按钮文案
  cancelButtonColor: "#888", // 取消按钮颜色
  overlay: true, // 是否显示遮罩层
  closeOnClickOverlay: false, // 点击遮罩层，是否关闭弹窗
  confirmCallback: () => {}, // 确定按钮点击回调
  cancelCallback: () => {}, // 取消按钮点击回调
  beforeClose: null, // 异步关闭，关闭前的回调函数，调用 done() 后关闭弹窗
  visible: false
}

let instance;
Dialog.install =  function (options) {
  if (options === undefined || options === null || options === '') {
    return
  }
  // 支持直接传入字符串，在此处转换成需要的对象格式
  if (options && (typeof options === 'string' || typeof options === 'number')) {
    options = {
      'content': options
    }
  }
  // 合并配置项
  let realOptions = Object.assign({},defalutOptions,options);
  instance = new DialogBox({
    data: realOptions
  }).$mount();

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    if(realOptions.title !== '' || realOptions.content !== ''){
      instance.visible = true;
      // 设置body超出隐藏，防止背景滚动
      document.body.className = 'shy-overflow-hidden'
    }
  });

  return Dialog
}
// 提供一个关闭的方法
Dialog.close = ()=>{
  if(instance){
    instance.visible = false;
  }
}

export default Dialog

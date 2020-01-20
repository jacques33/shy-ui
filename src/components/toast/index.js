import Vue from 'vue'
import Toast from './Index.vue'

const ToastBox = Vue.extend(Toast)

Toast.install =  function (options) {
  if(options === undefined || options === null || options === ''){
    return
  }
  // 支持直接传入字符串，在此处转换成需要的对象格式
  if(options && (typeof options === 'string' || typeof options === 'number')){
    options = {'content':options}
  }
  // 如果time参数非数字，则转成数字
  if(options && options.time && typeof time === 'string'){
    options.time = parseInt(options.time)
  }
  let instance = new ToastBox({
    data: options
  }).$mount()

  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    if(instance.content !== ''){
      instance.visible = true
    }
  })
}

export default Toast
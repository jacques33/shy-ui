import ShyIcon from './Index.vue'
import '@/assets/css/iconfont.js'

ShyIcon.install = function (Vue) {
  Vue.component(ShyIcon.name, ShyIcon)
}

export default ShyIcon

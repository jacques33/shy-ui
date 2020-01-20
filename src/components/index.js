
// 公共css
import '@/assets/css/style.css';
// 组件
import ShyButton from './button';
import Dialog from './dialog';
import ShyIcon from './icon';
import ShySwitch from './switch';
import Toast from './toast';
import ShyCell from './cell';
import ShyRadio from './radio';
import ShyCheckbox from './checkbox';
import ShyCollapse from './collapse';
import ShyBadge from './badge';
import ShyPullRefresh from './refresh';
import ShyLoading from './loading';
const components = [
  ShyButton,
  Dialog,
  ShyIcon,
  ShySwitch,
  Toast,
  ShyCell,
  ShyRadio,
  ShyCheckbox,
  ShyCollapse,
  ShyBadge,
  ShyPullRefresh,
  ShyLoading
]

// 定义install方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const ShyToast = Toast.install;
const ShyDialog = Dialog.install;
export default {
  install,
  ShyButton,
  ShyToast,
  ShyCell,
  ShyIcon,
  ShySwitch,
  ShyDialog,
  ShyRadio,
  ShyCheckbox,
  ShyCollapse,
  ShyBadge,
  ShyPullRefresh,
  ShyLoading
}

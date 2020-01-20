# SHY-UI-M

### npm安装
```
npm install shy-ui-m 
```

### main.js引入
```
import Vue from 'vue'
import Shy from 'shy-ui-m'

// 引入css文件
import 'shy-ui-m/lib/shy-ui.css'

Vue.use(Shy)

// 将部分组件注册为全局方法
Vue.prototype.$toast = Shy.ShyToast;
Vue.prototype.$dialog = Shy.ShyDialog;
```

### 在线演示Demo
[在线演示地址](https://shyui-demo.zlzgy.org.cn).

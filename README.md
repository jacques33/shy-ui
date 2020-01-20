# shy-ui-m 

基于Vue的**移动端**UI组件库 :iphone:


### 1. npm安装
```
npm install shy-ui-m 
```

### 2. main.js引入
```
import Vue from 'vue'
import Shy from 'shy-ui-m'

// 引入css文件
import 'shy-ui-m/lib/shy-ui.css'

Vue.use(Shy)

// 将部分组件注册为全局方法
Vue.prototype.$toast = Shy.ShyToast
Vue.prototype.$dialog = Shy.ShyDialog
Vue.prototype.$loading = Shy.ShyLoading
```

### 3. 在线文档和实例
[在线地址](https://shyui-demo.zlzgy.org.cn)

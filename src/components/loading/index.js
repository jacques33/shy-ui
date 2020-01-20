import Vue from 'vue'
import Loading from './Index.vue'

let LoadingBox = Vue.extend(Loading);

let instance;
let timer = null;
// 提供一个开启的方法
Loading.show = (options)=>{
    // 支持直接传入字符串，在此处转换成需要的对象格式
    if (options && (typeof options === 'string' || typeof options === 'number')) {
        options = {
            'text': options
        }
    }
    // 合并配置项
    instance = new LoadingBox().$mount();

    instance.text = (options && options.text) || '';

    document.body.appendChild(instance.$el);

    let timeout = (options && options.timeout) || 30; // 延迟关闭
    timer = setTimeout(() => {
        try{
            document.body.removeChild(instance.$el);
        } catch (e) {

        }
    }, timeout*1000)
};
// 提供一个关闭的方法
Loading.hide = ()=>{
    if(instance && instance.$el){
        // instance.visible = false;
        try{
            clearTimeout(timer);
            document.body.removeChild(instance.$el);
        } catch (e) {

        }
    }
};

export default Loading

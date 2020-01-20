<template>
    <div class="demo-switch">
        <h2 class="page-title">Loading 加载动画</h2>
        <div class="white-block">
            <h4>引入</h4>
            <p class="tips">
                <strong>全局引入shy-ui-m后，将Loading注册为全局Vue的方法，以便在各个组件中方便的使用Loading加载动画的开启和关闭</strong>
                <br />
            </p>
            <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
            <pre class="code">{{codeList[0]}}</pre>
        </div>

        <div class="white-block">
            <h4>文字提示</h4>
            <p class="tips">
                <strong>说明：</strong>show方法内传text字段或直接传字段，则展示菊花+加载文字,不传则仅展示菊花;默认30秒延时关闭
            </p>
            <a class="code-toggle" @click="toggleCode($event)">&lt;/&gt; 代码演示</a>
            <pre class="code">{{codeList[1]}}</pre>
        </div>


        <h2 class="preview-title">Methods</h2>
        <div class="white-block">
            <table class="api-table" border="0" cellspacing="0" cellpadding="0">
                <thead>
                <tr>
                    <th>方法名</th>
                    <th>参数</th>
                    <th>说明</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>show</td>
                    <td>text: loading文字内容,  timeout: loading显示时长 (单位：秒,默认值：30)</td>
                    <td>显示loading；无参数时，显示居中的菊花Gif</td>
                </tr>
                <tr>
                    <td>hide</td>
                    <td>-</td>
                    <td>移除loading；</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            codeList: [
                "// main.js \n\n" +
                "import Vue from 'vue'\n" +
                "import { Shy } from 'shy-ui'\n\n" +
                "Vue.use(Shy)\n" +
                "Vue.prototype.$loading = Shy.ShyLoading",

                '//显示loading\nthis.$loading.show();' +
                '\n\n//显示带字符串loading\nthis.$loading.show({text:"加载中"});'+
                '\n//可以直接传字符串\nthis.$loading.show("加载中...");' +
                '\n\n//loading延时关闭\nthis.$loading.show({timeout: 30});' +
                '\n\n//隐藏loading\nthis.$loading.hide();'
            ]
        };
    },
    methods: {
        // 打开、关闭 代码演示
        toggleCode(e) {
            let dom = e.currentTarget;
            if (dom.nextElementSibling.style.display != "none") {
                dom.nextElementSibling.style.display = "none";
            } else {
                dom.nextElementSibling.style.display = "block";
            }
        }
    }
};
</script>

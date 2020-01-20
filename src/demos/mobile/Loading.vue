<template>
    <div class="demo-button">
        <h2 class="preview-title">文字加载</h2>
        <div class="preview-unit">
            <shy-button text="菊花" size="medium" color="#07c160" @click="textClick(0)"></shy-button>
            <shy-button text="loading" size="medium" color="#07c160" @click="textClick(1)"></shy-button>
            <shy-button text="加载中" size="medium" color="#07c160" @click="textClick(2)"></shy-button>
        </div>

        <h2 class="preview-title">延迟关闭</h2>
        <div class="preview-unit">
            <shy-button text="3秒延迟" size="medium" color="#07c160" @click="textClick(3)"></shy-button>
            <shy-button text="30秒延迟" size="medium" color="#07c160" @click="textClick(4)"></shy-button>
        </div>

        <shy-button v-if="closeBtn" text="关闭loading" size="medium" color="#ff0000" @click="textClick(5)" class="close"></shy-button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            closeBtn: false
        }
    },
    methods: {
        // 切换开关状态，可获取传入参数：开关状态，true/false
        textClick(code) {
            this.closeBtn = true;
            switch (code) {
                case 0:
                    this.$loading.show();
                    break;
                case 1:
                    this.$loading.show({
                        text: "loading..."
                    });
                    break;
                case 2:
                    this.$loading.show({
                        text: "加载中..."
                    });
                    break;
                case 3:
                    this.$loading.show({
                        timeout: 3
                    });
                    break;
                case 4:
                    this.$loading.show();
                    break;
                case 5:
                    this.$loading.hide();
                    this.closeBtn = false;
                    break;
            }
        }
    },
    // 离开此页面，关闭弹窗
    beforeRouteLeave (to, from, next) {
        this.$loading.hide();
        next();
    }
};
</script>
<style lang="scss" scoped>
.demo-button {
    padding: 0 20px;

    .shy-button {
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .status-text {
        font-size: 14px;
        line-height: 50px;
        margin: 0 10px;
        color: #991200;
    }
    .close{
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 15;
    }
}
</style>

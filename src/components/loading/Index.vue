<template>
    <div class="loading-box">
        <div class="loading">
            <i class="shy-loading" :style="{marginTop: text? '-30px' : ''}"></i>
            <p class="text" v-if="text">{{text}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'shy-loading',
        data() {
            return {
                text: ''
            }
        },
    }
</script>
<style lang="scss" scoped>
.loading-box{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0);
    z-index: 10;
    .loading{
        width: 120px;
        height: 120px;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        background: rgba(17,17,17, 0.7);
        z-index: 11;
    }
    .shy-loading{
        display: inline-block;
        width: 32px;
        height: 32px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -16px;
        margin-top: -16px;
    }
    .text{
        color: #fff;
        text-align: center;
        margin-top: 70px;
    }
}
</style>

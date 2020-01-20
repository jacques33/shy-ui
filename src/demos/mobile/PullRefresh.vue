<template>
  <div class="demo-refresh">
    <shy-pull-refresh v-model="isPull" loadingTextHeight="40px" @refresh="pullRefresh">
      <h2 class="preview-title">基础演示</h2>
      <div class="preview-unit">
        <p class="tips"><strong>说明：</strong>当前示例请在手机端查看演示；或者在pc端开启控制台，ipad横屏模式；</p>
        <ul class="refreshContainer">
          <li v-for="(item,i) in list" :key="i">{{item}}</li>
        </ul>
      </div>
    </shy-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPull: false,

      list: [
        1,2,3,4,5,6,7,8,9
      ]
    };
  },
  methods: {
    // 下拉刷新回调事件
    pullRefresh() {
      let that = this;
      setTimeout(() => {
        // 数据更新示例
        let random1 = Math.floor(Math.random()*100);
        let random2 = Math.floor(Math.random()*100);
        this.list.unshift(random1,random2);

        // 数据更新完毕，手动隐藏加载区域
        that.isPull = false;

        this.$toast("加载完成")
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.demo-refresh {
  padding: 0 ;

  .preview-title,.preview-unit{
    padding: 0 15px;
  }

  .refreshContainer {
    width: 100%;
    background-color: #fff;
  }
  .refreshContainer li {
    background-color: #eee;
    margin-bottom: 1px;
    padding: 10px 10px;
    text-align: center;
    font-weight: 500;
  }
}
</style>
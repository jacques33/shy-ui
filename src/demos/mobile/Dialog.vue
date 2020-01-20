<template>
  <div class="demo-button">
    <h2 class="preview-title">alert类型</h2>
    <div class="preview-unit">
      <shy-button size="medium" text="alert 仅有标题"  color="#07c160" @click="textClick(1)"></shy-button>
      <shy-button size="medium" text="alert 仅有内容" color="#07c160" @click="textClick(2)"></shy-button>
      <shy-button size="medium" text="alert 标题+内容" color="#07c160" @click="textClick(3)"></shy-button>
      <p class="tips">
        <strong>说明：</strong>如果只是弹出alert类型的带content信息的弹出框，dialog方法亦支持直接传入字符串，而不需要完整的对象传入。请参考代码演示。
      </p>
    </div>

    <h2 class="preview-title">confirm类型</h2>
    <div class="preview-unit">
      <shy-button size="medium" text="confirm 仅有标题" color="#075ac1" @click="textClick(4)"></shy-button>
      <shy-button size="medium" text="confirm 仅有内容" color="#075ac1" @click="textClick(5)"></shy-button>
      <shy-button size="medium" text="confirm 标题+内容" color="#075ac1" @click="textClick(6)"></shy-button>
    </div>

    <h2 class="preview-title">自定义。文字、颜色及其他</h2>
    <div class="preview-unit">
      <shy-button size="medium" text="自定义按钮文字" color="#e29200" @click="textClick(7)"></shy-button>
      <shy-button size="medium" text="自定义按钮颜色" color="#e29200" @click="textClick(8)"></shy-button>
      <shy-button size="medium" text="不显示黑色遮罩" color="#e29200" @click="textClick(9)"></shy-button>
      <shy-button size="medium" text="点击黑色遮罩关闭弹窗" color="#e29200" @click="textClick(10)"></shy-button>
    </div>
    <h2 class="preview-title">回调事件</h2>
    <div class="preview-unit">
      <shy-button size="medium" text="按钮回调事件" color="#ea2f2f" @click="textClick(11)"></shy-button>
      <shy-button size="medium" text="异步关闭回调" color="#ea2f2f" @click="textClick(12)"></shy-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    // 切换开关状态，可获取传入参数：开关状态，true/false
    textClick(code) {
      let dialog;
      switch (code) {
        case 1:
          dialog = this.$dialog({title:'仅有标题的alert弹出框'});
          break;
        case 2:
          dialog = this.$dialog("仅显示内容的alert弹出框，可以直接传字符串的哟");
          break;
        case 3:
          dialog = this.$dialog({title:'标题',content:'这里是内容区，超出一行的部分会折行居中显示。'});
          break;
        case 4:
          dialog = this.$dialog({title:'仅有标题的confirm弹出框',type:'confirm'});
          break;
        case 5:
          dialog = this.$dialog({content:'仅显示内容的confirm弹出框',type:'confirm'});
          break;
        case 6:
          dialog = this.$dialog({title:'标题',content:'这里是内容区，超出一行的部分会折行居中显示。',type:'confirm'});
          break;
        case 7:
          dialog = this.$dialog({title:'自定义',content:'你喜欢这个自定义文字功能吗？',type:'alert',confirmButtonText:'超喜欢'});
          break;
        case 8:
          dialog = this.$dialog({title:'自定义',content:'你喜欢这个红配绿吗？',type:'confirm',cancelButtonText:'喜欢',confirmButtonText:'还是喜欢',confirmButtonColor:'#1c8c00',cancelButtonColor:'#de0000'});
          break;
        case 9:
          dialog = this.$dialog({title:'没有遮罩真的很难看的',overlay: false,confirmButtonText:'赞同'});
          break;
        case 10:
          dialog = this.$dialog({title:'点击黑色遮罩，会关闭弹窗',closeOnClickOverlay:true, confirmButtonText:'哇，好棒'});
          break;
        case 11:
          dialog = this.$dialog({title:'你可以传入事件函数，这样点击按钮之后就会被回调了',type:'confirm',cancelButtonText:'戳我啥没有',confirmButtonText:'戳我有惊喜',callback:(action)=>{
            if(action === 'confirm'){
              this.$toast("其实根本没有惊喜啦~")
            }else if(action === 'cancel'){
              this.$toast({content:"万万没想到",type:'success'})
            }
          }});
          break;
        case 12:
          dialog = this.$dialog({title:'点击黑色遮罩，会关闭弹窗',type:'confirm',confirmButtonText:'点我2s后才关闭',cancelButtonText:'点我立即关闭',beforeClose: (action,done)=>{
            if(action === 'confirm'){
              setTimeout(() => {
                done()
              }, 2000);
            }else{
              done()
            }
          }});
          break;
      }
      this.dialog = dialog;
    }
  },
  // 离开此页面，关闭弹窗
  beforeRouteLeave (to, from, next) {
    if (this.dialog) this.dialog.close();
    next();
  }
};
</script>
<style lang="scss" scoped>
.demo-button {
  padding: 0 20px;

  .shy-button{
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .status-text {
    font-size: 14px;
    line-height: 50px;
    margin: 0 10px;
    color: #991200;
  }
}
</style>

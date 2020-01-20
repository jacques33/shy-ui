<template>
  <transition name="fade" mode="out-in">
    <div class="shy-toast toast-text" v-if="type === 'text' && visible">
      <p>{{content}}</p>
    </div>
    <div class="shy-toast toast-icon" v-else-if="type === 'loading' && visible">
      <i class="shy-loading" style="width: 30px;height:30px;color:#fff;"></i>
      <p>{{content}}</p>
    </div>
    <!-- 自定义图标 -->
    <div class="shy-toast toast-icon" v-else-if="type === 'custom' && visible">
      <div v-html="customIcon"></div>
      <p>{{content}}</p>
    </div>
    <div class="shy-toast toast-icon" v-else-if="visible">
      <shy-icon v-if="type==='success'" name="iconsuccess" color="#fff" size="35px"></shy-icon>
      <shy-icon class="icon-error" v-else-if="type==='error'" name="iconclose" color="#fff" size="35px"></shy-icon>
      <p>{{content}}</p>
    </div>
  </transition>
</template>
<script>
import ShyIcon from "@/components/icon/Index.vue";

export default {
  name: "shy-toast",
  components: {
    ShyIcon
  },
  data() {
    return {
      content: "",
      type: "text", //'text','success','error','loading','custom'
      customIcon: '',
      time: 3000,
      visible: false
    };
  },
  mounted() {
    this.close();
  },
  methods: {
    show(options) {
      if (typeof options != "object") {
        options = { options };
      }
      this.$data = Object.assign({}, this.$data, options);
      this.visible = true;
    },
    close() {
      setTimeout(() => {
        this.visible = false;
      }, this.time);
    }
  }
};
</script>
<style lang="scss">
.shy-toast {
  position: fixed;
  top: 50%;
  left: 0;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  z-index: 99999;

  p {
    text-align: center;
    font-size: 15px;
    line-height: 20px;
    color: #fff;
  }
}
.toast-text {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  margin-top: -20px;
  p {
    display: inline-block;
    min-width: 100px;
    max-width: 180px;
    min-height: 50px;
    padding: 15px;
    background-color: rgba(0,0,0,.8);
    border-radius: 5px;
    box-sizing: border-box;
  }
}
.toast-icon {
  width: 120px;
  height: 120px;
  left: 50%;
  margin-left: -60px;
  margin-top: -60px;
  background-color: rgba(0,0,0,.8);
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  padding: 25px 0px 10px;
  overflow: hidden;

  p {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 10px;
  }

  .shy-toast-custom{
    font-size: 35px;
    line-height: 35px;
    color: #fff;
  }
}
</style>
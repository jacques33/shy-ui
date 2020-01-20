<template>
  <div class="mobile">
    <div class="top-bar">
      <shy-icon
        v-if="currPage.path != '/mobile/start' && currPage.path != '/mobile/changelog' "
        @click="goback"
        name="iconback"
        size="18px"
        color="#fff"
      ></shy-icon>
      <h3>{{currPage.name}}</h3>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile",
  components: {},
  mounted() {
    // 插入 meta 标签
    if (document.body.clientWidth < 500 || window.screen.width < 500) {
      var oMeta = document.createElement("meta");
      oMeta.content =
        "width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0";
      oMeta.name = "viewport";
      document.getElementsByTagName("head")[0].appendChild(oMeta);
    }

    // 提供一个js函数，供主页面路由变化时调用mobile演示界面跳转
    let ifmRouteTo = (window.ifmRouteTo = path => {
      let new_path = "/mobile/" + path.split("/").pop();
      if (new_path !== this.$route.path) {
        // 跳转
        this.$router.push(new_path);
      }
    });

    let path = window.parent.location.pathname;
    ifmRouteTo(path);
  },
  data() {
    return {
      currPage: {
        name: "shy-ui-m",
        path: this.$route.path
      },
      list: [
        { name: "组件列表", path: "/mobile/start" },
        { name: "内置样式", path: "/mobile/style" },
        { name: "button 按钮", path: "/mobile/button" },
        { name: "switch 开关", path: "/mobile/switch" },
        { name: "icon 图标", path: "/mobile/icon" },
        { name: "toast 提示框", path: "/mobile/toast" },
        { name: "dialog 弹出框", path: "/mobile/dialog" },
        { name: "cell 单元格", path: "/mobile/cell" },
        { name: "radio 单选框", path: "/mobile/radio" },
        { name: "checkbox 复选框", path: "/mobile/checkbox" },
        {
          name: "collapse 折叠面板",
          path: "/mobile/collapse"
        },
        {
          name: "badge 徽章",
          path: "/mobile/badge"
        },
        {
          name: "PullRefresh 下拉刷新",
          path: "/mobile/refresh"
        },
        {
          name: "Loading 加载动画",
          path: "/mobile/loading"
        },
      ]
    };
  },
  updated() {
    for (let item of this.list) {
      if (item.path === this.$route.path) {
        this.currPage = item;
        break;
      }
    }
  },
  methods: {
    goback() {
      this.$router.push("/mobile/start");
    }
  },
  watch: {
    "$route.path": (n, o) => {
      window.parent.IdxRouteTo(n);
    }
  }
};
</script>

<style lang="scss">
*{
  -webkit-overflow-scrolling: touch;
}
.mobile {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f9f9f9;

  .top-bar {
    height: 44px;
    flex-shrink: 0;
    flex-grow: 0;
    line-height: 44px;
    background-color: #001938;
    position: relative;
    z-index: 999999999;

    .shy-icon {
      position: absolute;
      left: 15px;
    }
    h3 {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }
  }
  .content {
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>

<template>
  <div class="index">
    <header>
      <h2>
        Shy-ui-m
        <small>基于VUE的移动端UI组件库</small>
      </h2>
      <div class="demo-qrcode">
        <p>
          <span class="iconfont">&#xe62f;</span>
          扫码体验
        </p>
        <img src="../assets/qrcode.png" width="120" alt="二维码" />
      </div>
    </header>
    <aside class="aside-nav">
      <h4>开发手册</h4>
      <div
        class="nav-item"
        v-for="(item,i) in navList"
        :key="i"
        v-bind:class="{'active': currPath == item.path}"
      >
        <router-link v-if="item.path" v-bind:to="item.path">{{item.name}}</router-link>
        <p v-else>{{item.name}}</p>
      </div>
    </aside>
    <div class="app-body">
      <section class="app-body-content">
        <router-view></router-view>
      </section>
    </div>
    <div class="app-mobile">
      <iframe name="mobile" width="360" height="640" src="/mobile"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      navList: [
        {
          name: "快速上手",
          path: "/index/start"
        },
        {
          name: "更新日志",
          path: "/index/changelog"
        },
        {
          name: "内置样式",
          path: "/index/style"
        },
        {
          name: "组件",
          path: ""
        },
        {
          name: "Button 按钮",
          path: "/index/button"
        },
        {
          name: "Switch 开关",
          path: "/index/switch"
        },
        {
          name: "Badge 徽章",
          path: "/index/badge"
        },
        {
          name: "Icon 图标",
          path: "/index/icon"
        },
        {
          name: "Cell 单元格",
          path: "/index/cell"
        },
        {
          name: "Collapse 折叠面板",
          path: "/index/collapse"
        },
        {
          name: "Radio 单选框",
          path: "/index/radio"
        },
        {
          name: "Checkbox 复选框",
          path: "/index/checkbox"
        },
        {
          name: "Toast 提示框",
          path: "/index/toast"
        },
        {
          name: "Dialog 弹出框",
          path: "/index/dialog"
        },
        {
          name: "PullRefresh 下拉刷新",
          path: "/index/refresh"
        },
        {
          name: "Loading 加载动画",
          path: "/index/loading"
        }
      ]
    };
  },
  mounted() {
    // 提供一个js函数，供iframe页面路由变化时调用主界面路由跳转
    let ifmRouteTo = (window.IdxRouteTo = path => {
      let new_path = "/index/" + path.split("/").pop();

      if (new_path !== this.$route.path) {
        // 跳转
        this.$router.push(new_path);
      }
    });
  },
  methods: {},
  computed: {
    currPath() {
      return this.$route.path;
    }
  },
  watch: {
    "$route.path": (n, o) => {
      window.frames["mobile"].ifmRouteTo(n);
    }
  }
};
</script>

<style lang="scss">
.index {
  width: 100%;
  min-width: 1200px;
  height: 100%;
  position: relative;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: 60px;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: #001938;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    h2 {
      color: #fff;
      font-size: 24px;
      line-height: 60px;
      font-weight: bold;
    }
    small {
      margin: 0 10px;
      font-weight: 500;
      font-size: 12px;
    }
  }
  .demo-qrcode {
    position: relative;

    p {
      line-height: 60px;
      color: #ddd;
      font-size: 14px;
    }
    .iconfont{
      font-size: 14px;
      color: #ddd;
      margin-right: 3px;
    }

    img {
      display: none;
      position: absolute;
      top: 50px;
      right: 0;
      padding: 10px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0,0,0,.2);
      z-index: 9;
    }

    &:hover img{
      display: block;
    }
  }
  .app-body {
    flex-grow: 1;
    overflow-y: auto;
    background-color: #f8f8f8;
    padding: 0 410px 0 240px;
  }
  .app-body-content {
    padding: 30px;
  }
  .aside-nav {
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 1;
    min-width: 220px;
    max-width: 220px;
    min-height: 100%;
    padding: 25px 0 75px;
    overflow-y: auto;
    background-color: #fff;
    border-right: 1px solid #f1f4f8;
    box-shadow: 0 8px 12px #ebedf0;

    h4 {
      padding: 0 40px;
      font-size: 18px;
      font-weight: 600;
      color: #222;
      margin-bottom: 30px;
    }
  }
  .nav-item {
    width: 100%;
    height: 40px;
    padding: 0 40px;
    font-size: 16px;
    color: #444;
    text-align: left;
    font-weight: 500;
    a {
      font-size: 16px;
      color: #444;
      text-align: left;
      font-weight: 500;
    }
    p {
      font-size: 18px;
    }
  }
  .active {
    color: #991200;
    a,
    p {
      font-size: 17px;
      color: #991200;
    }
  }
  .app-mobile {
    position: absolute;
    top: 90px;
    right: 30px;
    z-index: 1;
    box-sizing: border-box;
    width: 360px;
    height: 640px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: #ddd 0 4px 12px;

    iframe {
      border-top-width: 0px;
      border-right-width: 0px;
      border-bottom-width: 0px;
      border-left-width: 0px;
    }
  }
}
</style>

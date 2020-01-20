<template>
  <div class="demo-list">
    <!-- <div
      class="list-item"
      v-for="(item,i) in list"
      v-bind:key="i"
      @click="routeToPath(item)"
    >{{item.name}}</div> -->
    <shy-cell class="list-item" v-for="(item,i) in list" v-bind:key="i" @click="routeToPath(item)" :title="item.name"></shy-cell>
  </div>
</template>

<script>
export default {
  name: "demo-list",
  components: {},
  data() {
    return {
      list: [
        {
          name: "class 内置样式",
          path: "/mobile/style"
        },
        {
          name: "button 按钮",
          path: "/mobile/button"
        },
        {
          name: "switch 开关",
          path: "/mobile/switch"
        },
        {
          name: "badge 徽章",
          path: "/mobile/badge"
        },
        {
          name: "icon 图标",
          path: "/mobile/icon"
        },
        {
          name: "cell 单元格",
          path: "/mobile/cell"
        },
        {
          name: "collapse 折叠面板",
          path: "/mobile/collapse"
        },
        {
          name: "radio 单选框",
          path: "/mobile/radio"
        },
        {
          name: "checkbox 复选框",
          path: "/mobile/checkbox"
        },
        {
          name: "toast 提示框",
          path: "/mobile/toast"
        },
        {
          name: "dialog 弹出框",
          path: "/mobile/dialog"
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
  methods: {
    routeToPath({ path }) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss">
.demo-list {
  padding: 20px 15px 40px;
  background-color: #f9f9f9;
  box-sizing: border-box;

  .list-item {
    position: relative;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #efefef;
    border-radius: 4px;
    margin: 10px 0;
    color: #555;
    font-size: 16px;
    font-weight: 500;
    // text-align: center;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    top: 0;
    cursor: pointer;

    &:hover {
      font-size: 17px;
      top: -1px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

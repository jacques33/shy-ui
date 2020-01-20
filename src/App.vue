<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "app",
  components: {
  }
};
</script>

<style lang="scss">
@import "./assets/css/style";
@import "./assets/css/index.scss";

#app {
  height: 100%;
  position: relative;
}
</style>

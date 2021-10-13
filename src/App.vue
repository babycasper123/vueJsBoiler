
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
.tooltip {
  opacity: 1;
}
.validatedTooltip > .tooltip-inner {
  background: #26a65b;
  color: white;
}
</style>

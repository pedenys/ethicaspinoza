<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Body />
  </div>
</template>

<script>
import Body from "./components/Body.vue";

export default {
  name: "app",
  components: {
    Body
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

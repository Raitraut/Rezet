<template>
  <div id="app">
    <app-header/>
    <app-main-wrapper/>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppMainWrapper from "./components/AppMainWrapper";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

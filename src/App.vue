<template>
  <desktop>

  </desktop>
</template>

<script>
import Desktop from './components/Desktop.vue';

export default {
    name: "App",
    components: { Desktop }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  color: #ffffff;
}
</style>

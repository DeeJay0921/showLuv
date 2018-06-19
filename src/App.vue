<template>
  <div id="app">
    <HeartClick></HeartClick>
  </div>
</template>

<script>
  import HeartClick from './components/heartClick'

  export default {
    name: 'App',
    components: {
      HeartClick
    }
  }
</script>

<style>
  html,body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
</style>

<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div id="app">
    <h1>TODOアプリ</h1>
    <Weathers></Weathers>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Weathers from './components/Weather.vue'

export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }
  name: 'App',
  components: {
    Weathers
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
  margin-top: 60px;
}
</style>

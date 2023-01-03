<template>
  <div id="app">
  
    <!-- Turned header and footer into components -->
    <HeaderOne />

    <router-view></router-view>

      <!-- sticky footer -->
    <FooterOne />

  </div>
</template>

<script>

import HeaderOne from "./components/HeaderOne.vue"
import FooterOne from "./components/FooterOne.vue"

export default {
  name: 'App',
  components: {
    HeaderOne,
    FooterOne,
  },
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

.nav-item {
  padding: 0 1rem;
}

.router-link-exact-active {
  background-color: teal;
  color: white;
  padding: .5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
}
</style> 

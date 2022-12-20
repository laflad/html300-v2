<template>
  <div id="app">
    <header class="text-center">
        <h1 class="display-1">Bootstrap All Day</h1>
    </header>
    <nav>
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/images">Images</router-link>
      <router-link class="nav-item" to="/accordion">Accordion</router-link>
      <router-link class="nav-item" to="/grid">Grid</router-link>
    </nav>
    <router-view></router-view>
    <footer>

    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  // components: {
    
  // }
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

</style> 

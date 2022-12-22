<template>
  <div id="app">
  
    <header class="text-center">
      <h1 class="display-1 m-2">Bootstrap All Day</h1>
    </header>

    <nav>
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/images">Images</router-link>
      <router-link class="nav-item" to="/accordion">Accordion</router-link>
      <router-link class="nav-item" to="/grid">Grid</router-link>
    </nav>

    <router-view></router-view>
      <!-- sticky footer -->
    <footer class="footer bg-light text-center pt-3 pb-1">
        <p class="lead">Thanks for checking out my page!</p>
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

.router-link-exact-active {
  background-color: teal;
  color: white;
  padding: .5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
}
</style> 

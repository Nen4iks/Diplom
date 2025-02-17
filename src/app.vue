<template>
  <div id="app">
    <Navbar />
    <MainPage />
    <footer class="footer">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import MainPage from './main/main.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    Navbar
  }
}
</script>

<style>
/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Footer styles */
.footer {
  background-color: #f8fafc;
  padding: 1.5rem;
  text-align: center;
  margin-top: auto;
}
</style>

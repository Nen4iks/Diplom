<template>
  <nav class="navbar">
    <div class="logo">Your Logo</div>
    <div class="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }

  .nav-links {
    margin-top: 1rem;
    gap: 1rem;
  }

  .logo {
    margin-bottom: 0.5rem;
  }
}
</style> 
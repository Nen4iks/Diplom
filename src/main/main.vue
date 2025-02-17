<template>
  <div class="main-container">
    <OffersBanner />
    
    <!-- Features Section -->
    <section class="features" ref="featuresSection">
      <h2>Our Features</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.id" class="feature-card">
          <i :class="feature.icon"></i>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div v-for="stat in stats" :key="stat.id" class="stat-item">
        <h3>{{ stat.value }}</h3>
        <p>{{ stat.label }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import OffersBanner from '../components/OffersBanner.vue'

export default {
  name: 'MainPage',
  components: {
    OffersBanner
  },
  data() {
    return {
      features: [
        {
          id: 1,
          icon: 'fas fa-rocket',
          title: 'Fast Performance',
          description: 'Lightning-fast loading times and smooth interactions.'
        },
        {
          id: 2,
          icon: 'fas fa-shield-alt',
          title: 'Secure',
          description: 'Your data is protected with enterprise-grade security.'
        },
        {
          id: 3,
          icon: 'fas fa-mobile-alt',
          title: 'Responsive',
          description: 'Works perfectly on all devices and screen sizes.'
        }
      ],
      stats: [
        { id: 1, value: '10k+', label: 'Active Users' },
        { id: 2, value: '50+', label: 'Countries' },
        { id: 3, value: '99.9%', label: 'Uptime' }
      ]
    }
  }
}
</script>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.features {
  padding: 40px 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  padding: 30px;
  background-color: #f8fafc;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card i {
  font-size: 2.5rem;
  color: #6366f1;
  margin-bottom: 20px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 40px 0;
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  color: #6366f1;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

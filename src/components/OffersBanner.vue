<template>
  <div class="banner-container">
    <div class="offers-carousel" ref="carousel">
      <div 
        class="carousel-track" 
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div v-for="offer in offers" :key="offer.id" class="offer-slide">
          <div class="offer-content">
            <div class="offer-text">
              <h2>{{ offer.title }}</h2>
              <p>{{ offer.description }}</p>
              <div class="offer-price">
                <span class="original-price">{{ offer.originalPrice }}</span>
                <span class="discount-price">{{ offer.discountPrice }}</span>
              </div>
              <button class="offer-button">Learn More</button>
            </div>
            <div class="offer-image">
              <img :src="offer.image" :alt="offer.title">
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="carousel-controls">
      <button class="control-btn prev" @click="prevSlide">
        <i class="fas fa-chevron-left"></i>
      </button>
      <div class="carousel-indicators">
        <span 
          v-for="(_, index) in offers" 
          :key="index"
          :class="['indicator', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        ></span>
      </div>
      <button class="control-btn next" @click="nextSlide">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OffersBanner',
  data() {
    return {
      currentSlide: 0,
      offers: [
        {
          id: 1,
          title: "Premium Package Deal",
          description: "Get our best-selling products at an incredible discount",
          originalPrice: "$999",
          discountPrice: "$799",
          image: "https://via.placeholder.com/500x300"
        },
        {
          id: 2,
          title: "Special Spring Offer",
          description: "Limited time spring collection with exclusive benefits",
          originalPrice: "$799",
          discountPrice: "$599",
          image: "https://via.placeholder.com/500x300"
        },
        {
          id: 3,
          title: "New Customer Bundle",
          description: "Start your journey with our special newcomer package",
          originalPrice: "$599",
          discountPrice: "$449",
          image: "https://via.placeholder.com/500x300"
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.offers.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 
        ? this.offers.length - 1 
        : this.currentSlide - 1
    },
    goToSlide(index) {
      this.currentSlide = index
    }
  },
  mounted() {
    // Auto-advance slides every 5 seconds
    setInterval(this.nextSlide, 5000)
  }
}
</script>

<style scoped>
.banner-container {
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
}

.offers-carousel {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.offer-slide {
  min-width: 100%;
  background: linear-gradient(135deg, #6366f1, #a855f7);
}

.offer-content {
  display: flex;
  align-items: center;
  padding: 3rem;
  color: white;
}

.offer-text {
  flex: 1;
  padding-right: 2rem;
}

.offer-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.offer-text p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.offer-price {
  margin-bottom: 1.5rem;
}

.original-price {
  text-decoration: line-through;
  opacity: 0.7;
  margin-right: 1rem;
  font-size: 1.2rem;
}

.discount-price {
  font-size: 2rem;
  font-weight: bold;
}

.offer-button {
  padding: 12px 24px;
  background-color: white;
  color: #6366f1;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.offer-button:hover {
  transform: translateY(-2px);
}

.offer-image {
  flex: 1;
}

.offer-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.carousel-controls {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.control-btn {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.5);
}

.carousel-indicators {
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background 0.3s;
}

.indicator.active {
  background: white;
}

@media (max-width: 768px) {
  .offer-content {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .offer-text {
    padding-right: 0;
    padding-bottom: 2rem;
  }

  .offer-text h2 {
    font-size: 2rem;
  }
}
</style> 
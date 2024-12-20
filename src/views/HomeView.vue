<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
      <h1>Modern Tech Solutions</h1>
      <!-- <img src="../assets/28_sept_19_19.jpg" alt=""> -->
      <p class="scrolling-text">•Transform Your Workforce Management •Effortless HR Operations, Unified Experience •All your HR data at a glance </p>
      <!-- Login Button -->
      <button @click="navigateToLogin" class="login-button">Login</button>
      <p class="scrolling-text">- Turning coffee into code and chaos into solutions -</p>
    </div>
</section>
  </div>
  <br>
  <div>
    <header class="text-center">
        <h1 class="main-title">Welcome to Modern Tech Solutions</h1>
        <p class="sub-title">Innovating Your Future</p>
      </header>
  
      <section class="about-section">
        <h2 class="section-title">Who We Are</h2>
        <p class="section-text">
          At Modern Tech Solutions, we are passionate about delivering cutting-edge technology and innovative solutions to empower businesses and individuals.
        </p>
      </section>
  
      <section class="services-section">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div class="service-item">
            <h3>Software Development</h3>
            <p>Custom software solutions tailored to your business needs.</p>
          </div>
          <div class="service-item">
            <h3>IT Consulting</h3>
            <p>Expert guidance to optimize your technology infrastructure.</p>
          </div>
          <div class="service-item">
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud services to elevate your business operations.</p>
          </div>
        </div>
      </section>
  
      <section class="contact-section">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-text">
          Have questions or want to learn more? Reach out to us at <a href="mailto:info@moderntechsolutions.com">info@moderntechsolutions.com</a>.
        </p>
        </section>
  </div>
</template>

<script>
  export default {
    name: 'WelcomePage',
    methods: {
      navigateToLogin(){
        this.$router.push('/login')
      }
    }
  };
  </script>

<style>
/* Hero Section */
.hero {
  height: 100vh;
  width: 100%;
  background: url('../assets/28_sept_19_19.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  animation: backgroundSlide 10s infinite alternate;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adds a dark transparent overlay */
  z-index: 1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
  padding: 0 20px;
  z-index: 2; 
  position: relative;
  font-family: anton;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-content .scrolling-text {
  font-size: 1.2rem;
  margin: 10px 0;
  animation: scroll 10s linear infinite;
}

.login-button {
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes backgroundSlide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}

</style>

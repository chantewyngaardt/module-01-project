<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Modern Tech Solutions</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-success" type="submit">Search</button>
          </form>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link to="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Attendance</router-link>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link to="/attendencedetails" class="dropdown-item">Attendance Details</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <router-link to="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Payroll</router-link>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link to="/getPaySlip" class="dropdown-item">PaySlip</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <router-link to="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Employee</router-link>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link to="/employees" class="dropdown-item">All Employees</router-link></li>
                  <li><router-link to="/performance-reviews" class="dropdown-item">Performance Reviews</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <router-link to="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Leave</router-link>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link to="/leaverequest" class="dropdown-item">Leave Request</router-link></li>
                  <li><router-link to="/leaveapproval" class="dropdown-item">Leave Approval</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="container mt-5 pt-5">
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from './components/Dashboard.vue';
import HomeView from './views/HomeView.vue';
import PerformanceReview from './views/PerformanceReviewsView.vue'; 
import LoginView from './views/LoginView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/dashboard', component: Dashboard },
  { path: '/performance-reviews', component: PerformanceReview },
  { path: '/login', component: LoginView},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {
  name: 'App',
  components: {
    HomeView,
  },
};
</script>

<style>
#app {
  font-family: Bold, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px; 
}

nav {
  padding: 15px;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

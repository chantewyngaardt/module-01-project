import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import AttendenceView from '@/views/AttendanceView.vue'
import EmployeeView from '@/views/EmployeeView.vue'
import LeaveRequestView from '@/views/LeaveRequestView.vue'
import LeaveApprovalView from '@/views/LeaveApprovalView.vue'
import PaySlipView from '@/views/PaySlipView.vue'
import PerformanceReviewsView from '@/views/PerformanceReviewsView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },

  {
    path: '/attendencedetails',
    name: 'attendencedet',
    component: AttendenceView
  },
  {
    path: '/employees',
    name: 'employees',
    component: EmployeeView 
  },
  {
    path: '/leaverequest',
    name: 'leaverequest',
    component: LeaveRequestView
  },
  {
    path: '/leaveapproval',
    name: 'LeaveApproval',
    component: LeaveApprovalView
  },
  // {
  //   path: '/payrun',
  //   name: 'payrun',
  //   component: PayRunView
  // },
  {
    path: '/getpayslip',
    name: 'getpayslip',
    component: PaySlipView
  },
  {
    path: '/performance-reviews',
    name: 'PerformanceReviews',
    component: PerformanceReviewsView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

<template>
    <div class="dashboard">
      <div class="sidebar">
        <h2>HR Dashboard</h2>
        <ul>
          <li @click="selectedTab = 'employees'">Employees</li>
          <li @click="selectedTab = 'payroll'">Payroll</li>
          <li @click="selectedTab = 'attendance'">Attendance</li>
        </ul>
      </div>
  
      <div class="main-content">
        <div v-if="selectedTab === 'employees'" class="content">
          <h3>Employee List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in employees" :key="employee.id">
                <td>{{ employee.name }}</td>
                <td>{{ employee.id }}</td>
                <td>{{ employee.title }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div v-if="selectedTab === 'payroll'" class="content">
          <Payroll :employees="employees" />
        </div>
  
        <div v-if="selectedTab === 'attendance'" class="content">
          <h3>Attendance Overview</h3>
          <div class="attendance-summary">
            <p><strong>Total Attendance Today:</strong> {{ totalAttendance }}</p>
            <p><strong>Absent Employees:</strong> {{ absentEmployees }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Payroll from './Payroll.vue';
  
  export default {
    components: { Payroll },
    data() {
      return {
        selectedTab: 'employees', // Default tab
        employees: [
          { id: 1, name: 'Milan', title: 'Developer' },
          { id: 2, name: 'Charlie', title: 'Designer' },
          { id: 3, name: 'Luke', title: 'HR' }
        ],
        attendance: [
          { employeeId: 1, present: true },
          { employeeId: 2, present: false },
          { employeeId: 3, present: true },
        ]
      };
    },
    computed: {
      totalAttendance() {
        return this.attendance.filter(record => record.present).length;
      },
      absentEmployees() {
        return this.attendance.filter(record => !record.present).length;
      }
    }
  };
  </script>
  
  <style scoped>
  /* ... */
  </style>
<template>
  <div class="payroll-summary">
    <h3>Payroll Overview</h3>
    <p><strong>Total Employees:</strong> {{ employees.length }}</p>
    <p><strong>Average Salary:</strong> ${{ averageSalary }}</p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Title</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.id }}</td>
          <td>{{ employee.title }}</td>
          <td>${{ getSalary(employee.title) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    employees: Array
  },
  data() {
    return {
      salaries: {
        'Developer': 5500,
        'Designer': 6100,
        'HR': 6300
      }
    };
  },
  computed: {
    averageSalary() {
      const totalSalary = this.employees.reduce((acc, employee) => acc + this.getSalary(employee.title), 0);
      return (totalSalary / this.employees.length).toFixed(2);
    }
  },
  methods: {
    getSalary(title) {
      return this.salaries[title] || 0;
    }
  }
};
</script>

<style scoped>
/* ... */
</style>
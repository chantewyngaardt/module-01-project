<template>
  <div id="app" class="dashboard">
    <!-- Statistics Section -->
    <!-- This section displays key statistics like CPU traffic, sales, and new members -->
    <section class="statistics">
      <!-- Iterates over the statistics array and displays each statistic card -->
      <div class="stat-card" v-for="stat in statistics" :key="stat.title">
        <i :class="stat.icon"></i> <!-- Icon for each statistic -->
        <h3>{{ stat.title }}</h3> <!-- Title of the statistic -->
        <p>{{ stat.value }}</p> <!-- Value of the statistic -->
      </div>
    </section>

    <!-- Chart Section -->
    <!-- Displays charts for business metrics like sales, CPU traffic, and new members -->
    <section class="chart-section">
      <h2>Business Metrics</h2>
      <div class="chart-grid">
        <!-- Each canvas element represents a different chart -->
        <div class="chart-container">
          <canvas id="salesChart"></canvas> <!-- Sales chart -->
        </div>
        <div class="chart-container">
          <canvas id="trafficChart"></canvas> <!-- CPU traffic chart -->
        </div>
        <div class="chart-container">
          <canvas id="membersChart"></canvas> <!-- New members chart -->
        </div>
      </div>
    </section>

    <!-- Table Section -->
    <!-- Displays a table of employee information with sorting and search functionality -->
    <section class="table-section">
      <h2>Employee Information</h2>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search employees..."
        class="search-input"
      />
      <table>
        <thead>
          <tr>
            <!-- Table headers with sorting functionality -->
            <th @click="sortTable('employeeId')">ID</th>
            <th @click="sortTable('name')">Name</th>
            <th @click="sortTable('position')">Position</th>
            <th @click="sortTable('department')">Department</th>
            <th @click="sortTable('salary')">Salary</th>
          </tr>
        </thead>
        <tbody>
          <!-- Iterates over filtered employees to display in the table rows -->
          <tr v-for="employee in filteredEmployees" :key="employee.employeeId">
            <td>{{ employee.employeeId }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.position }}</td>
            <td>{{ employee.department }}</td>
            <td>R{{ employee.salary }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import Chart from "chart.js/auto";

export default {
  name: "Dashboard",
  setup() {
    // List of employees with sample data
    const employees = ref([
      { employeeId: 1, name: "Sibongile Nkosi", position: "Software Engineer", department: "Development", salary: 70000 },
      { employeeId: 2, name: "Lungile Moyo", position: "HR Manager", department: "HR", salary: 80000 },
      { employeeId: 3, name: "Thabo Molefe", position: "Quality Analyst", department: "QA", salary: 55000 },
      { employeeId: 4, name: "Keshav Naidoo", position: "Sales Representative", department: "Sales", salary: 60000 },
      { employeeId: 5, name: "Zanele Khumalo", position: "Marketing Specialist", department: "Marketing", salary: 58000 },
    ]);

    // Search query binding
    const searchQuery = ref("");
    // Variables for sorting
    const sortKey = ref("");
    const sortOrder = ref(1); // 1 for ascending, -1 for descending

    // Statistics data
    const statistics = ref([
      { title: "CPU Traffic", value: "90%", icon: "fas fa-microchip" },
      { title: "Sales", value: "200", icon: "fas fa-dollar-sign" },
      { title: "New Members", value: "20", icon: "fas fa-users" },
    ]);

    // Computed property to filter employees based on search query
    const filteredEmployees = computed(() => {
      return employees.value.filter((employee) =>
        Object.values(employee)
          .join(" ") // Join all employee fields into a single string
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()) // Filter by search query
      );
    });

    // Function to sort the employee table based on clicked column
    const sortTable = (key) => {
      // Toggle the sorting order if the same column is clicked
      sortOrder.value = sortKey.value === key ? -sortOrder.value : 1;
      sortKey.value = key;

      // Sorting logic
      employees.value.sort((a, b) => {
        const valA = a[key];
        const valB = b[key];
        if (typeof valA === "string") {
          return valA.localeCompare(valB) * sortOrder.value;
        }
        return (valA - valB) * sortOrder.value;
      });
    };

    // Function to render charts
    const renderCharts = () => {
      const options = {
        responsive: true,
        maintainAspectRatio: false,
      };

      // Sales chart (line chart)
      new Chart(document.getElementById("salesChart"), {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Sales",
              data: [10, 20, 30, 40, 50],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
            },
          ],
        },
        options,
      });

      // CPU traffic chart (doughnut chart)
      new Chart(document.getElementById("trafficChart"), {
        type: "doughnut",
        data: {
          labels: ["Used", "Available"],
          datasets: [
            {
              label: "CPU Traffic",
              data: [90, 10],
              backgroundColor: ["#FF6384", "#36A2EB"],
            },
          ],
        },
        options,
      });

      // New members chart (bar chart)
      new Chart(document.getElementById("membersChart"), {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "New Members",
              data: [5, 10, 15, 10, 20],
              backgroundColor: "rgba(153, 102, 255, 0.2)",
              borderColor: "rgba(153, 102, 255, 1)",
            },
          ],
        },
        options,
      });
    };

    // Call the renderCharts function once the component is mounted
    onMounted(renderCharts);

    return { employees, searchQuery, filteredEmployees, sortTable, statistics };
  },
};
</script>

<style>
/* Base styling for the dashboard */
.dashboard {
  font-family: Arial, sans-serif;
  padding: 20px;
  color: #333;
  background-color: #f8f9fa;
}

/* Section for statistics cards */
.statistics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

/* Individual statistic card styling */
.stat-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

/* Hover effect for statistic cards */
.stat-card:hover {
  transform: translateY(-10px);
}

/* Icon styling inside each statistic card */
.stat-card i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #007bff;
}

/* Chart section */
.chart-section {
  margin-bottom: 40px;
}

/* Grid for chart containers */
.chart-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Individual chart container */
.chart-container {
  height: 300px;
}

/* Search input field */
.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

/* Table section styling */
.table-section {
  margin-top: 40px;
}

/* Table styling */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

/* Table header styling */
th, td {
  text-align: center;
  padding: 12px;
  border: 1px solid #ddd;
}

/* Table header cells styling */
th {
  cursor: pointer;
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

/* Hover effect for table rows */
tbody tr:hover {
  background-color: #f9f9f9;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .chart-container {
    height: 200px;
  }

  .statistics {
    grid-template-columns: 1fr;
  }

  .search-input {
    font-size: 0.9rem;
    padding: 8px;
  }

  th, td {
    font-size: 0.9rem;
    padding: 8px;
  }
}

/* Media query for extremely small screens (portrait phones) */
@media (max-width: 480px) {
  .stat-card {
    padding: 15px;
  }

  .chart-container {
    height: 180px;
  }

  th, td {
    padding: 6px;
  }
}
</style>
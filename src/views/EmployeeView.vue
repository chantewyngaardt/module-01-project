<template>
  <div class="container mt-5">
    <!-- Main Title of the Employee Page -->
    <h1 class="main-title">Employees</h1>
    <!-- Subtitle for the Employee List section -->
    <h2 class="sub-title">Employee list</h2> 

    <!-- Button to trigger adding a new employee -->
    <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-success" @click="addEmployee">Add Employee</button>
    </div>

    <!-- Employee Information Table -->
    <table class="table table-striped">
      <!-- Table Header -->
      <thead class="thead-dark">
        <tr>
          <!-- Column Headers -->
          <th>Employee ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Employment History</th>
          <th>Contact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Looping through each employee to display their information in the table -->
        <tr v-for="employee in employeeInformation" :key="employee.employeeId">
          <td>{{ employee.employeeId }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.department }}</td>
          <td>R{{ employee.salary.toLocaleString() }}</td>
          <td>{{ employee.employmentHistory }}</td>
          <td>
            <!-- Contact link that opens email client with the employee's email -->
            <a :href="'mailto:' + employee.contact">{{ employee.contact }}</a>
          </td>
          <td>
            <!-- Edit and Delete buttons for employee actions -->
            <button class="btn btn-primary btn-sm" @click="editEmployee(employee.employeeId)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteEmployee(employee.employeeId)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  data() {
    return {
      // Array of employee data with relevant details
      employeeInformation: [
        {
          employeeId: 1,
          name: "Sibongile Nkosi",
          position: "Software Engineer",
          department: "Development",
          salary: 70000,
          employmentHistory: "Joined in 2015, promoted to Senior in 2018",
          contact: "sibongile.nkosi@moderntech.com"
        },
        {
          employeeId: 2,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          salary: 80000,
          employmentHistory: "Joined in 2013, promoted to Manager in 2017",
          contact: "lungile.moyo@moderntech.com"
        },
        {
            "employeeId": 3,
            "name": "Thabo Molefe",
            "position": "Quality Analyst",
            "department": "QA",
            "salary": 55000,
            "employmentHistory": "Joined in 2018",
            "contact": "thabo.molefe@moderntech.com"
        },
        {
            "employeeId": 4,
            "name": "Keshav Naidoo",
            "position": "Sales Representative",
            "department": "Sales",
            "salary": 60000,
            "employmentHistory": "Joined in 2020",
            "contact": "keshav.naidoo@moderntech.com"
        },
        {
            "employeeId": 5,
            "name": "Zanele Khumalo",
            "position": "Marketing Specialist",
            "department": "Marketing",
            "salary": 58000,
            "employmentHistory": "Joined in 2019",
            "contact": "zanele.khumalo@moderntech.com"
        },
        {
            "employeeId": 6,
            "name": "Sipho Zulu",
            "position": "UI/UX Designer",
            "department": "Design",
            "salary": 65000,
            "employmentHistory": "Joined in 2016",
            "contact": "sipho.zulu@moderntech.com"
        },
        {
            "employeeId": 7,
            "name": "Naledi Moeketsi",
            "position": "DevOps Engineer",
            "department": "IT",
            "salary": 72000,
            "employmentHistory": "Joined in 2017",
            "contact": "naledi.moeketsi@moderntech.com"
        },
        {
            "employeeId": 8,
            "name": "Farai Gumbo",
            "position": "Content Strategist",
            "department": "Marketing",
            "salary": 56000,
            "employmentHistory": "Joined in 2021",
            "contact": "farai.gumbo@moderntech.com"
        },
        {
            "employeeId": 9,
            "name": "Karabo Dlamini",
            "position": "Accountant",
            "department": "Finance",
            "salary": 62000,
            "employmentHistory": "Joined in 2018",
            "contact": "karabo.dlamini@moderntech.com"
        },
        {
            "employeeId": 10,
            "name": "Fatima Patel",
            "position": "Customer Support Lead",
            "department": "Support",
            "salary": 58000,
            "employmentHistory": "Joined in 2016",
            "contact": "fatima.patel@moderntech.com"
        }
      ]
    };
  },
  methods: {
    // Method for editing an employee's information
    editEmployee(employeeId) {
      alert(`Edit employee with ID: ${employeeId}`);
    },
    // Method for deleting an employee after confirmation
    deleteEmployee(employeeId) {
      const confirmed = confirm('Are you sure you want to delete this employee?');
      if (confirmed) {
        // Filter out the employee to delete from the employeeInformation array
        this.employeeInformation = this.employeeInformation.filter(
          employee => employee.employeeId !== employeeId
        );
      }
    },
    // Method for adding a new employee by prompting the user for their details
    addEmployee() {
      const name = prompt("Enter employee name:");
      const position = prompt("Enter employee position:");
      const department = prompt("Enter employee department:");
      const salary = parseFloat(prompt("Enter employee salary:"));
      const employmentHistory = prompt("Enter employment history:");
      const contact = prompt("Enter employee contact email:");

      // Validate the provided information and add the new employee if valid
      if (name && position && department && !isNaN(salary) && employmentHistory && contact) {
        const newEmployee = {
          employeeId: this.employeeInformation.length
            ? Math.max(...this.employeeInformation.map(e => e.employeeId)) + 1
            : 1, // Generate a unique ID based on the current IDs
          name,
          position,
          department,
          salary,
          employmentHistory,
          contact
        };
        this.employeeInformation.push(newEmployee);
    alert("New employee added successfully!");
  } else {
    alert("Please provide all employee details correctly.");
  }
    }
  }
};
</script>

<style scoped>
/* Styling for the main title */
.main-title {
  font-size: 3rem;
  font-weight: 700;
  color: #000000;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 30px;
  text-transform: uppercase;
}

/* Styling for the subtitle */
.sub-title {
  font-size: 2rem;
  color: #007bff;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 400;
}

/* Styling for the employee information table */
.table {
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
}

/* Table headers styling */
th {
  background-color: #007bff;
  color: #fff;
  padding: 12px;
  text-align: center;
  font-size: 1rem;
}

/* Table data styling */
td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  font-size: 0.9rem;
}

/* Hover effect for table rows */
tr:hover {
  background-color: #f8f9fa;
}

/* Styling for the table header */
thead {
  border-bottom: 2px solid #007bff;
}

/* Styling for email links */
a {
  color: #007bff;
  text-decoration: none;
}

/* Hover effect for email links */
a:hover {
  text-decoration: underline;
}

/* Button styling */
button {
  font-size: 0.9rem;
  padding: 8px 15px;
}

/* Responsive design */
@media (max-width: 1200px) {
  /* Adjust table font sizes for larger screens */
  .main-title {
    font-size: 2.5rem;
  }
  .sub-title {
    font-size: 1.8rem;
  }
  th, td {
    font-size: 1rem;
    padding: 10px;
  }
}

@media (max-width: 992px) {
  /* Mobile tablet size */
  .main-title {
    font-size: 2rem;
  }
  .sub-title {
    font-size: 1.5rem;
  }

  /* Stack table data vertically for smaller screens */
  .table, th, td {
    display: block;
    width: 100%;
    text-align: left;
  }

  /* Remove table header borders */
  th {
    border-bottom: none;
  }

  /* Add margin between data rows */
  td {
    margin-bottom: 10px;
    padding: 8px;
  }

  /* Make buttons larger for easier clicking on small screens */
  button {
    font-size: 1rem;
    padding: 10px 20px;
  }
}

@media (max-width: 768px) {
  /* Small screens (mobile phones) */
  .main-title {
    font-size: 1.5rem;
  }
  .sub-title {
    font-size: 1.2rem;
  }

  /* Hide the "Actions" column in the table for mobile devices */
  .table td:nth-child(8), .table th:nth-child(8) {
    display: none;
  }

  /* Adjust button size */
  button {
    font-size: 1.1rem;
    padding: 12px 25px;
  }

  /* Ensure that the table still looks good when viewed on mobile */
  td {
    padding: 10px;
    font-size: 0.9rem;
  }
}
</style>
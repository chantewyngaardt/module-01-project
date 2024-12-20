<template>
  <br><br><br>
    <!-- Main container for the payroll calculator -->
    <section class="payroll-calculator container mt-5">
      <!-- Title of the payroll calculator -->
      <h2 class="text-center mb-4">Payroll Calculator</h2>
      
      <!-- Button to trigger the modal for employee selection -->
      <button class="btn btn-primary" @click="showModal = true">Select Employee & Calculate Pay</button>

      <!-- Modal to display employee list for selection -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h4 class="mb-3">Select Employee</h4>
          
          <!-- List of employees with their working hours and leave deductions -->
          <ul class="list-group mb-3">
            <li
              v-for="employee in payrollData"
              :key="employee.employeeId"
              class="list-group-item d-flex justify-content-between align-items-center">
              <!-- Employee information and select button -->
              <span>Employee {{ employee.employeeId }} (Hours: {{ employee.hoursWorked }}, Leave: {{ employee.leaveDeductions }})</span>
              <button class="btn btn-success btn-sm" @click="selectEmployee(employee)">Select</button>
            </li>
          </ul>

          <!-- Button to close the modal -->
          <button class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>

      <!-- Result section that displays the calculated pay for the selected employee -->
      <div v-if="payResult !== null" class="result mt-4 p-3 border rounded shadow">
        <h5 class="text-success">Calculated Pay:</h5>
        <!-- Displaying selected employee data and calculated pay -->
        <p>Employee ID: {{ selectedEmployeeData?.employeeId }}</p>
        <p>Hours Worked: {{ selectedEmployeeData?.hoursWorked }}</p>
        <p>Leave Deductions: {{ selectedEmployeeData?.leaveDeductions }}</p>
        <p>Final Salary: R{{ payResult }}</p>
        
        <!-- Button to close the result display -->
        <button class="btn btn-secondary" @click="closeResult">Close</button>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      // Sample payroll data for employees
      payrollData:  [
        { employeeId: 1, hoursWorked: 160, leaveDeductions: 8, finalSalary: 69500 },
        { employeeId: 2, hoursWorked: 150, leaveDeductions: 10, finalSalary: 79000 },
        { employeeId: 3, hoursWorked: 170, leaveDeductions: 4, finalSalary: 54800 },
        { employeeId: 4, hoursWorked: 165, leaveDeductions: 6, finalSalary: 59700 },
        { employeeId: 5, hoursWorked: 158, leaveDeductions: 5, finalSalary: 57850 },
        { employeeId: 6, hoursWorked: 168, leaveDeductions: 2, finalSalary: 64800 },
        { employeeId: 7, hoursWorked: 175, leaveDeductions: 3, finalSalary: 71800 },
        { employeeId: 8, hoursWorked: 160, leaveDeductions: 0, finalSalary: 56000 },
        { employeeId: 9, hoursWorked: 155, leaveDeductions: 5, finalSalary: 61500 },
        { employeeId: 10, hoursWorked: 162, leaveDeductions: 4, finalSalary: 57750 },
      ],
      
      // Variables to control the modal and display results
      showModal: false,
      selectedEmployeeData: null,
      payResult: null,
    };
  },
  methods: {
    // Method to select an employee and display their salary
    selectEmployee(employee) {
      this.selectedEmployeeData = employee;
      this.payResult = employee.finalSalary;
      this.closeModal(); // Close modal after selection
    },

    // Method to close the modal
    closeModal() {
      this.showModal = false;
    },

    // Method to reset and close the result section
    closeResult() {
      this.payResult = null;
      this.selectedEmployeeData = null;
    },
  },
};
</script>

<style scoped>
/* Main payroll calculator container */
.payroll-calculator {
  max-width: 700px;
  margin: 20px auto;
  padding: 25px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Title styling */
.payroll-calculator h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

/* Button styling */
button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button:focus {
  outline: 2px solid #0056b3;
  outline-offset: 2px;
}

/* Modal overlay styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal content styling */
.modal-content {
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  text-align: center;
}

/* Employee list styling */
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-group-item {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.list-group-item:hover {
  background: rgba(0, 0, 0, 0.1);
}

/* Result display styling */
.result {
  background: rgba(248, 249, 250, 0.9);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.result h5 {
  color: #28a745;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .payroll-calculator {
    padding: 15px;
  }

  .payroll-calculator h2 {
    font-size: 1.5rem;
  }

  .modal-content {
    padding: 15px;
  }

  button {
    padding: 10px;
    font-size: 0.9rem;
  }

  .list-group-item {
    padding: 10px;
    font-size: 0.9rem;
  }

  .result {
    padding: 15px;
    font-size: 1rem;
  }
}
</style>

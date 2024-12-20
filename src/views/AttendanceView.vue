<template>
    <div class="table-container">
      <h1>Staff Attendance</h1>
      <!-- Filters -->
      <div class="filters">
        <input v-model="filters.employeeId" type="text" placeholder="Filter by Employee ID">
        <input v-model="filters.name" type="text" placeholder="Filter by Name">
        <input v-model="filters.date" type="date" placeholder="Filter by Date">
        <select v-model="filters.status">
          <option value="">Filter by Status</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button @click="applyFilters">Filter</button>
        <button @click="resetFilters">Reset</button>
      </div>
      <AttendanceTable :attendanceRecords="filteredRecords" />
    </div>
  </template>
<script>
import AttendanceTable from '../components/AttendanceTable.vue';
export default {
  components: {
    AttendanceTable,
  },
  data() {
    return {
      attendanceRecords: [
        {
            "employeeId": 1,
            "name": "Sibongile Nkosi",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-22",
                    "reason": "Sick Leave",
                    "status": "Approved"
                },
                {
                    "date": "2024-12-01",
                    "reason": "Personal",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 2,
            "name": "Lungile Moyo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-15",
                    "reason": "Family Responsibility",
                    "status": "Denied"
                },
                {
                    "date": "2024-12-02",
                    "reason": "Vacation",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 3,
            "name": "Thabo Molefe",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-10",
                    "reason": "Medical Appointment",
                    "status": "Approved"
                },
                {
                    "date": "2024-12-05",
                    "reason": "Personal",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 4,
            "name": "Keshav Naidoo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-20",
                    "reason": "Bereavement",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 5,
            "name": "Zanele Khumalo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-01",
                    "reason": "Childcare",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 6,
            "name": "Sipho Zulu",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-18",
                    "reason": "Sick Leave",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 7,
            "name": "Naledi Moeketsi",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-22",
                    "reason": "Vacation",
                    "status": "Pending"
                }
            ]
        },
        {
            "employeeId": 8,
            "name": "Farai Gumbo",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-02",
                    "reason": "Medical Appointment",
                    "status": "Approved"
                }
            ]
        },
        {
            "employeeId": 9,
            "name": "Karabo Dlamini",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-11-19",
                    "reason": "Childcare",
                    "status": "Denied"
                }
            ]
        },
        {
            "employeeId": 10,
            "name": "Fatima Patel",
            "attendance": [
                {
                    "date": "2024-11-25",
                    "status": "Present"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
            ],
            "leaveRequests": [
                {
                    "date": "2024-12-03",
                    "reason": "Vacation",
                    "status": "Pending"
                }
            ]
        }
      ],
    //   Code created with the help of ChatGPT
      filters:{
        employeeId: '',
        name: '',
        date: '',
        status: '',
      },
      filteredRecords: [],
    };
  },
  computed: {
    getAllAttendanceRecords() {
      return this.attendanceRecords.flatMap(employee => 
        employee.attendance.map(record => ({
          employeeId: employee.employeeId,
          name: employee.name,
          ...record
        }))
      );
    },
  },
  methods: {
    applyFilters() {
  this.filteredRecords = this.getAllAttendanceRecords.filter(record => {
    const matchesEmployeeId = this.filters.employeeId
      ? record.employeeId.toString() === this.filters.employeeId
      : true;
    const matchesName = this.filters.name
      ? record.name.toLowerCase().includes(this.filters.name.toLowerCase())
      : true;
    const matchesDate = this.filters.date
      ? record.date === this.filters.date
      : true;
    const matchesStatus = this.filters.status
      ? record.status === this.filters.status
      : true;
    return matchesEmployeeId && matchesName && matchesDate && matchesStatus;
  });
},
    resetFilters() {
      this.filters = {
        employeeId: '',
        name: '',
        date: '',
        status: '',
      };
      this.filteredRecords = this.getAllAttendanceRecords;
    },
  },
  mounted() {
    // Initialize with all records
    this.filteredRecords = this.getAllAttendanceRecords;
  },
};
</script>
<style scoped>
h1 {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 2rem; /* Adjusted for better scaling */
  text-align: center;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
}

.filters input, .filters select {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 200px;
}

.filters button {
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filters button:hover {
  background-color: #0056b3;
}

.filters button:last-child {
  background-color: #b02a37;
}

.table-container {
  overflow-x: auto;
  width: 100%;
  padding: 10px; /* Add padding for better layout */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 8px;
}

th {
  border: 1px solid #ddd;
}

tr:nth-child(even) {
  background-color: #f1f1f1;
}

/* Responsive Design */
@media (max-width: 600px) {
  .filters input, .filters select, .filters button {
    width: 100%;
  }

  .filters {
    flex-direction: column;
    gap: 10px;
  }

  h1 {
    font-size: 1.5rem; /* Adjust font size for small screens */
  }

  .filters button {
    font-size: 14px;
    padding: 8px 12px;
  }

  table {
    font-size: 14px;
  }

  th, td {
    padding: 6px;
  }
}

@media (max-width: 768px) {
  .table-container {
    padding: 15px;
  }

  h1 {
    font-size: 1.75rem; /* Adjust font size for medium screens */
  }

  .filters {
    gap: 10px;
    flex-wrap: wrap;
  }

  .filters input, .filters select {
    width: calc(50% - 10px); /* Make inputs take 50% width on medium screens */
  }

  .filters button {
    width: calc(50% - 10px); /* Make button take 50% width on medium screens */
    font-size: 14px;
  }

  table {
    font-size: 16px; /* Adjust font size for table on medium screens */
  }

  th, td {
    padding: 10px;
  }
}
</style>
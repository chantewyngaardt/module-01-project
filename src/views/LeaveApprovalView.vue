<template>
    <div>
    <!-- Start of Leave Request Table -->
        <h1>Leave Approval</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                <!-- Headings for table -->
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            <!-- Loop through pending requests and display eacg -->
                <tr v-for="(request, index) in pendingRequests" :key="request.employeeId + '-' + request.date">
                    <td>{{ request.employeeId }}</td>
                    <td>{{ request.name }}</td>
                    <td>{{ request.date }}</td>
                    <td>{{ request.reason }}</td>
                    <td>{{ request.status }}</td>
                    <td>
                    <!-- Approve or Deny button -->
                        <button class="btn btn-success btn-sm" @click="updateRequestStatus(index, 'Approved')">Approve</button>
                        <button class="btn btn-danger btn-sm" @click="updateRequestStatus(index, 'Denied')">Deny</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>Attendance Records</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            <!-- Loop through attendance records and display each -->
                <tr v-for="record in attendanceRecords" :key="record.employeeId + '-' + record.date">
                    <td>{{ record.employeeId }}</td>
                    <td>{{ record.name }}</td>
                    <td>{{ record.date }}</td>
                    <td>{{ record.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "LeaveApproval",
    data() {
        return {
            // Dummy data with leave requests and attendance records
        attendanceAndLeave: [
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
            },
        ],
        };
    },
    computed: {
    // Returns a list of leave requests that are still pending
    pendingRequests() {
      return this.attendanceAndLeave
        .flatMap((emp) =>
          (emp.leaveRequests || []).map((req) => ({
            employeeId: emp.employeeId,
            name: emp.name,
            date: req.date,
            reason: req.reason,
            status: req.status,
          }))
        )
        .filter((req) => req.status === "Pending"); // Only include pending requests
    },
    // Returns all attendance records
    attendanceRecords() {
      return this.attendanceAndLeave.flatMap((emp) =>
        (emp.attendance || []).map((rec) => ({
          employeeId: emp.employeeId,
          name: emp.name,
          date: rec.date,
          status: rec.status,
        }))
      );
    },
  },
  methods: {
    // Method to approve or deny a leave request
    updateRequestStatus(index, status) {
      // Find the pending request from the list using the index
      const request = this.pendingRequests[index];

      // Find the employee who made the leave request
      const employee = this.attendanceAndLeave.find(
        (emp) => emp.employeeId === request.employeeId
      );

      // Update the status of the leave request (Approved or Denied)
      const leaveRequest = employee.leaveRequests.find(
        (req) => req.date === request.date
      );
      if (leaveRequest) leaveRequest.status = status; // Set the new status

      // If the request is approved, update the attendance
      if (status === "Approved") {
        // Check if the employee already has an attendance record for this date
        const attendanceRecord = employee.attendance.find(
          (att) => att.date === request.date
        );

        // If no attendance record exists, add one with 'Absent' status
        if (attendanceRecord) {
          attendanceRecord.status = "Absent"; // Mark as absent for the day
        } else {
          employee.attendance.push({ date: request.date, status: "Absent" }); // Create new attendance record
        }
      }

      // Remove the request from the pending requests list
      this.attendanceAndLeave.forEach((emp) => {
        if (emp.employeeId === request.employeeId) {
          // Filter out the approved/denied request from the employee's leaveRequests array
          emp.leaveRequests = emp.leaveRequests.filter(
            (req) => req.date !== request.date
          );
        }
      });
    },
  },
};
</script>

<style scoped>
h1 {
    text-align: center;
    font-size: 2rem;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #333;
}

.table {
    width: 100%;
    margin: 20px auto;
    border-collapse: collapse;
    font-size: 1rem;
}

.table th, .table td {
    text-align: left;
    padding: 10px;
    border: 1px solid #ddd;
}

.table th {
    background-color: #f4f4f4;
    color: #555;
}

.table-bordered th, .table-bordered td {
    border: 1px solid #ccc;
}

.btn {
    padding: 5px 10px;
    font-size: 0.9rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

.btn-success {
    background-color: #28a745;
    color: #fff;
}

.btn-success:hover {
    background-color: #218838;
}

.btn-danger {
    background-color: #dc3545;
    color: #fff;
}

.btn-danger:hover {
    background-color: #c82333;
}

/* Responsive Design */
@media (max-width: 1024px) {
    h1 {
        font-size: 1.8rem;
    }

    .table {
        font-size: 1rem;
    }

    .btn {
        font-size: 0.85rem;
        padding: 6px 12px;
    }
}

@media (max-width: 768px) {
    h1 {
        font-size: 1.6rem;
    }

    .table {
        font-size: 0.9rem;
    }

    .btn {
        font-size: 0.8rem;
        padding: 5px 10px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 1.4rem;
    }

    .table {
        font-size: 0.8rem;
        overflow-x: auto;
        display: block;
    }

    .table th, .table td {
        padding: 8px;
    }

    .btn {
        font-size: 0.7rem;
        padding: 4px 8px;
    }
}

</style>

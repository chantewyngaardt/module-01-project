<template>
    <div class="container mt-4">
        <h3>Attendance Records</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="record in attendanceRecords" :key="record.employeeID + record.date">
                    <td>{{ record.employeeId }}</td>
                    <td>{{ record.name}}</td>
                    <td>{{ record.date}}</td>
                    <td>{{ record.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        attendanceRecords:{
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f4f4f4;
}
</style>
<template>
    <div class="form">
      <h1>Leave form</h1>
      <form class="form-class" @submit.prevent="submitForm">
        <h4>Leave request</h4>
        <label for="employeeId" class="custom-label">Employee Id:</label> <br>
        <input type="text" v-model="employeeid" id="employeeId"> <br>
        <label for="name" class="custom-label">Name: </label> <br>
        <input type="text" v-model="name" id="name"> <br>
        <label for="date" class="custom-label">Date:</label> <br>
        <input type="date" v-model="date" id="date"> <br>
        <label>Reason:</label> <br>
        <div class="radio-group">
          <div class="radio-item">
            <input type="radio" v-model="reason" value="Family Responsibility" id="familyResponsibility">
            <label for="familyResponsibility">Family Responsibility</label>
          </div>
          <div class="radio-item">
            <input type="radio" v-model="reason" value="Bereavement" id="bereavement">
            <label for="bereavement">Bereavement</label>
          </div>
          <div class="radio-item">
            <input type="radio" v-model="reason" value="Vacation" id="vacation">
            <label for="vacation">Vacation</label>
          </div>
          <div class="radio-item">
            <input type="radio" v-model="reason" value="Sick Leave" id="sickLeave">
            <label for="sickLeave">Sick Leave</label>
          </div>
          <div class="radio-item">
            <input type="radio" v-model="reason" value="Medical Appointment" id="medicalAppointment">
            <label for="medicalAppointment">Medical Appointment</label>
          </div>
          <div class="radio-item">
            <input type="radio" v-model="reason" value="Personal" id="personal">
            <label for="personal">Personal</label>
          </div>
          <div class="radio-item">
            <input type="radio" v-model="reason" value="Child Care" id="childCare">
            <label for="childCare">Child Care</label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
      </form>
      <ModalComp :show-modal="isModalVisible" @close-modal="isModalVisible = false" />
    </div>
  </template>
  <script>
import ModalComp from '@/components/ModalComp.vue';
  export default {
    components: {
        ModalComp
    },
    data() {
      return {
        employeeid: "",
        name: '',
        date: '',
        reason: '',
        isModalVisible: false
      };
    },
    methods: {
      submitForm() {
        this.isModalVisible = true;
    }
      }
    }
  </script>
  <style scoped>
/* Main form container */
.form {
  max-width: 600px;
  margin: 100px auto;
  padding: 30px;
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Form heading */
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* Form subtitle */
h4 {
  margin-bottom: 20px;
  color: #555;
  text-align: center;
}

/* Input fields and labels */
label {
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  display: block;
}

input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]:focus,
input[type="date"]:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

/* Radio button group styling */
.radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.radio-item {
  display: flex;
  align-items: center;
  background: #f1f1f1;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.radio-item:hover {
  background: #e7f3ff;
  box-shadow: 0 2px 6px rgba(0, 123, 255, 0.2);
}

.radio-item input {
  margin-right: 10px;
}

/* Submit button */
.btn {
  display: inline-block;
  width: 100%;
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form {
    padding: 20px;
    margin: 50px auto;
  }

  h1 {
    font-size: 1.8rem;
  }

  input[type="text"],
  input[type="date"] {
    font-size: 1rem;
    padding: 8px 12px;
  }

  .btn {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }

  input[type="text"],
  input[type="date"] {
    font-size: 0.9rem;
    padding: 8px;
  }

  .radio-group {
    flex-direction: column;
  }

  .btn {
    font-size: 0.9rem;
    padding: 10px;
  }
}
</style>

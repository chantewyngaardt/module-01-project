<template>
    <div class="login-container">
        <div class="login-form">
            <h1>Login</h1>
            <!-- Create Login Page -->
            <form @submit.prevent="adminLogin"> 
                <div class="form-group">
                <!-- Input for username -->
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model="username" placeholder="Username" required/>
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" placeholder="Password" required />
                </div>
                <button type="submit">Login</button>
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            </form>
        </div>
    </div>
</template> 

<script>
export default {
    name: "LoginPage",
    data(){
        return{
            username: "",
            password: "",
            errorMessage: "",
        };
    },
    methods:{
        adminLogin(){
            if (this.username === "admin" && this.password === "password123"){
                this.$router.push("/dashboard")
            }else{
                this.errorMessage = "Invalid credentials."
            }
        }
    }
}
</script>

<style scoped>
/* Main container styling */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #007bff, #0056b3);
  padding: 20px;
}

/* Login form styling */
.login-form {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.95); /* Subtle transparency for modern feel */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
}

/* Title styling */
h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

/* Form group styling */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

/* Label styling */
label {
  display: block;
  margin-bottom: 8px;
  font-size: 1rem;
  color: #555;
}

/* Input fields */
input {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.8);
  outline: none;
}

/* Button styling */
button {
  width: 100%;
  padding: 12px;
  font-size: 1.2rem;
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

/* Error message styling */
.error-message {
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 10px;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .login-container {
    padding: 15px;
  }

  .login-form {
    padding: 20px;
  }

  h1 {
    font-size: 1.8rem;
  }

  input,
  button {
    font-size: 1rem;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.6rem;
  }

  input,
  button {
    font-size: 0.9rem;
    padding: 8px;
  }
}
</style>

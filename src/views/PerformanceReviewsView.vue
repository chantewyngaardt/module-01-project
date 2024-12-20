<template>
    <div class="container">
        <h1>Performance Reviews</h1>

        <!-- Add/Edit performance reviews -->
        <!-- Code created with the help of ChatGPT -->
        <form @submit.prevent="saveReview">
            <h2>{{ isEditing ? 'Edit Review' : 'New Review' }}</h2>
            <div>
            <label>Employee Name:</label>
            <input type="text" v-model="reviewForm.employeeName" required>
        </div>
        <div>
            <label>Review Date:</label>
            <input type="date" v-model="reviewForm.date" required>
        </div>
        <div>
            <label>Perfomance Metrics:</label>
            <textarea v-model="reviewForm.metrics"></textarea>
        </div>
        <div>
            <label>Comments:</label>
            <textarea v-model="reviewForm.comments"></textarea>
        </div>
        <div>
            <label>Overall Rating</label>
            <select v-model="reviewForm.rating" required>
                <option value="" disabled>Select Rating</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
            </select>
        </div>
        <button type="submit">{{ isEditing ? 'Update' : 'Save' }}</button>
        <button type="button" @click="resetForm">Cancel</button>
        </form>

        <!-- List of reviews -->
        <div class="review-list">
            <h2>All Reviews</h2>
            <div class="search-container">
                <input v-model="searchQuery" placeholder="Search by Employee Name"/>
                <button class="search-button" type="button" @click="performSearch">Search</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Review Date</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="review in filteredReviews" :key="review.id">
                        <td>{{ review.employeeName }}</td>
                        <td>{{ review.date }}</td>
                        <td>{{ review.rating }}</td>
                        <td>
                            <button @click="editReview(review)">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
  return {
    reviewForm: {
      employeeName: "",
      date: "",
      metrics: "",
      comments: "",
      rating: "",
    },
    reviews: [
      {
        id: 1,
        employeeName: "Sibongile Nkosi",
        date: "2024-01-10",
        rating: "Excellent",
        metrics: "Consistently meets deadlines, contributes innovative ideas in projects.",
        comments: "Sibongile continues to impress with her strong technical skills and leadership in the development team. Highly reliable.",
      },
      {
        id: 2,
        employeeName: "Lungile Moyo",
        date: "2024-02-15",
        rating: "Good",
        metrics: "Good communication and team collaboration, works well under pressure.",
        comments: "Lungile has shown improvement in managing HR processes and supporting team dynamics. There's still room for growth in proactive conflict resolution.",
      },
      {
        id: 3,
        employeeName: "Thabo Molefe",
        date: "2024-03-05",
        rating: "Average",
        metrics: "Attention to detail is good, but occasionally misses minor defects in products.",
        comments: "Thabo performs well but should focus on improving consistency in identifying issues. Could benefit from more proactive testing approaches.",
      },
      {
        id: 4,
        employeeName: "Keshav Naidoo",
        date: "2024-04-12",
        rating: "Good",
        metrics: "Strong sales performance, regularly exceeds monthly targets.",
        comments: "Keshav has been a valuable addition to the sales team, consistently meeting targets. Working on improving communication during sales presentations would help his career growth.",
      },
      {
        id: 5,
        employeeName: "Zanele Khumalo",
        date: "2024-05-21",
        rating: "Good",
        metrics: "Creative input on marketing campaigns is valuable, very adaptable to changes.",
        comments: "Zanele has performed well in executing marketing strategies and is quick to adapt to new challenges. Can work on improving campaign reporting for better insights.",
      },
      {
        id: 6,
        employeeName: "Sipho Zulu",
        date: "2024-06-14",
        rating: "Excellent",
        metrics: "Outstanding design and user experience work, with a keen eye for user-centric designs.",
        comments: "Sipho continues to exceed expectations in UI/UX design. His work is consistent, well-researched, and highly impactful for the product's success.",
      },
      {
        id: 7,
        employeeName: "Naledi Moeketsi",
        date: "2024-07-02",
        rating: "Excellent",
        metrics: "High proficiency in DevOps tasks, excellent collaboration with the engineering team.",
        comments: "Naledi's work in improving infrastructure reliability and continuous integration processes has been instrumental. His ability to troubleshoot and streamline operations is unmatched.",
      },
      {
        id: 8,
        employeeName: "Farai Gumbo",
        date: "2024-08-18",
        rating: "Average",
        metrics: "Creative but occasionally slow in executing marketing content.",
        comments: "Farai has great ideas, but needs to improve on delivering content on time. Training on content production tools could enhance his performance.",
      },
      {
        id: 9,
        employeeName: "Karabo Dlamini",
        date: "2024-09-09",
        rating: "Good",
        metrics: "Strong financial reporting skills, always meets reporting deadlines.",
        comments: "Karabo has consistently shown competence in managing the company's financial records. However, he can improve his communication regarding complex financial matters with non-finance teams.",
      },
      {
        id: 10,
        employeeName: "Fatima Patel",
        date: "2024-10-22",
        rating: "Good",
        metrics: "Great leadership in the support team, handles customer concerns with professionalism.",
        comments: "Fatima has been a solid leader in the support department. She efficiently resolves customer issues but could improve by implementing proactive measures to reduce recurring concerns.",
      }
    ],
    searchQuery: "",
    isEditing: false,
    editingIndex: null,
  };
},
    computed: {
    filteredReviews() {
      return this.reviews.filter(review =>
        review.employeeName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    saveReview(){
        if (this.isEditing){
            this.reviews[this.editingIndex] = {...this.reviewForm};
        }else{
            this.reviews.push({...this.reviewForm, id: Date.now()});
        }
        this.resetForm
    },
    editReview(review){
        this.isEditing = true;
        this.editingIndex = this.reviews.indexOf(review);
        this.reviewForm = {...review};
    },
    resetForm(){
        this.reviewForm = {employeeName: "", date: "", metrics: "", comments: ""};
        this.isEditing = false;
        this.editingIndex = null;
    }
  }
}
</script>

<style scoped>
/* Container */
.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 15px;
  background: rgba(255, 255, 255, 0.9); /* Subtle transparency for cohesiveness */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Form Styling */
form {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05); /* Slightly transparent for layering effect */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

form h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

form div {
  margin-bottom: 15px;
}

form label {
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

form input,
form textarea,
form select {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.8); /* Lighter background */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

form button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #0056b3;
}

form button:last-child {
  background-color: #dc3545;
  margin-left: 10px;
}

form button:last-child:hover {
  background-color: #b02a37;
}

/* Review List */
.review-list {
  margin-top: 20px;
}

.review-list h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.review-list table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.review-list th,
.review-list td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.review-list th {
  background: rgba(0, 0, 0, 0.1);
  color: #333;
}

.review-list tr:nth-child(even) {
  background: rgba(0, 0, 0, 0.05);
}

/* Search Container */
.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 8px;
}

.search-container input {
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.search-container .search-button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.search-container .search-button:hover {
  background-color: #0056b3;
}

/* Media Queries */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  form {
    padding: 15px;
  }

  .review-list table,
  .review-list th,
  .review-list td {
    font-size: 0.9rem;
  }

  .search-container {
    flex-direction: column;
  }

  .search-container input {
    margin-bottom: 10px;
  }
}

</style>
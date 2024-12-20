<template>
    <div>
      <div class="modal" v-if="showModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><i class="bi bi-check-circle-fill"></i> You have successfully submitted your form!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">Okay!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ['showModal'],
    methods: {
      closeModal() {
        this.$emit('close-modal');
      }
    }
  }
  </script>
  <style scoped>
  /* Add your modal styles here */
  .modal {
    display: block; /* Ensuring the modal is displayed */
    z-index: 0;
  }
  </style>







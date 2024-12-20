<template >
    <div>
        <h1>Daily Log</h1>
    </div>
</template>
<script>
export default {
    
}


</script>
<style >
    .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.form-label{ 
    font-weight: bold;
}

/* Media queries for responsiveness */
@media (max-width: 768px){
    .container {
        padding: 15px;
        box-shadow: none;
    }
    h1{
        font-size: 1.5rem;
    }
    .form-control {
        font-size: 0.9rem;
        padding: 10px 15px;
    }
}

@media (max-width: 480px){
    h1{
        font-size: 1.2rem;
    }
    .form-control{
        font-size: 0.8rem;
        padding: 6px;
    }
    button{
        font-size: 0.8rem;
        padding: 8px 12px;
    }
}
</style>

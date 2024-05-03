<template lang="">
    <div class="footer-item">
        <a :href="option.to"><h3>{{ option.description }}</h3></a>
    </div>
</template>

<script>
export default {
    props: {
        option: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
  .footer-item {
    flex: 1;
    text-align: center;
  }
  
  .footer-item a {
    text-decoration: none;
    color: inherit; 
  }
  
  .footer-item:hover{
    font-size: 1em;
    color: rgb(131, 192, 146);
  }
</style>
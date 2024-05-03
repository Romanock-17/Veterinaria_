<template lang="">
    <footer class="footer">
      <div class="footer-container">
        <FooterItemBar v-for="option in options" :key="option.description" :option="option" />
      </div>
    </footer>
</template>

<script>
import FooterItemBar from "./FooterItemBar.vue";

export default {
    components: {
        FooterItemBar,
    },
    data() {
        return {
            options: [
                { description: 'Sobre nosotros', to: '#' },
                { description: 'Opiniones', to: '#' },
                { description: 'Contactanos', to: '#' },
                { description: 'Terminos y condiciones', to: '#' },
            ]
        };
    }
}
</script>

<style scoped>
.footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
  }

</style>
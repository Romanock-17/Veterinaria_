<!-- Esto representa la parte HTML del componente -->
<template lang="">
    <header class="header">
      <div class="menu container">
        <a href="index.html" class="logo-container">
          <div class="circle-bg"></div>
          <img src="../assets/images/don-gato-02.svg" alt="Don Gato" class="logo-img">
        </a>  
        <NavigatorBar :options="links" />
        <div class="social">
            <a href="#"><img src="../assets/images/instagram.svg"></a>
        </div>
      </div>
    </header>
</template>

<!-- Esto representa la parte javascript del componente -->
<script>
import NavigatorBar from "./NavigatorBar.vue"

export default {
    components: {
        NavigatorBar,
    },
    data() {
        return {
            links: [
                { description: 'Inicio', to: 'inicio' },
                { description: 'Tienda', to: 'productos' },
                { description: 'Login', to: 'login' }
            ]
        }
    }
}
</script>

<!-- Esto representa la parte de estilos del componente -->
<style scoped>
.header {
    background-color: #81c796;
    min-height: 23vh;
    display: flex;
    align-items: center;
}

.logo-container {
    position: relative;
    display: inline-block;
    margin-top: 25px; 
}

.logo-img {
    display: block;
    width: 150px; 
    height: auto;
    position: relative;
    z-index: 1;
}

.circle-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255); 
    border-radius: 50%;
    z-index: 0; 
}

.menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.social img{
    width: 30px;
    margin-right: 15px;
}

#menu {
    display: none;
}

.menu-icono{
    width: 25px;
}

.header-container{
    text-align:  center;
}

.header-container h1{
    font-size: 60px;
    line-height: 80px;
    color: #fff;
    text-transform:uppercase;
    margin-bottom: 35px;
}

.header-container p{
    font-size: 16px;
    color: #fff;
    padding: 0 250px;
    margin-bottom: 25px;
}
</style>
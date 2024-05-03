<template lang="">
   <main class="veterinaria">
      <div class="veterinaria-container">
        <div class="nosotros">
          <h2>Nosotros</h2>
          <p class="parragrafos">Somos una veterinaria comprometida con el bienestar de todas las mascotas. 
          Nuestro equipo de profesionales altamente calificados se esfuerza por brindar la mejor atención y 
          cuidado a tus compañeros peludos; estamos aquí para ayudarte en cada paso del camino.
          <br>
          Como tu veterinaria de confianza, y una de las mejores que vas a encontrar, te proporcionamos los <b>siguientes servicios</b>:
        </p>
      </div>
        <div class="servicios">
          <div class="veterinaria-group">
              <div class="services">
                  <a href="login.html">
                      <img src="../assets/images/tienda.jpg" alt="Tienda">
                  </a>
                  <p>TIENDA</p>
              </div>
              <div class="services">
                  <a href="login.html">
                      <img src="../assets/images/urgencias.jpg" alt="Urgencias">
                  </a>
                  <p>URGENCIAS</p>
              </div>
              <div class="services">
                  <a href="login.html">
                      <img src="../assets/images/citas.png" alt="Citas">
                  </a>
                  <p>CITAS</p>
              </div>
            </div>
            <a href="crear_cuenta.html" class="btn-1">Registrate con nosotros</a>

          </div>
      </div>
  </main>
</template>

<style scoped>
.nosotros {
    background-color: #f09c9c;
    color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}

.parragrafos {
    text-align: justify;
}

.nosotros h2 {
    font-size: 40px;
    margin-bottom: 20px;
}

.nosotros p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 30px;
}

.nosotros b{
    text-decoration: underline;
}
 
.servicios {
    background-color: #333;
    color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
}

.veterinaria {
    padding: 100px;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7)
    ),
    url(../assets/images/login_fondo.jpeg);
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    position: relative;
}

.veterinaria-container{
    text-align: center;
}

.veterinaria-container h2{
    font-size: 55px;
    line-height: 70px;
    color: #07080e;
    text-transform: uppercase;
    padding: 0 250px;
    margin-bottom: 15px;
}

.veterinaria h2{
    text-align: center;
    margin-bottom: 20px;
}

.veterinaria-group {
    display: flex; 
    justify-content: space-between;
}

.servicios{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
}

.services {
    width: 30%; 
    margin-bottom: 20px;
    text-align: center; 
}

.services img {
    width: 100%; 
    border-radius: 40px; 
    transition: transform 0.5s ease; 
}

.services p {
    margin-top: 20px;
    font-size: 20px; 
}

.services img:hover {
    transform: scale(1.1); 
}

.btn-1{
    display: inline-block;
    padding: 11px 35px;
    background-color: salmon;
    color: #fff;
    text-transform: uppercase;
    border-radius: 20px;
    margin-top: 30px; 
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
}

.btn-1:hover{
    background-color: #8ddbb4;
    color: #fff;
    transition: 0.5s;
}
  

</style>
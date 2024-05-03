<template lang="">
    <div class="producto-container">
        <div class="producto-info">
            <div class="producto-detalle">
                <!-- Contenedor para la imagen del producto -->
                <div class="producto-img">
                    <img src="../assets/images/login_fondo.jpeg" alt="Producto">
                </div>
                <!-- Contenedor para el nombre y descripción del producto -->
                <div class="producto-descripcion">
                    <h1>Nombre del Producto</h1>
                    <p>Descripción detallada del producto. Aquí puedes incluir información sobre características, beneficios, etc.</p>
                </div>
            </div>
            <!-- Contenedor para añadir al carrito -->
            <div class="añadir-carrito">
                <div class="cantidad-container">
                    <label for="cantidad">Cantidad:</label>
                    <input type="number" id="cantidad" name="cantidad" value="1" min="1">
                </div>
                <button class="btn-agregar">Agregar al Carrito</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Estilos del contenedor principal */
.producto-container {
    max-width: 1200px;
    margin: 120px auto 0; /* Agregamos un margen superior para separar el encabezado */
    padding: 20px;
}

/* Estilos de los contenedores internos */
.producto-info {
    display: flex;
    justify-content: space-between;
}

.producto-detalle {
    flex: 1;
    margin-right: 20px;
}

.añadir-carrito {
    flex-basis: 250px; /* Ancho fijo para el contenedor de añadir al carrito */
}

/* Estilos de la imagen del producto */
.producto-img img {
    max-width: 100%;
    height: auto;
}

/* Estilos del nombre y descripción del producto */
.producto-descripcion h1 {
    margin-bottom: 10px;
    font-size: 24px;
}

.producto-descripcion p {
    font-size: 16px;
    color: #555;
}

/* Estilos del formulario de añadir al carrito */
.cantidad-container {
    margin-bottom: 10px;
}

.cantidad-container label {
    display: block;
    margin-bottom: 5px;
}

.cantidad-container input {
    width: 100px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.btn-agregar {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.btn-agregar:hover {
    background-color: #45a049;
}
</style>
<template lang="">
    <div class="search-container">
        <input type="text" placeholder="Buscar.." class="search-bar">
        <box-icon name='search' class="search-icon"></box-icon>
    </div>
    <div class="productos" id="lista-productos"> 
        <div class="producto" v-for="product in products" :key="product.id">
            <img :src="product.image" :alt="product.name" class="producto-img">
            <h5>{{ product.name }}</h5>
            <p>{{ product.description }}</p>
            <p>Precio por unidad <small class="precio">{{ product.price }}</small></p>
            <router-link class="button" :to="{ name: 'productos-id', params: { id: product?.id } }">
                VER
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'PRODUCTO PREMIUM 1',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/login_fondo.jpeg',
                    price: 5000,
                },
                {
                    id: 2,
                    name: 'PRODUCTO PREMIUM 2',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 3,
                    name: 'PRODUCTO PREMIUM 3',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 4,
                    name: 'PRODUCTO PREMIUM 4',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 5,
                    name: 'PRODUCTO PREMIUM 5',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 6,
                    name: 'PRODUCTO PREMIUM 6',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 7,
                    name: 'PRODUCTO PREMIUM 7',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 8,
                    name: 'PRODUCTO PREMIUM 8',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 9,
                    name: 'PRODUCTO PREMIUM 9',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 10,
                    name: 'PRODUCTO PREMIUM 10',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 11,
                    name: 'PRODUCTO PREMIUM 11',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 12,
                    name: 'PRODUCTO PREMIUM 12',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 13,
                    name: 'PRODUCTO PREMIUM 13',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 14,
                    name: 'PRODUCTO PREMIUM 14',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 15,
                    name: 'PRODUCTO PREMIUM 15',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
                {
                    id: 16,
                    name: 'PRODUCTO PREMIUM 16',
                    description: 'Para aquellos que deseen comprar un producto de alta calidad',
                    image: 'http://localhost:8080/images/don-gato-02.svg',
                    price: 5000,
                },
            ]
        }
    }
}
</script>

<style scoped>
/* Estilos para los productos */
.productos {
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.producto {
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.producto img {
    width: 100%;
    border-radius: 10px;
}

.producto h5 {
    margin-top: 10px;
    font-size: 18px;
}

.producto p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
}

.producto .precio {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-top: 5px;
}

.producto .button {
    display: block;
    margin-top: 10px;
    background-color: #81c796;
    color: white;
    text-align: center;
    padding: 8px 0;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.producto .button:hover {
    background-color: #63a47d;
}

.search-container {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.search-bar {
    padding: 10px;
    margin-left: 400px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 300px;
}

.search-icon {
    margin-left: -30px; /* Agregamos margen al ícono de búsqueda */
    cursor: pointer;
}
</style>
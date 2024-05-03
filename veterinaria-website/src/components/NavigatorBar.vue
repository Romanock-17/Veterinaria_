<template>
    <nav class="nav">
        <ul>
            <li v-for="option in options" :key="option.to">
                <router-link :to="{ name: option.to }">
                    {{ option.description }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.nav ul li{
    margin-top: 30px;
    position: relative;
    margin-right: 70px;
    float: left;
}

.nav ul li a{
    font-size: 18px;
    padding: 20px;
    color: #fff;
    display: block;
    font-weight: bold;
}

.nav ul li a:hover{
    color:#f09c9c;
}
</style>